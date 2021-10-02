(()=>{"use strict";var n,r,e,t,o,i,a,s,l,d,c,p,u,f,h={426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Yantramanav:wght@300&display=swap);"]),a.push([n.id,'* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.wrapper {\r\n  width: 50rem;\r\n  margin-left: 7rem;\r\n  margin-top: 90px;\r\n  border-radius: 10px;\r\n  font-family: "Yantramanav", sans-serif;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  font-size: 30px;\r\n  font-weight: 600;\r\n  height: 60px;\r\n  align-items: center;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.listElements {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n}\r\n\r\n.fas {\r\n  color: rgb(139, 137, 137);\r\n}\r\n\r\n.trash {\r\n  display: none;\r\n}\r\n\r\n.no-outline {\r\n  border: none;\r\n  outline-width: 0;\r\n}\r\n\r\nheader span {\r\n  font-size: 30px;\r\n  font-weight: 300;\r\n  cursor: pointer;\r\n}\r\n\r\n.inputField {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 60px;\r\n}\r\n\r\ninput {\r\n  background-color: transparent;\r\n  border: 0 solid;\r\n}\r\n\r\n.inputField #input-box {\r\n  height: 100%;\r\n  width: 100%;\r\n  font-family: "Roboto", sans-serif;\r\n  padding-left: 10px;\r\n}\r\n\r\n.inputField #input-box::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.inputField span {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.center-items {\r\n  align-items: center;\r\n}\r\n\r\n.list-group-1 {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.task-description {\r\n  margin-left: 10px;\r\n}\r\n\r\n.edit-input {\r\n  display: none;\r\n  margin-left: 10px;\r\n  height: 40px;\r\n  width: 70%;\r\n}\r\n\r\n.todoList {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n}\r\n\r\n.clear-all-completed {\r\n  cursor: pointer;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.text-line {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.clear-all-completed:hover {\r\n  color: rgb(238, 238, 238);\r\n}\r\n\r\nhr {\r\n  color: rgb(78, 78, 78);\r\n  width: 100%;\r\n}\r\n\r\n.todoList li {\r\n  display: flex;\r\n  position: relative;\r\n  list-style: none;\r\n  height: 60px;\r\n  margin-bottom: 8px;\r\n  font-weight: 500;\r\n  padding: 10px;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.footer > span {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.todoList li span {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.d-height {\r\n  height: 50px;\r\n  padding-right: 9px;\r\n  padding-left: 9px;\r\n  border-bottom: 1px solid #d9d1d1;\r\n}\r\n\r\n.todo-cont {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: "Lato", sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 100;\r\n}\r\n\r\n.check-box {\r\n  margin-right: 4px;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 60px;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgb(199, 197, 197);\r\n}\r\n',""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);t&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],d=t.base?l[0]+t.base:l[0],c=i[d]||0,p="".concat(d," ").concat(c);i[d]=c+1;var u=e(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var h=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var l=t(n,o),d=0;d<i.length;d++){var c=e(i[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=l}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},g={};function m(n){var r=g[n];if(void 0!==r)return r.exports;var e=g[n]={id:n,exports:{}};return h[n](e,e.exports,m),e.exports}m.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return m.d(r,{a:r}),r},m.d=(n,r)=>{for(var e in r)m.o(r,e)&&!m.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},m.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),n=m(379),r=m.n(n),e=m(795),t=m.n(e),o=m(569),i=m.n(o),a=m(565),s=m.n(a),l=m(216),d=m.n(l),c=m(589),p=m.n(c),u=m(426),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,window.onload=()=>{const n=JSON.parse(localStorage.getItem("todo")||"[]"),r=document.querySelector(".todoList");n.forEach((({description:n,id:e,completed:t})=>{r.innerHTML+=`\n      <li class="listElements">\n        <div class="d-flex center-items list-group-1">\n          <input type="checkbox" ${t&&"checked"} class="check-box" id="check-${e}">\n          <p class="task-description ${t?"text-line":""}">${n}</p>\n          <input type="input" class="edit-input no-outline">\n        </div>\n        <div>\n          <i class="fas fa-trash-alt trash"></i>\n          <i class="fas fa-ellipsis-v"></i>\n        </div>\n      </li>\n      <hr>`}));const e=(r,e)=>{n.filter(((t,o)=>(r===o&&(t.completed=e,n.splice(r,1,t)),!1))),localStorage.setItem("todo",JSON.stringify(n)),window.location.reload()},t=document.getElementById("input-box");t.addEventListener("keydown",(r=>{var e;"Enter"===r.key&&(e={description:t.value,completed:!1,id:n.length+1},n.push(e),localStorage.setItem("todo",JSON.stringify(n)),window.location.reload())})),document.querySelectorAll(".listElements").forEach(((r,e)=>{r.addEventListener("dblclick",(()=>{r.style.backgroundColor="bisque";const t=r.childNodes[3].childNodes[1],o=r.childNodes[3].childNodes[3],i=r.childNodes[1].childNodes[3],a=r.childNodes[1].childNodes[5];t.style.display="flex",o.style.display="none",a.style.display="flex",i.style.display="none",r.addEventListener("mouseleave",(()=>{r.style.backgroundColor="transparent",t.style.display="none",a.style.display="none",o.style.display="flex",i.style.display="flex"})),t.addEventListener("click",(()=>{(r=>{const e=n.filter(((n,e)=>e!==r));localStorage.setItem("todo",JSON.stringify(e)),window.location.reload()})(e)})),a.addEventListener("keydown",(r=>{if("Enter"===r.key){const{value:r}=a;((r,e)=>{n.filter(((t,o)=>(r===o&&(t.description=e,n.splice(r,1,t)),!1))),localStorage.setItem("todo",JSON.stringify(n)),window.location.reload()})(e,r)}}))}))})),document.querySelectorAll(".check-box").forEach(((n,r)=>{n.addEventListener("change",(()=>{n.checked?e(r,!0):e(r,!1)}))})),document.querySelector(".clear-all-completed").addEventListener("click",(()=>{(()=>{const r=n.filter((n=>!0!==n.completed));localStorage.setItem("todo",JSON.stringify(r)),window.location.reload()})()}))}})();