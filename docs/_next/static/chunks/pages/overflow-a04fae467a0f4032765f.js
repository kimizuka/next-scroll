_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{CAih:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var i=n("nKUr"),r=n("q1tI"),c=n("vOnD"),o=n("4pgO"),s=c.b.div.withConfig({displayName:"overflow__Wrapper",componentId:"sc-6syl96-0"})(["position:fixed;top:0;bottom:0;left:0;right:0;transition:opacity .2s ease-in-out;overflow:scroll;.list{position:relative;height:","vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;}","}.cards{&[data-is-scrolling='true']{pointer-events:none;}}.card{position:fixed;top:50%;left:50%;margin:-150px;border-radius:36px;width:312px;height:312px;background:#fff;overflow:hidden;box-shadow:0 0 8px rgba(0,0,0,.2);transform:translate(0,0);cursor:pointer;"," .cover{width:100%;background:rgba(0,0,0,.4);pointer-events:none;&:before{display:block;width:100%;padding-top:52.5%;content:'';transition:padding-top .2s ease-in-out;}&:after{position:absolute;top:12%;left:0;right:0;color:rgba(0,0,0,.4);font-size:80px;font-weight:bold;text-align:center;}}}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}"],900,function(){for(var e="",t=0;t<9;++t)e+="\n          li:nth-child(".concat(t+1,") {\n            height: ").concat(100/9,"%;\n          }\n        ");return Object(c.a)(["",""],e)}(),function(){for(var e="",t=0;t<9;++t)e+="\n          &:nth-child(".concat(t+1,") {\n            .cover {\n              &:after {\n                content: '").concat(8===t?0:t,"';\n              }\n            }\n          }\n        ");return Object(c.a)(["",""],e)}());function a(){var e=Object(r.useState)(""),t=e[0],n=e[1],c=Object(r.useState)(0),a=c[0],l=c[1],u=Object(r.useState)(0),d=u[0],f=u[1],p=Object(r.useState)(0),b=p[0],h=p[1],j=Object(r.useState)(null),x=j[0],w=j[1],O=Object(r.useState)(0),g=O[0],v=O[1],m=Object(r.useState)(0),y=m[0],E=m[1],S=Object(r.useState)(0),_=(S[0],S[1]),N=Object(r.useState)(0),k=N[0],T=N[1],L=Object(r.useState)(0),C=L[0],M=L[1],z=Object(r.useState)(new o.a({startValue:0,targetValue:0,duration:1})),A=z[0],V=z[1],F=Object(r.useState)(!1),I=F[0],R=F[1],W=Object(r.useState)(setTimeout((function(){}),0)),X=W[0],H=W[1],J=Object(r.useRef)(null),P=Object(r.useRef)(null),Z=Object(r.useRef)(null);function q(){1<=a&&"down"===t?w(U(0)):a<=0&&"up"===t&&w(U(1))}function D(){_(window.innerWidth),T(window.innerHeight),E(P.current.clientHeight)}function K(e){var t=a,n=Math.abs(e-t)>.5,i=e-t;V(new o.a({startValue:0,targetValue:e,duration:800,easing:"easeInOut",step:n?function(e){(e=t+(i<0?1:-1)*((1-Math.abs(i))*e))<0?e=1+e:1<e&&(e-=1),w(U(e))}:function(e){w(U(e=t+i*e))}}))}function U(e){return Math.max(2e-4,Math.min(e,.9999))}function B(e){for(var t=160,n=320,i=g,r=0;r<8;++r)e===r&&(r+4<i?i-=8:i<r-4&&(i+=8));return"translate(\n      ".concat(t*(b+i)-t*e,"px,\n      ").concat(n*e-n*(b+i),"px\n    ) rotate(").concat(-24*e+24*(b+i),"deg)")}return Object(r.useEffect)((function(){if(!t)return window.addEventListener("resize",D,{passive:!0}),D(),void w(U(0));q()}),[t]),Object(r.useEffect)((function(){var e=d-a;e<0?Math.abs(e)>.99?n("up"):n("down"):Math.abs(e)>.99?n("down"):n("up"),q(),f(a),h(a/(1/8)%1),v(0|a/(1/8)),R(!0),clearTimeout(X),H(setTimeout((function(){R(!1)}),40))}),[a]),Object(r.useEffect)((function(){"number"===typeof x&&(J.current.scrollTo(window.scrollX,(y-k)*x),w(null))}),[x]),Object(r.useEffect)((function(){y&&k&&l(C/(y-k))}),[C]),Object(r.useEffect)((function(){return J.current.addEventListener("mousedown",e,{passive:!1}),J.current.addEventListener("wheel",e,{passive:!1}),J.current.addEventListener("touchstart",e,{passive:!1}),function(){A.stop(),J.current.removeEventListener("mousedown",e),J.current.removeEventListener("wheel",e),J.current.removeEventListener("touchstart",e)};function e(){A.stop()}}),[A]),Object(i.jsx)(s,{onScroll:function(){M(J.current.scrollTop)},onWheel:function(){R(!0)},ref:J,id:"wrapper",className:t?"":"transparent",children:Object(i.jsxs)("div",{ref:P,children:[Object(i.jsxs)("ol",{className:"list",children:[" ",new Array(9).fill(null).map((function(e,t){return Object(i.jsx)("li",{},t)}))," "]}),Object(i.jsxs)("ol",{ref:Z,"data-is-scrolling":I,className:"cards",children:[" ",new Array(8).fill(null).map((function(e,t){return Object(i.jsx)("li",{onClick:function(){return K(t/8)},className:"card",style:{transform:B(t)},children:Object(i.jsx)("div",{className:"cover"})},t)}))," "]}),Object(i.jsx)("div",{className:"debug",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:C}),Object(i.jsx)("p",{children:(100*a).toFixed(2)}),Object(i.jsx)("p",{children:(100*b).toFixed(2)}),Object(i.jsx)("p",{children:g}),Object(i.jsx)("p",{children:t}),Object(i.jsx)("p",{children:String(I)})]})}),Object(i.jsxs)("ol",{style:{display:"none"},className:"btns",children:[new Array(9).fill(null).map((function(e,t,n){if(t!==n.length-1){var r=t/(n.length-1);return Object(i.jsx)("li",{onClick:function(){return K(r)},children:(100*r).toFixed(2)},t)}})),Object(i.jsx)("li",{onClick:function(){return K(1)},children:"100"})]})]})})}},rTkZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overflow",function(){return n("CAih")}])}},[["rTkZ",0,1,2]]]);