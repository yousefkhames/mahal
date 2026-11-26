#!/usr/bin/env node
// Screenshot driver over raw CDP (no deps, Node 22+).
// Usage: node shoot.mjs <url> <out.png> <width> <height> [steps...]
// Steps: wait:ms | click:selector | input:selector=value | eval:code | clear
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const [url, out, W = "1280", H = "900", ...steps] = process.argv.slice(2);
const port = 9333 + Math.floor(Math.random() * 200);
const chrome = spawn("google-chrome", [
  "--headless=new", "--no-sandbox", "--disable-gpu",
  `--remote-debugging-port=${port}`, `--window-size=${W},${H}`, "about:blank"
], { stdio: "ignore" });
const die = e => { console.error(e); chrome.kill(); process.exit(1); };
const sleep = ms => new Promise(r => setTimeout(r, ms));

let ws, id = 0, pending = new Map();
async function connect(){
  for (let i = 0; i < 40; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      const page = list.find(t => t.type === "page");
      if (page) { ws = new WebSocket(page.webSocketDebuggerUrl); break; }
    } catch {}
    await sleep(250);
  }
  if (!ws) die("no CDP");
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  ws.onmessage = m => {
    const d = JSON.parse(m.data);
    if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
  };
}
function cmd(method, params = {}){
  return new Promise(res => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
}
async function evaluate(expr){
  const r = await cmd("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true });
  return r.result && r.result.result ? r.result.result.value : undefined;
}

try {
  await connect();
  await cmd("Page.enable"); await cmd("Runtime.enable");
  await cmd("Emulation.setDeviceMetricsOverride", { width: +W, height: +H, deviceScaleFactor: 1, mobile: +W < 600 });
  await cmd("Page.navigate", { url });
  await sleep(1600);
  for (const s of steps) {
    const [op, ...rest] = s.split(":"); const arg = rest.join(":");
    if (op === "wait") await sleep(+arg);
    else if (op === "clear") await evaluate("localStorage.clear()");
    else if (op === "click") await evaluate(`(document.querySelector(${JSON.stringify(arg)})||{click(){}}).click()`);
    else if (op === "input") {
      const [sel, ...v] = arg.split("=");
      await evaluate(`(()=>{const el=document.querySelector(${JSON.stringify(sel)});el.value=${JSON.stringify(v.join("="))};el.dispatchEvent(new Event("input",{bubbles:true}))})()`);
    }
    else if (op === "eval") await evaluate(arg);
    await sleep(120);
  }
  await sleep(400);
  const shot = await cmd("Page.captureScreenshot", { format: "png" });
  writeFileSync(out, Buffer.from(shot.result.data, "base64"));
  console.log("saved", out);
} catch (e) { die(e.message || e); }
chrome.kill();
process.exit(0);
