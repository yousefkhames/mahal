// Run: python3 -m http.server 8750 ; NODE_PATH=... node tests/e2e.cjs http://127.0.0.1:8750/
const puppeteer = require('puppeteer-core'); const assert = require('assert');
const url = process.argv[2] || 'http://127.0.0.1:8750/';
(async () => {
  const br = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'], headless: 'new' });
  const pg = await br.newPage(); const errs = []; pg.on('pageerror', e => errs.push(e.message));
  await pg.goto(url); await pg.evaluate(() => {
    localStorage.setItem('mahal.products', JSON.stringify([{ id: 'x', name: { en: '<img src=x onerror=window.__xss=1>' }, price: '١٢٠', sizes: ['M'], colors: ['red"><script>window.__xss=1</script>'] }]));
    localStorage.setItem('mahal.cart', '{"bad":1}'); localStorage.setItem('mahal.settings', '[1,2]');
  });
  await pg.reload(); await new Promise(r => setTimeout(r, 500));
  assert.ok(!(await pg.evaluate(() => window.__xss)), 'no xss'); console.log('ok hostile storage sanitised');
  assert.ok((await pg.$$('#grid > *')).length >= 1, 'grid renders'); console.log('ok grid renders');
  // fresh state: placeholder WA is blocked, real local number is normalised
  await pg.evaluate(() => localStorage.clear()); await pg.reload(); await new Promise(r => setTimeout(r, 400));
  const r = await pg.evaluate(() => { settings.whatsapp = '010 1234 5678'; products = deep(MAHAL_DEFAULTS.products); cart = [{ id: products[0].id, name: products[0].name, size: products[0].sizes[0], color: products[0].colors[0], price: 100, qty: 2 }]; renderCartBadge(); openCheckout(); return $('#waSend').href; });
  assert.ok(/^https:\/\/wa\.me\/201012345678\?text=/.test(r), r); console.log('ok local number -> wa.me/20…');
  assert.deepEqual(errs, []); console.log('ok no page errors'); await br.close();
})().catch(e => { console.error('FAIL', e.message); process.exit(1); });
