"use strict";function debounce(e,t,u){var o;return function(){var r=this,n=arguments,l=function(){o=null,u||e.apply(r,n)},p=u&&!o;clearTimeout(o),o=setTimeout(l,t),p&&e.apply(r,n)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=debounce,module.exports=exports.default;