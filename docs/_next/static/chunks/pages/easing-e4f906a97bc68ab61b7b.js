_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&a||!p.has(l)?(p.add(l),r[f]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"R+HR":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("nKUr"),o=n("4pgO"),i=n("vOnD"),a=n("g4pe"),c=n.n(a),u=n("q1tI"),s=i.b.div.withConfig({displayName:"easing__Wrapper",componentId:"sc-1poubtc-0"})(["position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:","vh;li{display:flex;align-items:center;justify-content:center;color:rgba(0,0,0,.04);font-size:100vh;font-weight:bold;text-align:90vh;&:last-child{&:before{content:'0' !important;}}}","}.card{position:fixed;top:50%;left:50%;margin:-150px;border-radius:12px;width:300px;height:300px;background:#fff;overflow:hidden;box-shadow:0 0 8px rgba(0,0,0,.2);transform:translate(0,0);"," .cover{width:100%;background:rgba(0,0,0,.4);&:before{display:block;width:100%;padding-top:52.5%;content:'';transition:padding-top .2s ease-in-out;}&:after{position:absolute;top:12%;left:0;right:0;color:rgba(0,0,0,.4);font-size:80px;font-weight:bold;text-align:center;}}}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);div{text-align:center;}}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;color:#fff;background:rgba(0,0,0,.4);cursor:pointer;+ li{margin-top:2px;}}}"],900,function(){for(var e="",t=0;t<9;++t)e+="\n          li:nth-child(".concat(t+1,") {\n            height: ").concat(100/9,"%;\n\n            &:before {\n              content: '").concat(8===t?0:t,"';\n            }\n          }\n        ");return Object(i.a)(["",""],e)}(),function(){for(var e="",t=0;t<9;++t)e+="\n          &:nth-child(".concat(t+1,") {\n            .cover {\n              &:after {\n                content: '").concat(8===t?0:t,"';\n              }\n            }\n          }\n        ");return Object(i.a)(["",""],e)}());function f(){var e=Object(u.useState)(""),t=e[0],n=e[1],i=Object(u.useState)(0),a=i[0],f=i[1],l=Object(u.useState)(0),d=l[0],p=l[1],h=Object(u.useState)(0),b=h[0],v=h[1],m=Object(u.useState)(0),y=m[0],g=m[1],w=Object(u.useState)(0),x=w[0],j=w[1],O=Object(u.useState)(0),_=O[0],M=O[1],S=Object(u.useState)(0),E=S[0],k=S[1],A=Object(u.useState)(0),C=A[0],P=A[1],I=Object(u.useState)(new o.a({startValue:0,targetValue:0,duration:1})),N=I[0],H=I[1];function D(){1<=a&&"down"===t?window.scrollTo(window.scrollX,1):a<=0&&"up"===t&&window.scrollTo(window.scrollX,_-E-1)}function R(){M(document.getElementById("app").clientHeight),k(window.innerHeight)}function T(){P(window.scrollY)}function L(e){var t=a,n=Math.abs(e-t)>.5,r=e-t;H(new o.a({startValue:0,targetValue:e,duration:800,easing:"easeInOut",step:n?function(e){(e=t+(r<0?1:-1)*((1-Math.abs(r))*e))<0?e=1+e:1<e&&(e-=1),v(W(e))}:function(e){v(W(e=t+r*e))}}))}function W(e){return Math.max(2e-4,Math.min(e,.9999))}function q(e){var t=x;return e||7!==x||(t=-1),"translate(0, ".concat(E*e-E*(Object(o.b)(d)+t),"px)")}return Object(u.useEffect)((function(){if(!t)return window.addEventListener("resize",R,{passive:!0}),document.addEventListener("scroll",T,{passive:!0}),R(),void v(W(0));D()}),[t]),Object(u.useEffect)((function(){var e=y-a;e<0?Math.abs(e)>.99?n("up"):n("down"):Math.abs(e)>.99?n("down"):n("up"),D(),g(a),p(a/(1/8)%1),j(0|a/(1/8))}),[a]),Object(u.useEffect)((function(){window.scrollTo(window.scrollX,(_-E)*b)}),[b]),Object(u.useEffect)((function(){_-E&&f(C/(_-E))}),[C]),Object(u.useEffect)((function(){return window.addEventListener("mousedown",e,{passive:!1}),window.addEventListener("wheel",e,{passive:!1}),window.addEventListener("touchstart",e,{passive:!1}),function(){N.stop(),window.removeEventListener("mousedown",e),window.removeEventListener("wheel",e),window.removeEventListener("touchstart",e)};function e(){N.stop()}}),[N]),Object(r.jsxs)(s,{className:t?"":"transparent",children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"easing"}),Object(r.jsx)("meta",{name:"description",content:"easing"}),Object(r.jsxs)("style",{children:["html ","{"," background: #EDEDED; ","}"]})]}),Object(r.jsxs)("ol",{className:"list",children:[" ",new Array(9).fill(null).map((function(e,t){return Object(r.jsx)("li",{},t)}))," "]}),Object(r.jsxs)("ol",{className:"cards",children:[" ",new Array(8).fill(null).map((function(e,t){return Object(r.jsx)("li",{className:"card",style:{transform:q(t)},children:Object(r.jsx)("div",{className:"cover"})},t)}))," "]}),Object(r.jsx)("div",{className:"debug",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:(100*a).toFixed(2)}),Object(r.jsx)("p",{children:(100*d).toFixed(2)}),Object(r.jsx)("p",{children:x}),Object(r.jsx)("p",{children:t})]})}),Object(r.jsxs)("ol",{className:"btns",children:[new Array(9).fill(null).map((function(e,t,n){if(t!==n.length-1){var o=t/(n.length-1);return Object(r.jsx)("li",{onClick:function(){return L(o)},children:(100*o).toFixed(2)},t)}})),Object(r.jsx)("li",{onClick:function(){return L(1)},children:"100"})]})]})}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},k8JT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/easing",function(){return n("R+HR")}])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["k8JT",0,1,2]]]);