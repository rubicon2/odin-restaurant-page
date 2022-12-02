(()=>{var n={426:(n,t,e)=>{"use strict";e.d(t,{Z:()=>R});var r=e(81),o=e.n(r),i=e(645),a=e.n(i),s=e(667),c=e.n(s),f=new URL(e(733),e.b),l=new URL(e(622),e.b),u=new URL(e(951),e.b),p=new URL(e(912),e.b),d=new URL(e(291),e.b),m=new URL(e(642),e.b),h=a()(o()),g=c()(f),b=c()(l),v=c()(u),y=c()(p),w=c()(d),x=c()(m);h.push([n.id,"@font-face {\n    font-family: Roboto;\n    src: url("+g+");\n    font-style: normal;\n    font-weight: 300;\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url("+b+");\n    font-style: italic;\n    font-weight: 300;\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url("+v+");\n    font-style: normal;\n    font-weight: 500;\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url("+y+");\n    font-style: italic;\n    font-weight: 500;\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url("+w+");\n    font-style: normal;\n    font-weight: 700;\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url("+x+");\n    font-style: italic;\n    font-weight: 700;\n}\n\n:root {\n    box-sizing: border-box;\n    font-family: Roboto;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n    padding: 0;\n    margin: 0;\n}\n\nul, ol {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\na:hover {\n    color:rgb(129, 129, 129)\n}\n\nbody {\n    width: 100vw;\n    min-height: 100vh;\n\n    background-color: rgb(32, 32, 32);\n    color: white;\n}\n\nsection {\n    padding: 1rem 0;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    margin-bottom: 1rem;\n    font-weight: 700;\n}\n\np {\n    margin-bottom: 1rem;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n#content > * {\n    padding-left: 10%;\n    padding-right: 10%;\n}\n\n.post-content {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    gap: 2rem;\n    margin-top: 1rem;\n\n    font-weight: 300;\n}\n\n.page-header-bar {\n    background-color: rgb(78, 78, 78);\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.restaurant-name-heading {\n    font-size: 4rem;\n}\n\n.page-header-nav > ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    place-items: center;\n    gap: 2rem;\n\n    font-size: 1.5rem;\n}\n\n.main-img {\n    width: 100%;\n    border: 5px solid white;\n    border-radius: 5px;\n}",""]);const R=h},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var f=0;f<n.length;f++){var l=[].concat(n[f]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:n=>{"use strict";n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{"use strict";n.exports=function(n){return n[1]}},654:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>b});var r=e(379),o=e.n(r),i=e(795),a=e.n(i),s=e(569),c=e.n(s),f=e(565),l=e.n(f),u=e(216),p=e.n(u),d=e(589),m=e.n(d),h=e(426),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(h.Z,g);const b=h.Z&&h.Z.locals?h.Z.locals:void 0},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],f=r.base?c[0]+r.base:c[0],l=i[f]||0,u="".concat(f," ").concat(l);i[f]=l+1;var p=e(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var m=o(d,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=r(n,o),f=0;f<i.length;f++){var l=e(i[f]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},291:(n,t,e)=>{"use strict";n.exports=e.p+"75371f53f06181df75f1.ttf"},642:(n,t,e)=>{"use strict";n.exports=e.p+"60c1f67b002e61ad0fe4.ttf"},733:(n,t,e)=>{"use strict";n.exports=e.p+"8be2d1487420548b3b8d.ttf"},622:(n,t,e)=>{"use strict";n.exports=e.p+"43cbee784f9194c54b2c.ttf"},951:(n,t,e)=>{"use strict";n.exports=e.p+"7429a63c09f79a1760b0.ttf"},912:(n,t,e)=>{"use strict";n.exports=e.p+"56a82359ebe22eaae14e.ttf"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,e(654)})();