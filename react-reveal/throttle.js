"use strict";function throttle(t,e){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this,o=null,u=null,n=function(){t.apply(l,u),o=null};return function(){o||(u=arguments,o=setTimeout(n,e))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=throttle,module.exports=exports.default;