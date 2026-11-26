/* Mahal — white-label clothing storefront. Static, localStorage, no server. */
"use strict";

const I18N = {
  en: {
    skip: "Skip to content", cart: "Cart", shopNow: "Shop the drop", makeYours: "Make it yours",
    searchPh: "Search products…", noResults: "Nothing matches. Try another word or category.",
    color: "Color", size: "Size", sizeGuide: "Size guide", addToCart: "Add to cart",
    sizeNote: "Measurements in cm, garment laid flat. Between sizes? Size up.",
    yourCart: "Your cart", cartEmpty: "Your cart is empty. Nice pieces are waiting.",
    subtotal: "Subtotal", delivery: "Delivery", total: "Total", checkout: "Checkout on WhatsApp",
    clearCart: "Clear cart", yourOrder: "Your order", name: "Full name", phone: "Phone",
    address: "Delivery address", notes: "Notes", notesPh: "Anything we should know?",
    sendWa: "Send order on WhatsApp", copyOrder: "Copy order text",
    waHint: "This opens WhatsApp with your order written out. Nothing is sent until you press send there.",
    orderReady: "Order ready", orderNo: "Order", backToShop: "Back to shop",
    orderReadySub: "Your cart is cleared. The shop confirms your order on WhatsApp.",
    settings: "Store settings", settingsSub: "This store is white-label: change everything below and export it as your own brand file.",
    secBrand: "Brand", storeNameEn: "Store name (English)", storeNameAr: "Store name (Arabic)",
    taglineEn: "Tagline (English)", taglineAr: "Tagline (Arabic)",
    logoType: "Logo style", logoLetter: "Letter", logoEmoji: "Emoji", logoImage: "Uploaded image",
    logoValue: "Logo letter or emoji", logoUpload: "Logo image",
    secLook: "Look & language", colorPrimary: "Ink color", colorAccent: "Accent color",
    currency: "Currency", defaultLang: "Default language",
    secCheckout: "Checkout & footer", waNumber: "WhatsApp number (international format, digits only)",
    deliveryFeeLabel: "Delivery fee", footNoteEn: "Footer note (English)", footNoteAr: "Footer note (Arabic)",
    secProducts: "Products", productsHint: "Tap a product to edit it. Changes apply to this device; export your brand file to keep them.",
    addProduct: "+ Add product",
    secData: "Brand file", dataHint: "Export saves your branding and catalog as one JSON file. Import applies a brand file on this device.",
    exportBrand: "Export brand file", importBrand: "Import brand file", resetAll: "Reset everything to the demo store",
    save: "Save settings", saved: "Saved", addedToCart: "Added to cart",
    pNameEn: "Name (English)", pNameAr: "Name (Arabic)", pPrice: "Price", pCat: "Category",
    pType: "Artwork shape", pSizes: "Sizes (comma separated)", pColors: "Colors (hex, comma separated)",
    pDescEn: "Description (English)", pDescAr: "Description (Arabic)",
    saveProduct: "Save product", deleteProduct: "Delete product",
    editProduct: "Edit product", newProduct: "New product",
    needName: "Please add your name.", needPhone: "Please add a phone number.",
    imported: "Brand file applied.", badFile: "That file is not a valid Mahal brand file.",
    confirmReset: "Reset the store to the demo branding and catalog?",
    confirmDelete: "Delete this product?",
    copied: "Order copied to clipboard.",
    newOrder: "New order", orderFrom: "From", items: "Items", qty: "Qty",
    chest: "Chest", length: "Length", footTag: "white-label storefront, free and open source",
    free: "Free", outOfRange: "Pick a color and size first."
  },
  ar: {
    skip: "تخطَّ إلى المحتوى", cart: "السلة", shopNow: "تسوّق التشكيلة", makeYours: "اعملها ببراندك",
    searchPh: "دوّر على منتج…", noResults: "مفيش نتايج. جرّب كلمة أو قسم تاني.",
    color: "اللون", size: "المقاس", sizeGuide: "دليل المقاسات", addToCart: "ضيف للسلة",
    sizeNote: "المقاسات بالسنتيمتر والقطعة مفرودة. لو بين مقاسين، اختار الأكبر.",
    yourCart: "سلتك", cartEmpty: "سلتك فاضية. في قطع حلوة مستنياك.",
    subtotal: "المجموع", delivery: "الشحن", total: "الإجمالي", checkout: "أكّد الطلب على واتساب",
    clearCart: "فضّي السلة", yourOrder: "طلبك", name: "الاسم بالكامل", phone: "رقم الموبايل",
    address: "عنوان التوصيل", notes: "ملاحظات", notesPh: "حاجة لازم نعرفها؟",
    sendWa: "ابعت الطلب على واتساب", copyOrder: "انسخ نص الطلب",
    waHint: "ده بيفتح واتساب بطلبك مكتوب جاهز. مفيش حاجة بتتبعت غير لما تدوس إرسال هناك.",
    orderReady: "الطلب جاهز", orderNo: "طلب رقم", backToShop: "ارجع للمتجر",
    orderReadySub: "السلة اتفضت. المحل بيأكد طلبك على واتساب.",
    settings: "إعدادات المتجر", settingsSub: "المتجر ده أبيض اللافتة: غيّر كل حاجة تحت واعملها تصدير كملف براند خاص بيك.",
    secBrand: "البراند", storeNameEn: "اسم المتجر (إنجليزي)", storeNameAr: "اسم المتجر (عربي)",
    taglineEn: "الجملة التعريفية (إنجليزي)", taglineAr: "الجملة التعريفية (عربي)",
    logoType: "شكل اللوجو", logoLetter: "حرف", logoEmoji: "إيموجي", logoImage: "صورة مرفوعة",
    logoValue: "حرف أو إيموجي اللوجو", logoUpload: "صورة اللوجو",
    secLook: "الشكل واللغة", colorPrimary: "لون الحبر", colorAccent: "اللون المميز",
    currency: "العملة", defaultLang: "اللغة الافتراضية",
    secCheckout: "الطلب والفوتر", waNumber: "رقم واتساب (بصيغة دولية، أرقام بس)",
    deliveryFeeLabel: "مصاريف الشحن", footNoteEn: "ملاحظة الفوتر (إنجليزي)", footNoteAr: "ملاحظة الفوتر (عربي)",
    secProducts: "المنتجات", productsHint: "دوس على منتج عشان تعدّله. التعديلات على الجهاز ده؛ اعمل تصدير لملف البراند عشان تحتفظ بيها.",
    addProduct: "+ ضيف منتج",
    secData: "ملف البراند", dataHint: "التصدير بيحفظ البراند والمنتجات في ملف JSON واحد. الاستيراد بيطبّق ملف براند على الجهاز ده.",
    exportBrand: "صدّر ملف البراند", importBrand: "استورد ملف براند", resetAll: "ارجع لمتجر الديمو",
    save: "احفظ الإعدادات", saved: "اتحفظ", addedToCart: "اتضاف للسلة",
    pNameEn: "الاسم (إنجليزي)", pNameAr: "الاسم (عربي)", pPrice: "السعر", pCat: "القسم",
    pType: "شكل الرسمة", pSizes: "المقاسات (بفواصل)", pColors: "الألوان (هيكس، بفواصل)",
    pDescEn: "الوصف (إنجليزي)", pDescAr: "الوصف (عربي)",
    saveProduct: "احفظ المنتج", deleteProduct: "امسح المنتج",
    editProduct: "عدّل المنتج", newProduct: "منتج جديد",
    needName: "اكتب اسمك من فضلك.", needPhone: "اكتب رقم موبايلك من فضلك.",
    imported: "ملف البراند اتطبّق.", badFile: "الملف ده مش ملف براند صالح لمحل.",
    confirmReset: "ترجع المتجر لبراند ومنتجات الديمو؟",
    confirmDelete: "تمسح المنتج ده؟",
    copied: "اتنسخ.",
    newOrder: "طلب جديد", orderFrom: "من", items: "القطع", qty: "العدد",
    chest: "الصدر", length: "الطول", footTag: "متجر أبيض اللافتة، مجاني ومفتوح المصدر",
    free: "مجاني", outOfRange: "اختار اللون والمقاس الأول."
  }
};

const SIZE_ROWS = [
  ["XS", 46, 62], ["S", 50, 66], ["M", 54, 70], ["L", 58, 73], ["XL", 62, 76], ["XXL", 66, 79]
];

const LS = { settings: "mahal.settings", products: "mahal.products", cart: "mahal.cart", theme: "mahal.theme", lang: "mahal.lang" };

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const load = (k, fb) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? fb; } catch { return fb; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const deep = o => JSON.parse(JSON.stringify(o));

let settings = Object.assign(deep(MAHAL_DEFAULTS.settings), load(LS.settings, {}));
let products = load(LS.products, null) || deep(MAHAL_DEFAULTS.products);
let cart = load(LS.cart, []);
let lang = localStorage.getItem(LS.lang) || settings.lang || "en";
let theme = localStorage.getItem(LS.theme) || "light";
let activeCat = "all", query = "", cur = null, selColor = null, selSize = null, qty = 1, editingId = null;

const t = k => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;
const L = o => (o && (o[lang] || o.en)) || "";
const catsOf = () => MAHAL_DEFAULTS.categories.filter(c => c.id === "all" || products.some(p => p.cat === c.id));

function money(n){
  try {
    return new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "en", { style: "currency", currency: settings.currency, maximumFractionDigits: n % 1 ? 2 : 0 }).format(n);
  } catch { return n + " " + settings.currency; }
}

/* ---------- i18n + theme + branding ---------- */
function applyI18n(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i]").forEach(el => el.textContent = t(el.dataset.i));
  $$("[data-i-ph]").forEach(el => el.placeholder = t(el.dataset.iPh));
  $("#lang").textContent = lang === "ar" ? "EN" : "عربي";
}
function applyTheme(){ document.documentElement.dataset.theme = theme; }
function applyBrand(){
  const s = settings;
  document.documentElement.style.setProperty("--ink", s.colors.primary);
  document.documentElement.style.setProperty("--accent", s.colors.accent);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = s.colors.accent;
  $("#brandName").textContent = L(s.name);
  const lg = $("#brandLogo");
  if (s.logo.type === "image" && s.logo.image) lg.innerHTML = `<img alt="" src="${s.logo.image}">`;
  else if (s.logo.type === "emoji") lg.innerHTML = `<span class="logo-emoji">${s.logo.value || "🛍️"}</span>`;
  else lg.innerHTML = `<span class="logo-letter">${(s.logo.value || L(s.name) || "M").trim().charAt(0)}</span>`;
  $("#heroKicker").textContent = L(s.kicker);
  $("#heroTitle").textContent = L(s.tagline);
  $("#heroSub").textContent = heroSubText();
  $("#footNote").textContent = L(s.note);
  $("#footBrand").textContent = L(s.name);
  document.title = L(s.name) + " · " + (lang === "ar" ? "متجر ملابس" : "clothing store");
}
function heroSubText(){
  return lang === "ar"
    ? "تشكيلة مختارة بعناية، مقاسات من XS لـ XXL، والطلب بيتم على واتساب في دقيقة."
    : "A tight catalog, sizes XS to XXL, and checkout over WhatsApp in a minute.";
}

/* ---------- catalog ---------- */
function visibleProducts(){
  const q = query.trim().toLowerCase();
  return products.filter(p =>
    (activeCat === "all" || p.cat === activeCat) &&
    (!q || L(p.name).toLowerCase().includes(q) || (p.name.en + " " + p.name.ar).toLowerCase().includes(q))
  );
}
function renderCats(){
  $("#cats").innerHTML = catsOf().map(c =>
    `<button class="chip" data-cat="${c.id}" aria-pressed="${c.id === activeCat}">${L(c)}</button>`).join("");
}
function renderGrid(){
  const list = visibleProducts();
  $("#grid").innerHTML = list.map(p => `
    <button class="card" data-id="${p.id}">
      <span class="card-art" style="background:${mahalShade(p.colors[0], 0.42)}">
        <span class="card-cat">${L(MAHAL_DEFAULTS.categories.find(c => c.id === p.cat) || { en: p.cat, ar: p.cat })}</span>
        ${garmentSVG(p.type, p.colors[0])}
      </span>
      <span class="card-body">
        <span class="card-name">${L(p.name)}</span>
        <span class="card-price">${money(p.price)}</span>
        <span class="card-sizes">${p.sizes.join(" · ")}</span>
      </span>
    </button>`).join("");
  $("#empty").hidden = list.length > 0;
}

/* ---------- product modal ---------- */
function openProduct(id){
  cur = products.find(p => p.id === id);
  if (!cur) return;
  selColor = cur.colors[0]; selSize = null; qty = 1;
  drawPdp();
  show("pdp");
}
function drawPdp(){
  $("#pdpArt").style.background = mahalShade(selColor, 0.42);
  $("#pdpArt").innerHTML = garmentSVG(cur.type, selColor);
  $("#pdpCat").textContent = L(MAHAL_DEFAULTS.categories.find(c => c.id === cur.cat) || { en: cur.cat, ar: cur.cat });
  $("#pdpName").textContent = L(cur.name);
  $("#pdpDesc").textContent = L(cur.desc);
  $("#pdpPrice").textContent = money(cur.price);
  $("#pdpColors").innerHTML = cur.colors.map(c =>
    `<button class="swatch" style="background:${c}" data-c="${c}" aria-pressed="${c === selColor}" aria-label="${c}"></button>`).join("");
  $("#pdpSizes").innerHTML = cur.sizes.map(s =>
    `<button class="size-pill" data-s="${s}" aria-pressed="${s === selSize}">${s}</button>`).join("");
  $("#qtyVal").textContent = qty;
  $("#addToCart").textContent = t("addToCart") + " · " + money(cur.price * qty);
}
function drawSizeTable(){
  $("#sizeTable").innerHTML =
    `<tr><th>${t("size")}</th><th>${t("chest")}</th><th>${t("length")}</th></tr>` +
    SIZE_ROWS.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("");
}

/* ---------- cart ---------- */
const cartCount = () => cart.reduce((a, i) => a + i.qty, 0);
const cartSub = () => cart.reduce((a, i) => a + i.qty * i.price, 0);
function renderCartBadge(){
  const n = cartCount();
  $("#cartCount").hidden = n === 0;
  $("#cartCount").textContent = n;
}
function addToCart(){
  if (!cur) return;
  if (!selSize) { toast(t("outOfRange")); return; }
  const key = cur.id + "|" + selSize + "|" + selColor;
  const hit = cart.find(i => i.key === key);
  if (hit) hit.qty += qty;
  else cart.push({ key, id: cur.id, name: deep(cur.name), size: selSize, color: selColor, type: cur.type, price: cur.price, qty });
  save(LS.cart, cart);
  renderCartBadge(); renderCart();
  hide("pdp"); toast(t("addedToCart"));
}
function renderCart(){
  $("#cartEmpty").hidden = cart.length > 0;
  $("#cartFoot").hidden = cart.length === 0;
  $("#cartItems").innerHTML = cart.map((i, ix) => `
    <div class="cart-row">
      <span class="cart-thumb" style="background:${mahalShade(i.color, 0.42)}">${garmentSVG(i.type, i.color)}</span>
      <span class="cart-info">
        <span class="n">${L(i.name)}</span>
        <span class="v">${i.size} · <span style="display:inline-block;width:.8em;height:.8em;border-radius:50%;background:${i.color};vertical-align:-1px"></span></span>
        <span class="cart-qty">
          <button data-cart="-${ix}" aria-label="Less">−</button><span>${i.qty}</span><button data-cart="+${ix}" aria-label="More">+</button>
        </span>
      </span>
      <span class="cart-price">${money(i.price * i.qty)}</span>
      <button class="cart-rm" data-rm="${ix}" aria-label="Remove">✕</button>
    </div>`).join("");
  const fee = cart.length ? (+settings.deliveryFee || 0) : 0;
  $("#subTotal").textContent = money(cartSub());
  $("#deliveryFee").textContent = fee === 0 ? t("free") : money(fee);
  $("#grandTotal").textContent = money(cartSub() + fee);
}

/* ---------- checkout ---------- */
function orderText(no){
  const s = settings, lines = [];
  lines.push(`🛍 ${t("newOrder")} — ${L(s.name)} ${no}`);
  lines.push("―――――――――――");
  cart.forEach(i => lines.push(`• ${L(i.name)} | ${i.size} | ${i.color} × ${i.qty} = ${money(i.price * i.qty)}`));
  lines.push("―――――――――――");
  lines.push(`${t("subtotal")}: ${money(cartSub())}`);
  lines.push(`${t("delivery")}: ${money(+s.deliveryFee || 0)}`);
  lines.push(`${t("total")}: ${money(cartSub() + (+s.deliveryFee || 0))}`);
  lines.push("");
  lines.push(`${t("orderFrom")}: ${$("#coName").value.trim()}`);
  lines.push(`${t("phone")}: ${$("#coPhone").value.trim()}`);
  if ($("#coAddress").value.trim()) lines.push(`${t("address")}: ${$("#coAddress").value.trim()}`);
  if ($("#coNotes").value.trim()) lines.push(`${t("notes")}: ${$("#coNotes").value.trim()}`);
  return lines.join("\n");
}
function openCheckout(){
  if (!cart.length) return;
  hide("cartDrawer"); show("checkout");
  $("#coForm").hidden = false; $("#coDone").hidden = true; $("#coErr").hidden = true;
  const fee = +settings.deliveryFee || 0;
  $("#coSummary").innerHTML =
    cart.map(i => `<div class="row"><span>${L(i.name)} · ${i.size} × ${i.qty}</span><span>${money(i.price * i.qty)}</span></div>`).join("") +
    `<div class="row"><span>${t("delivery")}</span><span>${money(fee)}</span></div>` +
    `<div class="row tot"><span>${t("total")}</span><span>${money(cartSub() + fee)}</span></div>`;
  syncWa();
}
function syncWa(){
  const no = "M-" + Date.now().toString(36).toUpperCase();
  const num = (settings.whatsapp || "").replace(/\D/g, "");
  $("#waSend").href = `https://wa.me/${num}?text=${encodeURIComponent(orderText(no))}`;
  $("#waSend").dataset.no = no;
}
function sendOrder(){
  if (!$("#coName").value.trim()) { $("#coErr").textContent = t("needName"); $("#coErr").hidden = false; return false; }
  if (!$("#coPhone").value.trim()) { $("#coErr").textContent = t("needPhone"); $("#coErr").hidden = false; return false; }
  $("#orderNo").textContent = $("#waSend").dataset.no;
  $("#coForm").hidden = true; $("#coDone").hidden = false;
  cart = []; save(LS.cart, cart); renderCartBadge(); renderCart();
  return true;
}

/* ---------- settings ---------- */
function fillSettings(){
  const s = settings;
  $("#sNameEn").value = s.name.en; $("#sNameAr").value = s.name.ar;
  $("#sTagEn").value = s.tagline.en; $("#sTagAr").value = s.tagline.ar;
  $("#sLogoType").value = s.logo.type; $("#sLogoText").value = s.logo.value || "";
  $("#sLogoTextWrap").hidden = s.logo.type === "image";
  $("#sLogoImgWrap").hidden = s.logo.type !== "image";
  $("#sColorA").value = s.colors.primary; $("#sColorB").value = s.colors.accent;
  $("#sCurrency").value = s.currency; $("#sLang").value = s.lang;
  $("#sWa").value = s.whatsapp; $("#sFee").value = s.deliveryFee;
  $("#sNoteEn").value = s.note.en; $("#sNoteAr").value = s.note.ar;
  renderProdList();
}
function renderProdList(){
  $("#prodList").innerHTML = products.map(p => `
    <div class="prod-row" data-pe="${p.id}" role="button" tabindex="0">
      <span class="thumb" style="background:${mahalShade(p.colors[0], 0.42)}">${garmentSVG(p.type, p.colors[0])}</span>
      <span class="pn">${L(p.name)}</span><span class="pp">${money(p.price)}</span>
    </div>`).join("");
}
function openProdEdit(id){
  editingId = id;
  const p = products.find(x => x.id === id);
  $("#peTitle").textContent = p ? t("editProduct") : t("newProduct");
  $("#peNameEn").value = p ? p.name.en : ""; $("#peNameAr").value = p ? p.name.ar : "";
  $("#pePrice").value = p ? p.price : 0;
  $("#peCat").innerHTML = MAHAL_DEFAULTS.categories.filter(c => c.id !== "all")
    .map(c => `<option value="${c.id}" ${p && p.cat === c.id ? "selected" : ""}>${L(c)}</option>`).join("");
  $("#peType").innerHTML = MAHAL_DEFAULTS.garmentTypes
    .map(g => `<option value="${g}" ${p && p.type === g ? "selected" : ""}>${g}</option>`).join("");
  $("#peSizes").value = p ? p.sizes.join(",") : "S,M,L,XL";
  $("#peColors").value = p ? p.colors.join(",") : "#23202b,#c2562f";
  $("#peDescEn").value = p ? p.desc.en : ""; $("#peDescAr").value = p ? p.desc.ar : "";
  $("#peDelete").hidden = !p;
  show("prodEdit");
}
function saveProdEdit(){
  const cleanSizes = $("#peSizes").value.split(",").map(x => x.trim().toUpperCase()).filter(Boolean);
  const cleanColors = $("#peColors").value.split(",").map(x => x.trim()).filter(x => /^#[0-9a-fA-F]{3,8}$/.test(x));
  if (!cleanSizes.length || !cleanColors.length) return;
  const data = {
    name: { en: $("#peNameEn").value.trim() || "Product", ar: $("#peNameAr").value.trim() || "منتج" },
    price: Math.max(0, +$("#pePrice").value || 0),
    cat: $("#peCat").value, type: $("#peType").value,
    sizes: cleanSizes, colors: cleanColors,
    desc: { en: $("#peDescEn").value.trim(), ar: $("#peDescAr").value.trim() }
  };
  if (editingId) Object.assign(products.find(x => x.id === editingId), data);
  else products.push(Object.assign({ id: "p-" + Date.now().toString(36) }, data));
  save(LS.products, products);
  hide("prodEdit"); renderProdList(); renderCats(); renderGrid(); toast(t("saved"));
}
function exportBrand(){
  const blob = new Blob([JSON.stringify({ app: "mahal", version: 1, settings, products }, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = (settings.name.en || "mahal").toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-brand.json";
  a.click(); URL.revokeObjectURL(a.href);
}
function importBrand(file){
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result);
      if (d.app !== "mahal" || !d.settings || !Array.isArray(d.products)) throw 0;
      settings = Object.assign(deep(MAHAL_DEFAULTS.settings), d.settings);
      products = d.products.filter(p => p && p.id && p.name && p.name.en);
      save(LS.settings, settings); save(LS.products, products);
      lang = settings.lang; localStorage.setItem(LS.lang, lang);
      boot(); fillSettings(); toast(t("imported"));
    } catch { $("#importErr").textContent = t("badFile"); $("#importErr").hidden = false; }
  };
  r.readAsText(file);
}

/* ---------- ui plumbing ---------- */
function show(id){ $("#" + id).hidden = false; }
function hide(id){ $("#" + id).hidden = true; }
let toastTimer;
function toast(msg){
  const el = $("#toast"); el.textContent = msg; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.hidden = true, 2200);
}

function boot(){
  applyI18n(); applyTheme(); applyBrand();
  renderCats(); renderGrid(); renderCartBadge(); renderCart(); drawSizeTable();
}

/* ---------- events ---------- */
document.addEventListener("click", e => {
  const c = e.target.closest("[data-close]");
  if (c) hide(c.dataset.close);
});
$("#lang").onclick = () => { lang = lang === "ar" ? "en" : "ar"; localStorage.setItem(LS.lang, lang); boot(); fillSettings(); };
$("#theme").onclick = () => { theme = theme === "dark" ? "light" : "dark"; localStorage.setItem(LS.theme, theme); applyTheme(); };
$("#brandHome").onclick = e => { e.preventDefault(); $("#home").scrollIntoView(); };
$("#heroShop").onclick = () => $("#grid").scrollIntoView({ behavior: "smooth" });
$("#heroBrand").onclick = () => { fillSettings(); show("settings"); };
$("#settingsBtn").onclick = () => { fillSettings(); show("settings"); };
$("#cartBtn").onclick = () => { renderCart(); show("cartDrawer"); };
$("#search").oninput = e => { query = e.target.value; renderGrid(); };
$("#cats").onclick = e => {
  const b = e.target.closest("[data-cat]"); if (!b) return;
  activeCat = b.dataset.cat; renderCats(); renderGrid();
};
$("#grid").onclick = e => { const c = e.target.closest(".card"); if (c) openProduct(c.dataset.id); };
$("#pdpColors").onclick = e => { const b = e.target.closest("[data-c]"); if (b) { selColor = b.dataset.c; drawPdp(); } };
$("#pdpSizes").onclick = e => { const b = e.target.closest("[data-s]"); if (b) { selSize = b.dataset.s; drawPdp(); } };
$("#qtyMinus").onclick = () => { qty = Math.max(1, qty - 1); drawPdp(); };
$("#qtyPlus").onclick = () => { qty = Math.min(20, qty + 1); drawPdp(); };
$("#sizeGuide").onclick = () => show("guide");
$("#addToCart").onclick = addToCart;
$("#cartItems").onclick = e => {
  const q = e.target.closest("[data-cart]"), rm = e.target.closest("[data-rm]");
  if (q) {
    const ix = +q.dataset.cart.slice(1);
    cart[ix].qty = Math.max(1, cart[ix].qty + (q.dataset.cart[0] === "+" ? 1 : -1));
  } else if (rm) cart.splice(+rm.dataset.rm, 1);
  else return;
  save(LS.cart, cart); renderCartBadge(); renderCart();
};
$("#clearCart").onclick = () => { cart = []; save(LS.cart, cart); renderCartBadge(); renderCart(); };
$("#checkoutBtn").onclick = openCheckout;
["coName","coPhone","coAddress","coNotes"].forEach(id => $("#" + id).oninput = syncWa);
$("#waSend").onclick = e => { if (!sendOrder()) e.preventDefault(); };
$("#copyOrder").onclick = async () => {
  syncWa();
  try { await navigator.clipboard.writeText(orderText($("#waSend").dataset.no)); toast(t("copied")); }
  catch { toast(t("copied")); }
};
$("#saveSettings").onclick = () => {
  const s = settings;
  s.name = { en: $("#sNameEn").value.trim() || "Store", ar: $("#sNameAr").value.trim() || "متجر" };
  s.tagline = { en: $("#sTagEn").value, ar: $("#sTagAr").value };
  s.logo.type = $("#sLogoType").value; s.logo.value = $("#sLogoText").value;
  s.colors = { primary: $("#sColorA").value, accent: $("#sColorB").value };
  s.currency = $("#sCurrency").value;
  s.lang = $("#sLang").value;
  s.whatsapp = $("#sWa").value.trim(); s.deliveryFee = Math.max(0, +$("#sFee").value || 0);
  s.note = { en: $("#sNoteEn").value, ar: $("#sNoteAr").value };
  save(LS.settings, s);
  boot(); fillSettings(); toast(t("saved"));
};
$("#sLogoType").onchange = e => {
  $("#sLogoTextWrap").hidden = e.target.value === "image";
  $("#sLogoImgWrap").hidden = e.target.value !== "image";
};
$("#sLogoImg").onchange = e => {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => { settings.logo.image = r.result; settings.logo.type = "image"; save(LS.settings, settings); applyBrand(); };
  r.readAsDataURL(f);
};
$("#prodList").onclick = e => { const r = e.target.closest("[data-pe]"); if (r) openProdEdit(r.dataset.pe); };
$("#prodAdd").onclick = () => openProdEdit(null);
$("#peSave").onclick = saveProdEdit;
$("#peDelete").onclick = () => {
  if (editingId && confirm(t("confirmDelete"))) {
    products = products.filter(p => p.id !== editingId);
    save(LS.products, products); hide("prodEdit"); renderProdList(); renderCats(); renderGrid();
  }
};
$("#exportBtn").onclick = exportBrand;
$("#importInput").onchange = e => { $("#importErr").hidden = true; if (e.target.files[0]) importBrand(e.target.files[0]); e.target.value = ""; };
$("#resetBtn").onclick = () => {
  if (!confirm(t("confirmReset"))) return;
  localStorage.removeItem(LS.settings); localStorage.removeItem(LS.products);
  settings = deep(MAHAL_DEFAULTS.settings); products = deep(MAHAL_DEFAULTS.products);
  boot(); fillSettings();
};
document.addEventListener("keydown", e => {
  if (e.key === "Escape") $$(".sheet").forEach(s => s.hidden = true);
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http"))
  navigator.serviceWorker.register("sw.js").catch(() => {});

boot();
