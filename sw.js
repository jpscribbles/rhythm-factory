self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/',
       'index.html',
       'index.js',
       'style.css',
      
      "tablefilter/tablefilter.js",
"tablefilter/style/tablefilter.css",
"tablefilter/style/filtersVisibility.css",
"tablefilter/style/themes/blank.png",
"tablefilter/style/themes/btn_filter.png",
"tablefilter/style/themes/default/downsimple.png",
"tablefilter/style/themes/default/images/btn_eraser.gif",
"tablefilter/style/themes/default/images/btn_over_last_page.gif",
"tablefilter/style/themes/default/images/btn_over_previous_page.gif",
"tablefilter/style/themes/default/images/bg_infDiv.jpg",
"tablefilter/style/themes/default/images/btn_over_first_page.gif",
"tablefilter/style/themes/default/images/btn_first_page.gif",
"tablefilter/style/themes/default/images/btn_over_next_page.gif",
"tablefilter/style/themes/default/images/btn_over_eraser.gif",
"tablefilter/style/themes/default/images/btn_last_page.gif",
"tablefilter/style/themes/default/images/btn_next_page.gif",
"tablefilter/style/themes/default/images/btn_previous_page.gif",
"tablefilter/style/themes/default/images/img_loading.gif",
"tablefilter/style/themes/default/images/bg_th.jpg",
"tablefilter/style/themes/default/default.css",
"tablefilter/style/themes/default/upsimple.png",
"tablefilter/style/themes/icn_filterActive.gif",
"tablefilter/style/themes/skyblue/images/icn_clear_filters.png",
"tablefilter/style/themes/skyblue/images/btn_prev_page.gif",
"tablefilter/style/themes/skyblue/images/btn_first_page.gif",
"tablefilter/style/themes/skyblue/images/btn_last_page.gif",
"tablefilter/style/themes/skyblue/images/btn_next_page.gif",
"tablefilter/style/themes/skyblue/images/bg_skyblue.gif",
"tablefilter/style/themes/skyblue/images/img_loading.gif",
"tablefilter/style/themes/skyblue/skyblue.css",
"tablefilter/style/themes/mytheme/mytheme.css",
"tablefilter/style/themes/mytheme/images/bg_headers.jpg",
"tablefilter/style/themes/mytheme/images/bg_infDiv.jpg",
"tablefilter/style/themes/mytheme/images/btn_filter.png",
"tablefilter/style/themes/mytheme/images/btn_first_page.gif",
"tablefilter/style/themes/mytheme/images/btn_last_page.gif",
"tablefilter/style/themes/mytheme/images/btn_next_page.gif",
"tablefilter/style/themes/mytheme/images/btn_previous_page.gif",
"tablefilter/style/themes/mytheme/images/img_loading.gif",
"tablefilter/style/themes/transparent/images/icn_clear_filters.png",
"tablefilter/style/themes/transparent/images/btn_prev_page.gif",
"tablefilter/style/themes/transparent/images/btn_first_page.gif",
"tablefilter/style/themes/transparent/images/btn_last_page.gif",
"tablefilter/style/themes/transparent/images/btn_next_page.gif",
"tablefilter/style/themes/transparent/images/img_loading.gif",
"tablefilter/style/themes/transparent/transparent.css",
"tablefilter/style/themes/btn_first_page.gif",
"tablefilter/style/themes/btn_last_page.gif",
"tablefilter/style/themes/btn_next_page.gif",
"tablefilter/style/themes/btn_previous_page.gif",
"tablefilter/style/themes/icn_clp.png",
"tablefilter/style/themes/updown.png",
"tablefilter/style/themes/icn_exp.png",
"tablefilter/style/themes/icn_filter.gif",
"tablefilter/style/themes/btn_clear_filters.png",
"tablefilter/style/colsVisibility.css",
"tablefilter/tf-1-aa77ded8a1c16cdd0238.js",

     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
