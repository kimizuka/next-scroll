_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);t.has(c)?a=!1:t.add(c)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),r[l]=d):a=!1}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},e)}h.rewind=function(){};var b=h;e.default=b},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},M09d:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crawl/[id]",function(){return n("XKxN")}])},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},XKxN:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return l})),n.d(e,"default",(function(){return f}));var r=n("nKUr"),o=n("4pgO"),a=n("vOnD"),i=n("g4pe"),c=n.n(i),s=n("q1tI"),u=a.b.div.withConfig({displayName:"id__Wrapper",componentId:"sc-1ksgan0-0"})(["position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:","vh;li{display:flex;align-items:center;justify-content:center;color:rgba(0,0,255,.04);font-size:50vh;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}","}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;color:#fff;background:rgba(0,0,0,.4);cursor:pointer;+ li{margin-top:2px;}}}.crawl{position:fixed;top:50%;left:50%;margin:auto;max-width:600px;max-height:300px;width:100%;background:url(","crawl/img.png) center top no-repeat;background-size:cover;transform:translate(-50%,-50%);pointer-events:none;&:after{display:block;padding-top:50%;content:'';}"," &[data-index='","']{background-position:center top;}}"],900,function(){for(var t="",e=0;e<9;++e)t+="\n          li:nth-child(".concat(e+1,") {\n            height: ").concat(100/9,"%;\n\n            &:before {\n              content: '").concat(8===e?0:e,"';\n            }\n          }\n        ");return Object(a.a)(["",""],t)}(),"/next-scroll/",function(){for(var t="",e=0;e<8;++e)t+="\n          &[data-index='".concat(e,"'] {\n            background-position: center ").concat(100/7*e,"%;\n          }\n        ");return Object(a.a)(["",""],t)}(),8),l=!0;function f(){var t=Object(s.useState)(""),e=t[0],n=t[1],a=Object(s.useState)(0),i=a[0],l=a[1],f=Object(s.useState)(0),p=f[0],d=f[1],h=Object(s.useState)(0),b=h[0],m=h[1],w=Object(s.useState)(0),g=w[0],y=w[1],v=Object(s.useState)(0),j=v[0],x=v[1],O=Object(s.useState)(0),_=O[0],k=O[1],M=Object(s.useState)(new o.a({startValue:0,targetValue:0,duration:1})),S=M[0],E=M[1];function C(){1<=i&&"down"===e?window.scrollTo(window.scrollX,1):i<=0&&"up"===e&&window.scrollTo(window.scrollX,g-j-1)}function P(){y(document.getElementById("app").clientHeight),x(window.innerHeight)}function A(){k(window.scrollY)}function I(t){var e=i,n=Math.abs(t-e)>.5,r=t-e;E(new o.a({startValue:0,targetValue:t,duration:800,easing:"easeInOut",step:n?function(t){(t=e+(r<0?1:-1)*((1-Math.abs(r))*t))<0?t=1+t:1<t&&(t-=1),d(N(t))}:function(t){d(N(t=e+r*t))}}))}function N(t){return Math.max(2e-4,Math.min(t,.9999))}return Object(s.useEffect)((function(){if(!e)return window.addEventListener("resize",P,{passive:!0}),document.addEventListener("scroll",A,{passive:!0}),P(),void d(N(0));C()}),[e]),Object(s.useEffect)((function(){var t=b-i;t<0?Math.abs(t)>.99?n("up"):n("down"):Math.abs(t)>.99?n("down"):n("up"),C(),m(i)}),[i]),Object(s.useEffect)((function(){window.scrollTo(window.scrollX,(g-j)*p)}),[p]),Object(s.useEffect)((function(){g-j&&l(_/(g-j))}),[_]),Object(s.useEffect)((function(){return window.addEventListener("mousedown",t,{passive:!1}),window.addEventListener("wheel",t,{passive:!1}),window.addEventListener("touchstart",t,{passive:!1}),function(){S.stop(),window.removeEventListener("mousedown",t),window.removeEventListener("wheel",t),window.removeEventListener("touchstart",t)};function t(){S.stop()}}),[S]),Object(r.jsxs)(u,{className:e?"":"transparent",children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"scrawl"}),Object(r.jsx)("meta",{name:"description",content:"scrawl = scroll + crawl"}),Object(r.jsx)("meta",{property:"og:title",content:"scrawl"}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"og:url",content:"https://kimizuka.github.io/next-scroll/crawl/"}),Object(r.jsx)("meta",{property:"og:image",content:"https://kimizuka.github.io/next-scroll/crawl/ogp.png"}),Object(r.jsx)("meta",{property:"og:image:width",content:"1200"}),Object(r.jsx)("meta",{property:"og:image:height",content:"600"}),Object(r.jsx)("meta",{property:"og:site_name",content:"scrawl"}),Object(r.jsx)("meta",{property:"og:description",content:"scrawl = scroll + crawl"}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(r.jsx)("meta",{name:"twitter:site",content:"@ki_230"}),Object(r.jsx)("meta",{name:"twitter:creator",content:"@ki_230"}),Object(r.jsx)("meta",{name:"twitter:title",content:"scrawl"}),Object(r.jsx)("meta",{name:"twitter:description",content:"scrawl = scroll + crawl"}),Object(r.jsx)("meta",{name:"twitter:image:src",content:"https://kimizuka.github.io/next-scroll/crawl/ogp.png"}),Object(r.jsxs)("style",{children:["html ","{"," background: #0277BD; ","}"]})]}),Object(r.jsxs)("ol",{className:"list",children:[" ",new Array(9).fill(null).map((function(t,e){return Object(r.jsx)("li",{},e)}))," "]}),Object(r.jsx)("div",{className:"debug",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:(100*i).toFixed(2)}),Object(r.jsx)("p",{children:e})]})}),Object(r.jsxs)("ol",{className:"btns",children:[new Array(9).fill(null).map((function(t,e,n){if(e!==n.length-1){var o=e/(n.length-1);return Object(r.jsx)("li",{onClick:function(){return I(o)},children:(100*o).toFixed(2)},e)}})),Object(r.jsx)("li",{onClick:function(){return I(1)},children:"100"})]}),Object(r.jsx)("div",{"data-index":0|8*i,className:"crawl"})]})}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),f=function(t){i(n,t);var e=u(n);function n(t){var a;return o(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);e.default=f},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},g4pe:function(t,e,n){t.exports=n("8Kt/")},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}}},[["M09d",0,1,2]]]);