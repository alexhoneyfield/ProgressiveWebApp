!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build/",n(n.s=0)}([function(e,t){self.addEventListener("fetch",(function(e){console.log(e.request.url),e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})))})),[{'revision':'265524f315dbf633ff89ffa0aacb616e','url':'/build/index.html'},{'revision':null,'url':'/build/static/css/main.c59815d2.chunk.css'},{'revision':null,'url':'/build/static/js/2.6e1be7aa.chunk.js'},{'revision':null,'url':'/build/static/js/3.215c46a0.chunk.js'},{'revision':null,'url':'/build/static/js/main.a9adf5d6.chunk.js'},{'revision':null,'url':'/build/static/js/runtime-main.2949935b.js'},{'revision':null,'url':'/build/static/media/home-icon.a2449c03.png'}]}]);
//# sourceMappingURL=service-worker.js.map