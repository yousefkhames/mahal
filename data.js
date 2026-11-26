/* Mahal — default catalog + garment art. White-label: everything here can be replaced from the settings screen. */
"use strict";

const MAHAL_DEFAULTS = {
  settings: {
    name: { en: "Mahal", ar: "محل" },
    tagline: {
      en: "Everyday pieces, made to be lived in.",
      ar: "قطع لكل يوم، معمولة تعيش فيها."
    },
    kicker: { en: "New season · New drops", ar: "موسم جديد · تشكيلة جديدة" },
    note: {
      en: "Cash on delivery. Exchange within 14 days with the receipt.",
      ar: "الدفع عند الاستلام. استبدال خلال ١٤ يوم بالإيصال."
    },
    logo: { type: "letter", value: "M", image: "" },
    colors: { primary: "#23202b", accent: "#c2562f" },
    currency: "EGP",
    lang: "en",
    whatsapp: "201000000000",
    deliveryFee: 60
  },
  products: [
    { id: "tee-essential", type: "tee", cat: "tees", price: 350,
      sizes: ["S","M","L","XL","XXL"], colors: ["#23202b","#f0e9dc","#7a8b99"],
      name: { en: "Essential Tee", ar: "تيشيرت أساسي" },
      desc: { en: "Heavy cotton crew neck with a clean drape. Pre-shrunk, holds its shape.", ar: "تيشيرت قطن تقيل برقبة دائرية وقَصّة نضيفة. ثابت بعد الغسيل." } },
    { id: "hoodie-oversized", type: "hoodie", cat: "hoodies", price: 750,
      sizes: ["M","L","XL","XXL"], colors: ["#4a4e69","#23202b","#b08968"],
      name: { en: "Oversized Hoodie", ar: "هودي أوفرسايز" },
      desc: { en: "Brushed fleece inside, dropped shoulders, roomy hood.", ar: "قطن مبطن من جوه، أكتاف واسعة وقبعة كبيرة." } },
    { id: "shirt-linen", type: "shirt", cat: "shirts", price: 620,
      sizes: ["S","M","L","XL"], colors: ["#f0e9dc","#a3b18a","#e9c46a"],
      name: { en: "Linen Shirt", ar: "قميص كتان" },
      desc: { en: "Airy linen blend that breathes in the heat.", ar: "كتان خفيف بيهوّي في الحر." } },
    { id: "pants-wide", type: "pants", cat: "pants", price: 680,
      sizes: ["S","M","L","XL"], colors: ["#23202b","#8d6e63","#5c677d"],
      name: { en: "Wide-Leg Pants", ar: "بنطلون واسع" },
      desc: { en: "High rise, wide leg, elastic back waist.", ar: "وسط عالي ورجل واسعة ووسط مرن من وره." } },
    { id: "jacket-denim", type: "jacket", cat: "jackets", price: 950,
      sizes: ["M","L","XL"], colors: ["#4f6d8f","#2f3e56","#9aa5b1"],
      name: { en: "Denim Jacket", ar: "جاكيت جينز" },
      desc: { en: "Rigid denim that breaks in beautifully.", ar: "جينز تقيل بياخد شكلك مع الوقت." } },
    { id: "dress-midi", type: "dress", cat: "dresses", price: 890,
      sizes: ["XS","S","M","L"], colors: ["#a26769","#23202b","#7a8b99"],
      name: { en: "Midi Dress", ar: "فستان ميدي" },
      desc: { en: "Flowy midi cut with side pockets.", ar: "فستان ميدي واسع بجيوب جانبية." } },
    { id: "tee-graphic", type: "tee", cat: "tees", price: 420,
      sizes: ["S","M","L","XL"], colors: ["#f0e9dc","#23202b","#c2562f"],
      name: { en: "Graphic Tee", ar: "تيشيرت بطبعة" },
      desc: { en: "Soft-hand front print on our essential fit.", ar: "طبعة أمامية ناعمة على قصتنا الأساسية." } },
    { id: "sweat-crew", type: "sweatshirt", cat: "hoodies", price: 580,
      sizes: ["S","M","L","XL","XXL"], colors: ["#7a8b99","#b08968","#23202b"],
      name: { en: "Crewneck Sweatshirt", ar: "سويت شيرت برقبة دائرية" },
      desc: { en: "Loopback cotton, ribbed cuffs and hem.", ar: "قطن ثقيل بأساور وحواف مضلعة." } },
    { id: "pants-cargo", type: "pants", cat: "pants", price: 720,
      sizes: ["M","L","XL","XXL"], colors: ["#606c38","#23202b","#8d6e63"],
      name: { en: "Cargo Pants", ar: "بنطلون كارجو" },
      desc: { en: "Six pockets, straight fit, ripstop fabric.", ar: "٦ جيوب، قصة مستقيمة، قماش مقاوم." } },
    { id: "cardigan-knit", type: "cardigan", cat: "jackets", price: 840,
      sizes: ["S","M","L"], colors: ["#b08968","#a26769","#5c677d"],
      name: { en: "Knit Cardigan", ar: "كارديجان تريكو" },
      desc: { en: "Chunky knit with corozo buttons.", ar: "تريكو تقيل بأزرار طبيعية." } },
    { id: "cap-baseball", type: "cap", cat: "accessories", price: 220,
      sizes: ["OS"], colors: ["#23202b","#c2562f","#f0e9dc"],
      name: { en: "Baseball Cap", ar: "كاب" },
      desc: { en: "Six-panel cap with an adjustable strap.", ar: "كاب ٦ قطع بحزام قابل للتعديل." } },
    { id: "bag-tote", type: "tote", cat: "accessories", price: 180,
      sizes: ["OS"], colors: ["#f0e9dc","#23202b","#a3b18a"],
      name: { en: "Canvas Tote", ar: "شنطة قماش" },
      desc: { en: "Heavy canvas tote, fits a 15-inch laptop.", ar: "شنطة قماش تقيلة تاخد لابتوب ١٥ بوصة." } }
  ],
  categories: [
    { id: "all",        en: "All",         ar: "الكل" },
    { id: "tees",       en: "Tees",        ar: "تيشيرتات" },
    { id: "hoodies",    en: "Hoodies & Sweats", ar: "هوديز وسويتات" },
    { id: "shirts",     en: "Shirts",      ar: "قمصان" },
    { id: "pants",      en: "Pants",       ar: "بناطيل" },
    { id: "jackets",    en: "Jackets",     ar: "جاكيتات" },
    { id: "dresses",    en: "Dresses",     ar: "فساتين" },
    { id: "accessories",en: "Accessories", ar: "إكسسوارات" }
  ],
  garmentTypes: ["tee","hoodie","shirt","pants","jacket","dress","sweatshirt","cardigan","cap","tote"]
};

/* Flat garment illustrations. One viewBox, recolored at runtime. */
function mahalShade(hex, amt){
  const n = parseInt(hex.slice(1), 16);
  const f = v => Math.max(0, Math.min(255, Math.round(v + 255 * amt)));
  return "#" + [f(n>>16), f(n>>8 & 255), f(n & 255)].map(v => v.toString(16).padStart(2,"0")).join("");
}

function garmentSVG(type, color){
  const c = color || "#23202b", d = mahalShade(c, -0.14), l = mahalShade(c, 0.12);
  const P = {
    tee: `<path fill="${c}" d="M60 34 38 42 20 78l20 10 8-14v92c0 6 4 10 10 10h44c6 0 10-4 10-10V74l8 14 20-10-18-36-22-8c-2 8-10 12-20 12s-18-4-20-12Z"/>
      <path fill="${d}" d="M60 34c-2 8-10 12-20 12s-18-4-20-12l6-2c2 6 8 9 14 9s12-3 14-9l6 2Z"/>`,
    hoodie: `<path fill="${c}" d="M60 30c-16 0-26 10-27 26L22 64 10 98l22 8 8-16v76c0 6 4 10 10 10h60c6 0 10-4 10-10V90l8 16 22-8-12-34-11-8c-1-16-11-26-27-26Z"/>
      <path fill="${d}" d="M60 30c-13 0-22 8-22 20 0 10 8 16 22 16s22-6 22-16c0-12-9-20-22-20Zm0 8c9 0 14 5 14 12s-5 10-14 10-14-3-14-10 5-12 14-12Z"/>
      <path fill="${l}" d="M52 96h16v34H52z" opacity=".55"/><path stroke="${d}" stroke-width="3" d="M48 66v14M72 66v14" stroke-linecap="round"/>`,
    shirt: `<path fill="${c}" d="M56 30 34 40 18 74l20 10 8-13v93c0 6 4 10 10 10h48c6 0 10-4 10-10V71l8 13 20-10-16-34-22-10-8 10-8-14-8 14-8-10Z"/>
      <path fill="${d}" d="M56 30l-8 10 8 14 8-14-8-10Zm0 34a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 22a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 22a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 22a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 22a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/>`,
    pants: `<path fill="${c}" d="M42 26h56c4 0 8 3 8 8l8 128c1 7-3 12-10 12H84c-6 0-10-4-11-9L70 96l-3 69c-1 5-5 9-11 9H36c-7 0-11-5-10-12L34 34c0-5 4-8 8-8Z"/>
      <path fill="${d}" d="M42 26h56c4 0 8 3 8 8v6H34v-6c0-5 4-8 8-8Z"/><path stroke="${d}" stroke-width="3" d="M70 44v36" stroke-linecap="round"/>`,
    jacket: `<path fill="${c}" d="M58 30 34 38 16 76l22 10 8-14v92c0 6 4 10 10 10h48c6 0 10-4 10-10V72l8 14 22-10-18-38-24-8-9 12-9-16-9 16-9-12Z"/>
      <path fill="${d}" d="M58 30l-9 12 9 16 9-16-9-12Z"/><path stroke="${d}" stroke-width="3" d="M58 60v104"/>
      <path fill="${l}" d="M34 96h16v18H34zM66 96h16v18H66z" opacity=".6"/>`,
    dress: `<path fill="${c}" d="M56 26c-8 0-14 6-14 14l-8 30c-3 11-2 14 8 14h28c10 0 11-3 8-14l-8-30c0-8-6-14-14-14Z"/>
      <path fill="${c}" d="M42 84h28l22 82c1 6-3 10-9 10H29c-6 0-10-4-9-10l22-82Z"/>
      <path fill="${d}" d="M42 84h28l3 12H39l3-12Z"/><path fill="${l}" d="M50 40c0-4 3-8 6-8s6 4 6 8-3 6-6 6-6-2-6-6Z"/>`,
    sweatshirt: `<path fill="${c}" d="M58 34 36 42 20 80l22 10 6-13v89c0 6 4 10 10 10h48c6 0 10-4 10-10V77l6 13 22-10-16-38-22-8c-2 7-9 11-19 11s-17-4-19-11Z"/>
      <path fill="${d}" d="M58 34c-2 7-9 11-19 11s-17-4-19-11l6-2c2 5 7 8 13 8s11-3 13-8l6 2Z"/>
      <path fill="${d}" d="M46 162h52v14H46z" opacity=".8"/>`,
    cardigan: `<path fill="${c}" d="M56 32 32 40 16 78l22 10 8-14v90c0 6 4 10 10 10h44c6 0 10-4 10-10V74l8 14 22-10-16-38-24-8-12 22-8-22h-12l-8 22 12-22Z"/>
      <path stroke="${d}" stroke-width="3" d="M56 52v112"/><circle fill="${d}" cx="56" cy="72" r="3.4"/><circle fill="${d}" cx="56" cy="94" r="3.4"/><circle fill="${d}" cx="56" cy="116" r="3.4"/><circle fill="${d}" cx="56" cy="138" r="3.4"/>`,
    cap: `<path fill="${c}" d="M20 110c0-34 22-58 50-58s50 24 50 58H20Z"/>
      <path fill="${d}" d="M70 52c-4 0-8 .6-12 1.7V110h24V53.7C78 52.6 74 52 70 52Z" opacity=".7"/>
      <path fill="${c}" d="M12 110h116c8 0 12 4 12 9s-4 9-12 9H24c-9 0-14-4-14-9s1-9 2-9Z"/>
      <circle fill="${d}" cx="70" cy="48" r="6"/>`,
    tote: `<path fill="${c}" d="M30 74h100l-8 96c-1 6-5 10-11 10H49c-6 0-10-4-11-10L30 74Z"/>
      <path fill="${d}" d="M30 74h100l-2 18H32l-2-18Z"/>
      <path fill="none" stroke="${c}" stroke-width="8" d="M52 74V58c0-16 8-26 28-26s28 10 28 26v16" stroke-linecap="round"/>
      <circle fill="${l}" cx="80" cy="130" r="12"/>`,
  };
  const body = P[type] || P.tee;
  return `<svg viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;
}
