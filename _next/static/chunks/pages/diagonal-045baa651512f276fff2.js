_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"0il/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/diagonal",function(){return n("zZx1")}])},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(l)?(p.add(l),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},zZx1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o),i=n("q1tI"),c=n("vOnD"),u=n("4pgO"),s=c.b.div.withConfig({displayName:"diagonal__Wrapper",componentId:"sc-1e9qos4-0"})(["position:relative;transition:opacity .2s ease-in-out;.spacer{position:relative;height:","vh;}.card{position:fixed;top:50%;left:50%;margin:-150px;border-radius:12px;width:300px;height:300px;background:#fff;overflow:hidden;box-shadow:0 0 8px rgba(0,0,0,.2);transform:translate(0,0);cursor:pointer;"," .cover{width:100%;background:center no-repeat;background-size:cover;pointer-events:none;&:before{display:block;width:100%;padding-top:100%;content:'';transition:padding-top .2s ease-in-out;}}}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);div{text-align:center;}}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;color:#fff;background:rgba(0,0,0,.4);cursor:pointer;+ li{margin-top:2px;}}}"],700,function(){for(var e="",t=0;t<7;++t)e+="\n          &:nth-child(".concat(t+1,") {\n            .cover {\n              background-image: url(").concat("/next-scroll/","overflow/").concat(t+1,".png);\n            }\n          }\n        ");return Object(c.a)(["",""],e)}());function f(){var e=Object(i.useState)(""),t=e[0],n=e[1],o=Object(i.useState)(0),c=o[0],f=o[1],l=Object(i.useState)(0),d=l[0],p=l[1],h=Object(i.useState)(0),b=h[0],v=h[1],m=Object(i.useState)(null),y=m[0],g=m[1],w=Object(i.useState)(0),x=w[0],j=w[1],O=Object(i.useState)(0),_=O[0],M=O[1],S=Object(i.useState)(0),k=(S[0],S[1]),E=Object(i.useState)(0),C=E[0],P=E[1],A=Object(i.useState)(0),I=A[0],N=A[1],D=Object(i.useState)(new u.a({startValue:0,targetValue:0,duration:1})),H=D[0],W=D[1];function L(){1<=c&&"down"===t?g(F(0)):c<=0&&"up"===t&&g(F(1))}function q(){k(window.innerWidth),P(window.innerHeight),M(document.getElementById("app").clientHeight)}function R(){N(window.scrollY)}function T(e){var t=c,n=Math.abs(e-t)>.5,r=e-t;W(new u.a({startValue:0,targetValue:e,duration:800,easing:"easeInOut",step:n?function(e){(e=t+(r<0?1:-1)*((1-Math.abs(r))*e))<0?e=1+e:1<e&&(e-=1),g(F(e))}:function(e){g(F(e=t+r*e))}}))}function F(e){return Math.max(2e-4,Math.min(e,.9999))}function J(e){for(var t=160,n=320,r=x,o=0;o<6;++o)e===o&&(o+3<r?r-=6:r<o-3&&(r+=6));return"translate(\n      ".concat(t*(b+r)-t*e,"px,\n      ").concat(n*e-n*(b+r),"px\n    ) rotate(").concat(-24*e+24*(b+r),"deg)")}return Object(i.useEffect)((function(){if(!t)return window.addEventListener("resize",q,{passive:!0}),document.addEventListener("scroll",R,{passive:!0}),q(),void g(F(0));L()}),[t]),Object(i.useEffect)((function(){var e=d-c;e<0?Math.abs(e)>.99?n("up"):n("down"):Math.abs(e)>.99?n("down"):n("up"),L(),p(c),v(c/(1/6)%1),j(0|c/(1/6))}),[c]),Object(i.useEffect)((function(){"number"===typeof y&&(window.scrollTo(window.scrollX,(_-C)*y),g(null))}),[y]),Object(i.useEffect)((function(){_-C&&f(I/(_-C))}),[I]),Object(i.useEffect)((function(){return window.addEventListener("mousedown",e,{passive:!1}),window.addEventListener("wheel",e,{passive:!1}),window.addEventListener("touchstart",e,{passive:!1}),function(){H.stop(),window.removeEventListener("mousedown",e),window.removeEventListener("wheel",e),window.removeEventListener("touchstart",e)};function e(){H.stop()}}),[H]),Object(r.jsxs)(s,{className:t?"":"transparent",children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"diagonal"}),Object(r.jsx)("meta",{name:"description",content:"diagonal"}),Object(r.jsxs)("style",{children:["html ","{"," background: #EDEDED; ","}"]})]}),Object(r.jsx)("div",{className:"spacer"}),Object(r.jsxs)("ol",{className:"cards",children:[" ",new Array(6).fill(null).map((function(e,t){return Object(r.jsx)("li",{onClick:function(){return T(t/6)},className:"card",style:{transform:J(t)},children:Object(r.jsx)("div",{className:"cover"})},t)}))," "]}),Object(r.jsx)("div",{className:"debug",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:(100*c).toFixed(2)}),Object(r.jsx)("p",{children:(100*b).toFixed(2)}),Object(r.jsx)("p",{children:x}),Object(r.jsx)("p",{children:t})]})}),Object(r.jsxs)("ol",{className:"btns",children:[new Array(7).fill(null).map((function(e,t,n){if(t!==n.length-1){var o=t/(n.length-1);return Object(r.jsx)("li",{onClick:function(){return T(o)},children:(100*o).toFixed(2)},t)}})),Object(r.jsx)("li",{onClick:function(){return T(1)},children:"100"})]})]})}}},[["0il/",0,1,2]]]);