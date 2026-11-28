/* MIT · Copyright (c) 2026 Yousef Khames · mahal entry point: shared storefront engine with this kit's features. */
(function () {
  'use strict';
  Shop.run({ id: 'mahal', titleAr: 'محل', features: { variants: true, share: true, layout: (window.MAHAL_CONFIG && window.MAHAL_CONFIG.layout) || 'grid' } });
})();
