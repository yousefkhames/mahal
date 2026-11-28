/* Published catalog. DEMO sample content with fictional products and prices. Build yours in the owner builder (#/edit), use Export, replace this file and commit. */
window.CATALOG_DATA = {
  "v": 1,
  "demo": true,
  "shop": {
    "ar": "محل تجريبي",
    "en": "Demo Store"
  },
  "about": {
    "ar": "متجر ملابس تجريبي. الأسماء والأسعار وهمية.",
    "en": "Demo clothing store. Names and prices are fictional."
  },
  "currency": "ج.م",
  "whatsapp": "",
  "social": {
    "instagram": "",
    "facebook": "",
    "tiktok": "",
    "messenger": ""
  },
  "categories": [
    {
      "id": "c1",
      "name": {
        "ar": "تيشيرتات",
        "en": "T-shirts"
      }
    },
    {
      "id": "c2",
      "name": {
        "ar": "إكسسوارات",
        "en": "Accessories"
      }
    }
  ],
  "products": [
    {
      "id": "p1",
      "cat": "c1",
      "name": {
        "ar": "تيشيرت قطن",
        "en": "Cotton tee"
      },
      "desc": {
        "ar": "منتج تجريبي، السعر وهمي",
        "en": "Demo product, fictional price"
      },
      "price": 250,
      "demo": true,
      "sizes": [
        "S",
        "M",
        "L"
      ],
      "colors": [
        "أبيض",
        "أسود"
      ],
      "out": [
        "L|أسود"
      ],
      "isNew": true
    },
    {
      "id": "p2",
      "cat": "c1",
      "name": {
        "ar": "هودي",
        "en": "Hoodie"
      },
      "desc": {
        "ar": "منتج تجريبي، السعر وهمي",
        "en": "Demo product, fictional price"
      },
      "price": 600,
      "demo": true,
      "sizes": [
        "M",
        "L"
      ],
      "colors": [
        "رمادي"
      ]
    },
    {
      "id": "p3",
      "cat": "c2",
      "name": {
        "ar": "كاب",
        "en": "Cap"
      },
      "desc": {
        "ar": "منتج تجريبي، السعر وهمي",
        "en": "Demo product, fictional price"
      },
      "price": 150,
      "demo": true
    },
    {
      "id": "p4",
      "cat": "c2",
      "name": {
        "ar": "وشاح",
        "en": "Scarf"
      },
      "desc": {
        "ar": "منتج تجريبي، السعر وهمي",
        "en": "Demo product, fictional price"
      },
      "price": 180,
      "demo": true,
      "soldOut": true
    }
  ]
};
