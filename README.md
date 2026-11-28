# mahal · محل

A free white-label clothing storefront driven by one catalog file: product grid, product pages with sizes and colours, a bag and WhatsApp order drafts. Three layout presets (grid, list, large) are set in `config.js`. Arabic RTL and English LTR. Static HTML, CSS and JavaScript; no build, account, API or payment processor.

<div lang="ar" dir="rtl">متجر ملابس مجاني: عدّل ملف الكتالوج، انشره، وابدأ استقبال الطلبات عبر واتساب. لا يوجد دفع داخل الأداة.</div>

<img src="assets/yk-logo.svg" width="24" height="24" alt=""> **By Yousef Khames · من تطوير يوسف خميس**

## Preview locally

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://localhost:8080/`. Use a fresh browser profile. The sample shop is **demo content**: fictional products and prices, a Demo banner, a Demo tag on every product and labelled placeholder images. No WhatsApp number is set, so the order screen offers **Copy order** only. Screenshots in `docs/` use this demo data.

## Set up a shop

1. Edit `config.js` to choose a layout: `grid`, `list` or `big`.
2. Open **Owner** (`#/edit`), set the shop name, currency and public WhatsApp number, press **Clear demo products** and add yours (sizes and colours as comma lists, out-of-stock combinations as checkboxes).
3. Press **Export catalog-data.js**, replace the file in the repository, commit and publish. That one file is the whole shop; the owner page only edits a local draft.
4. Want categories, filters, saved items and a size guide? Use the **lebs** kit, which is the fuller clothing catalog.

Static theming: edit `assets/kit-theme.js` (`name`, `logo`, `accent`, `mode`, `light`, `dark`). Keep `assets/yk-logo.svg` and `assets/favicon.svg` for the developer credit. The shared storefront engine (`shop-core.js`, `shop-ui.js`) is the same across the talab, mahal and lebs kits.

## Deploy (GitHub Pages)

Create the repository `yousefkhames/mahal`, commit these files to `main`, then Settings → Pages → Deploy from a branch → `main` / root. Live at `https://yousefkhames.github.io/mahal/`. All paths are relative.

## Tests

```sh
npm run test:unit  # Node 22+, no install
npm run test:e2e   # headless Chrome as google-chrome
npm test
```

## Honest limits and privacy

- Opening a WhatsApp draft is not sending. The customer presses send, and the order is not confirmed until the shop replies. The app records no orders.
- Totals use the shop prices in the catalog. There is no shipping, tax, discount code or payment; the shop confirms the final price.
- Stock is a manual flag you edit in the catalog; it does not update by itself.
- Photos are resized in the browser and embedded in the exported file; relative paths such as `img/shirt.jpg` also work.
- Static and device-local: the owner draft does not sync between devices. Clearing site data erases it, so export first.
- No customer data is collected or stored; the optional name and note go only into the WhatsApp message the customer sends.
- Contrast of the default theme pairs is checked; no blanket WCAG claim.

## License

MIT, copyright Yousef Khames. See `LICENSE`. Cairo font: SIL OFL. `assets/qrcode.js`: qrcode-generator by Kazuhiko Arase (MIT, `assets/qrcode.LICENSE.txt`).
