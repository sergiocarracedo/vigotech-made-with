!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"VigotechMadeWith",function(){return r});n(1);const r={options:{lang:"gl",theme:"light"},lang:{en:'Proudly made with <i class="vt-pinecone"></i> in <strong>Vigo</strong>',gl:'Feito con <i class="vt-pinecone"></i> en <strong>Vigo</strong>',es:'Hecho con <i class="vt-pinecone"></i> en <strong>Vigo</strong>'},init(){const t=this.getBaseUrl(),e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",`${t}madewith-vigotech.css`),document.getElementsByTagName("head")[0].appendChild(e);const n=document.querySelectorAll(".vigotech-made-with");null!=n&&n.forEach(t=>{const e=t.getAttribute("data-lang")?t.getAttribute("data-lang"):this.options.lang,n=t.getAttribute("data-theme")?t.getAttribute("data-theme"):this.options.theme;t.innerHTML=this.lang[e]?this.lang[e]:this.lang.gl,t.setAttribute("href","https://vigotech.org"),"dark"==n&&t.classList.add("vigotech-dark")})},getBaseUrl(){const t=document.currentScript.getAttribute("src");return t.substring(0,t.lastIndexOf("/")+1)}};!function(t){t.init()}(r)},function(t,e,n){}]);