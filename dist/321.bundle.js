(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[321],{474:(t,e,n)=>{t=n.nmd(t);var r="__lodash_hash_undefined__",o=1,i=2,a=1/0,u=9007199254740991,c="[object Arguments]",s="[object Array]",f="[object Boolean]",l="[object Date]",p="[object Error]",v="[object Function]",h="[object GeneratorFunction]",d="[object Map]",y="[object Number]",g="[object Object]",_="[object Promise]",b="[object RegExp]",m="[object Set]",w="[object String]",j="[object Symbol]",S="[object WeakMap]",E="[object ArrayBuffer]",A="[object DataView]",O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/,P=/^\./,L=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,x=/\\(\\)?/g,C=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,T={};T["[object Float32Array]"]=T["[object Float64Array]"]=T["[object Int8Array]"]=T["[object Int16Array]"]=T["[object Int32Array]"]=T["[object Uint8Array]"]=T["[object Uint8ClampedArray]"]=T["[object Uint16Array]"]=T["[object Uint32Array]"]=!0,T[c]=T[s]=T[E]=T[f]=T[A]=T[l]=T[p]=T[v]=T[d]=T[y]=T[g]=T[b]=T[m]=T[w]=T[S]=!1;var W="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,M="object"==typeof self&&self&&self.Object===Object&&self,U=W||M||Function("return this")(),R=e&&!e.nodeType&&e,$=R&&t&&!t.nodeType&&t,F=$&&$.exports===R&&W.process,N=function(){try{return F&&F.binding("util")}catch(t){}}(),B=N&&N.isTypedArray;function z(t,e){for(var n=-1,r=t?t.length:0,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}function D(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function G(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function H(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function V(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var q,J,K,Z=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=U["__core-js_shared__"],tt=(q=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",et=Q.toString,nt=X.hasOwnProperty,rt=X.toString,ot=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),it=U.Symbol,at=U.Uint8Array,ut=X.propertyIsEnumerable,ct=Z.splice,st=(J=Object.keys,K=Object,function(t){return J(K(t))}),ft=Nt(U,"DataView"),lt=Nt(U,"Map"),pt=Nt(U,"Promise"),vt=Nt(U,"Set"),ht=Nt(U,"WeakMap"),dt=Nt(Object,"create"),yt=Jt(ft),gt=Jt(lt),_t=Jt(pt),bt=Jt(vt),mt=Jt(ht),wt=it?it.prototype:void 0,jt=wt?wt.valueOf:void 0,St=wt?wt.toString:void 0;function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function At(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function kt(t){var e=-1,n=t?t.length:0;for(this.__data__=new Ot;++e<n;)this.add(t[e])}function Pt(t){this.__data__=new At(t)}function Lt(t,e){for(var n=t.length;n--;)if(Zt(t[n][0],e))return n;return-1}Et.prototype.clear=function(){this.__data__=dt?dt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var e=this.__data__;if(dt){var n=e[t];return n===r?void 0:n}return nt.call(e,t)?e[t]:void 0},Et.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:nt.call(e,t)},Et.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?r:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,n=Lt(e,t);return!(n<0||(n==e.length-1?e.pop():ct.call(e,n,1),0))},At.prototype.get=function(t){var e=this.__data__,n=Lt(e,t);return n<0?void 0:e[n][1]},At.prototype.has=function(t){return Lt(this.__data__,t)>-1},At.prototype.set=function(t,e){var n=this.__data__,r=Lt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Ot.prototype.clear=function(){this.__data__={hash:new Et,map:new(lt||At),string:new Et}},Ot.prototype.delete=function(t){return Ft(this,t).delete(t)},Ot.prototype.get=function(t){return Ft(this,t).get(t)},Ot.prototype.has=function(t){return Ft(this,t).has(t)},Ot.prototype.set=function(t,e){return Ft(this,t).set(t,e),this},kt.prototype.add=kt.prototype.push=function(t){return this.__data__.set(t,r),this},kt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.clear=function(){this.__data__=new At},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof At){var r=n.__data__;if(!lt||r.length<199)return r.push([t,e]),this;n=this.__data__=new Ot(r)}return n.set(t,e),this};var xt,Ct=(xt=function(t,e){return t&&Tt(t,e,ae)},function(t,e){if(null==t)return t;if(!Yt(t))return xt(t,e);for(var n=t.length,r=-1,o=Object(t);++r<n&&!1!==e(o[r],r,o););return t});function It(t,e){var n=[];return Ct(t,(function(t,r,o){e(t,r,o)&&n.push(t)})),n}var Tt=function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var u=i[++r];if(!1===e(o[u],u,o))break}return t};function Wt(t,e){for(var n=0,r=(e=Dt(e,t)?[e]:Rt(e)).length;null!=t&&n<r;)t=t[qt(e[n++])];return n&&n==r?t:void 0}function Mt(t,e){return null!=t&&e in Object(t)}function Ut(t,e,n,r,a){return t===e||(null==t||null==e||!ne(t)&&!re(e)?t!=t&&e!=e:function(t,e,n,r,a,u){var v=Xt(t),h=Xt(e),_=s,S=s;v||(_=(_=Bt(t))==c?g:_),h||(S=(S=Bt(e))==c?g:S);var O=_==g&&!G(t),k=S==g&&!G(e),P=_==S;if(P&&!O)return u||(u=new Pt),v||ie(t)?$t(t,e,n,r,a,u):function(t,e,n,r,a,u,c){switch(n){case A:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case E:return!(t.byteLength!=e.byteLength||!r(new at(t),new at(e)));case f:case l:case y:return Zt(+t,+e);case p:return t.name==e.name&&t.message==e.message;case b:case w:return t==e+"";case d:var s=H;case m:var v=u&i;if(s||(s=V),t.size!=e.size&&!v)return!1;var h=c.get(t);if(h)return h==e;u|=o,c.set(t,e);var g=$t(s(t),s(e),r,a,u,c);return c.delete(t),g;case j:if(jt)return jt.call(t)==jt.call(e)}return!1}(t,e,_,n,r,a,u);if(!(a&i)){var L=O&&nt.call(t,"__wrapped__"),x=k&&nt.call(e,"__wrapped__");if(L||x){var C=L?t.value():t,I=x?e.value():e;return u||(u=new Pt),n(C,I,r,a,u)}}return!!P&&(u||(u=new Pt),function(t,e,n,r,o,a){var u=o&i,c=ae(t),s=c.length;if(s!=ae(e).length&&!u)return!1;for(var f=s;f--;){var l=c[f];if(!(u?l in e:nt.call(e,l)))return!1}var p=a.get(t);if(p&&a.get(e))return p==e;var v=!0;a.set(t,e),a.set(e,t);for(var h=u;++f<s;){var d=t[l=c[f]],y=e[l];if(r)var g=u?r(y,d,l,e,t,a):r(d,y,l,t,e,a);if(!(void 0===g?d===y||n(d,y,r,o,a):g)){v=!1;break}h||(h="constructor"==l)}if(v&&!h){var _=t.constructor,b=e.constructor;_==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof b&&b instanceof b||(v=!1)}return a.delete(t),a.delete(e),v}(t,e,n,r,a,u))}(t,e,Ut,n,r,a))}function Rt(t){return Xt(t)?t:Vt(t)}function $t(t,e,n,r,a,u){var c=a&i,s=t.length,f=e.length;if(s!=f&&!(c&&f>s))return!1;var l=u.get(t);if(l&&u.get(e))return l==e;var p=-1,v=!0,h=a&o?new kt:void 0;for(u.set(t,e),u.set(e,t);++p<s;){var d=t[p],y=e[p];if(r)var g=c?r(y,d,p,e,t,u):r(d,y,p,t,e,u);if(void 0!==g){if(g)continue;v=!1;break}if(h){if(!D(e,(function(t,e){if(!h.has(e)&&(d===t||n(d,t,r,a,u)))return h.add(e)}))){v=!1;break}}else if(d!==y&&!n(d,y,r,a,u)){v=!1;break}}return u.delete(t),u.delete(e),v}function Ft(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Nt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!ne(t)||function(t){return!!tt&&tt in t}(t))&&(te(t)||G(t)?ot:C).test(Jt(t))}(n)?n:void 0}var Bt=function(t){return rt.call(t)};function zt(t,e){return!!(e=null==e?u:e)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<e}function Dt(t,e){if(Xt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!oe(t))||k.test(t)||!O.test(t)||null!=e&&t in Object(e)}function Gt(t){return t==t&&!ne(t)}function Ht(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}}(ft&&Bt(new ft(new ArrayBuffer(1)))!=A||lt&&Bt(new lt)!=d||pt&&Bt(pt.resolve())!=_||vt&&Bt(new vt)!=m||ht&&Bt(new ht)!=S)&&(Bt=function(t){var e=rt.call(t),n=e==g?t.constructor:void 0,r=n?Jt(n):void 0;if(r)switch(r){case yt:return A;case gt:return d;case _t:return _;case bt:return m;case mt:return S}return e});var Vt=Kt((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(oe(t))return St?St.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}(e);var n=[];return P.test(t)&&n.push(""),t.replace(L,(function(t,e,r,o){n.push(r?o.replace(x,"$1"):e||t)})),n}));function qt(t){if("string"==typeof t||oe(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}function Jt(t){if(null!=t){try{return et.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Kt(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(Kt.Cache||Ot),n}function Zt(t,e){return t===e||t!=t&&e!=e}function Qt(t){return function(t){return re(t)&&Yt(t)}(t)&&nt.call(t,"callee")&&(!ut.call(t,"callee")||rt.call(t)==c)}Kt.Cache=Ot;var Xt=Array.isArray;function Yt(t){return null!=t&&ee(t.length)&&!te(t)}function te(t){var e=ne(t)?rt.call(t):"";return e==v||e==h}function ee(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}function ne(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function re(t){return!!t&&"object"==typeof t}function oe(t){return"symbol"==typeof t||re(t)&&rt.call(t)==j}var ie=B?function(t){return function(e){return t(e)}}(B):function(t){return re(t)&&ee(t.length)&&!!T[rt.call(t)]};function ae(t){return Yt(t)?function(t,e){var n=Xt(t)||Qt(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!nt.call(t,i)||o&&("length"==i||zt(i,r))||n.push(i);return n}(t):function(t){if(n=(e=t)&&e.constructor,e!==("function"==typeof n&&n.prototype||X))return st(t);var e,n,r=[];for(var o in Object(t))nt.call(t,o)&&"constructor"!=o&&r.push(o);return r}(t)}function ue(t){return t}t.exports=function(t,e){return(Xt(t)?z:It)(t,"function"==typeof(n=e)?n:null==n?ue:"object"==typeof n?Xt(n)?function(t,e){return Dt(t)&&Gt(e)?Ht(qt(t),e):function(n){var r=function(t,e,n){var r=null==t?void 0:Wt(t,e);return void 0===r?void 0:r}(n,t);return void 0===r&&r===e?function(t,e){return null!=t&&function(t,e,n){for(var r,o=-1,i=(e=Dt(e,t)?[e]:Rt(e)).length;++o<i;){var a=qt(e[o]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}return r||!!(i=t?t.length:0)&&ee(i)&&zt(a,i)&&(Xt(t)||Qt(t))}(t,e,Mt)}(n,t):Ut(e,r,void 0,o|i)}}(n[0],n[1]):1==(a=function(t){for(var e=ae(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,Gt(o)]}return e}(r=n)).length&&a[0][2]?Ht(a[0][0],a[0][1]):function(t){return t===r||function(t,e,n,r){var a=n.length,u=a;if(null==t)return!u;for(t=Object(t);a--;){var c=n[a];if(c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++a<u;){var s=(c=n[a])[0],f=t[s],l=c[1];if(c[2]){if(void 0===f&&!(s in t))return!1}else{var p,v=new Pt;if(!(void 0===p?Ut(l,f,r,o|i,v):p))return!1}}return!0}(t,0,a)}:Dt(u=n)?(c=qt(u),function(t){return null==t?void 0:t[c]}):function(t){return function(e){return Wt(e,t)}}(u));var n,r,a,u,c}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],u=0;u<t.length;u++){var c=t[u],s=r.base?c[0]+r.base:c[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=n(l),v={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(v);else{var h=o(v,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var u=n(i[a]);e[u].references--}for(var c=r(t,o),s=0;s<i.length;s++){var f=n(i[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},131:(t,e,n)=>{"use strict";n.d(e,{ZW:()=>v});try{self["workbox:window:7.0.0"]&&_()}catch(r){}function r(t,e){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(t){n(t.data)},t.postMessage(e,[r.port2])}))}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:7.0.0"]&&_()}catch(r){}var a=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))};function u(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var c=function(t,e){this.type=t,Object.assign(this,e)};function s(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function f(){}var l={type:"SKIP_WAITING"};function p(t,e){if(!e)return t&&t.then?t.then(f):Promise.resolve()}var v=function(t){var e,n;function o(e,n){var r,o;return void 0===n&&(n={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new a,r.en=new a,r.on=new a,r.un=0,r.an=new Set,r.cn=function(){var t=r.fn,e=t.installing;r.tn>0||!u(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,t.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(t){var e=r.fn,n=t.target,o=n.state,i=n===r.vn,a={sw:n,isExternal:i,originalEvent:t};!i&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new c(o,a)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&e.waiting===n&&r.dispatchEvent(new c("waiting",a))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(n))},r.dn=function(t){var e=r.hn,n=e!==navigator.serviceWorker.controller;r.dispatchEvent(new c("controlling",{isExternal:n,originalEvent:t,sw:e,isUpdate:r.mn})),n||r.on.resolve(e)},r.gn=(o=function(t){var e=t.data,n=t.ports,o=t.source;return s(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new c("message",{data:e,originalEvent:t,ports:n,sw:o}))}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(o.apply(this,t))}catch(t){return Promise.reject(t)}}),r.sn=e,r.nn=n,navigator.serviceWorker.addEventListener("message",r.gn),r}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i,f=o.prototype;return f.register=function(t){var e=(void 0===t?{}:t).immediate,n=void 0!==e&&e;try{var r=this;return function(t,e){var n=t();return n&&n.then?n.then(e):e()}((function(){if(!n&&"complete"!==document.readyState)return p(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),s(r.bn(),(function(t){r.fn=t,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var e=r.fn.waiting;return e&&u(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new c("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(t){return Promise.reject(t)}},f.update=function(){try{return this.fn?p(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},f.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(t){try{return s(this.getSW(),(function(e){return r(e,t)}))}catch(t){return Promise.reject(t)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,l)},f.pn=function(){var t=navigator.serviceWorker.controller;return t&&u(t.scriptURL,this.sn.toString())?t:void 0},f.bn=function(){try{var t=this;return function(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}((function(){return s(navigator.serviceWorker.register(t.sn,t.nn),(function(e){return t.un=performance.now(),e}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(o.prototype,i),o}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(t,e){this.Sn(t).add(e)},e.removeEventListener=function(t,e){this.Sn(t).delete(e)},e.dispatchEvent=function(t){t.target=this;for(var e,n=i(this.Sn(t.type));!(e=n()).done;)(0,e.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}())}}]);
//# sourceMappingURL=321.bundle.js.map