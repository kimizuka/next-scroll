_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"Oba/":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var i=n("nKUr"),o=n("q1tI"),c=n("vOnD"),s=n("4pgO"),r=["#E0F2F1","#B2DFDB","#80CBC4","#4DB6AC","#26A69A","#009688","#00897B","#00796B","#00695C","#004D40","#E0F2F1"],a=c.b.div.withConfig({displayName:"scroll__Wrapper",componentId:"sc-1eo5722-0"})(["position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:","vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}","}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}"],100*r.length,function(){for(var t="",e=0;e<r.length;++e)t+="\n          li:nth-child(".concat(e+1,") {\n            height: ").concat(100/r.length,"%;\n            background: ").concat(r[e],";\n\n            &:before {\n              color: ").concat(e<7||9<e?"#000":"#fff",";\n              content: '").concat(10===e?0:e,"';\n            }\n          }\n        ");return Object(c.a)(["",""],t)}());function l(){var t=Object(o.useState)(""),e=t[0],n=t[1],c=Object(o.useState)(0),l=c[0],u=c[1],d=Object(o.useState)(0),f=d[0],w=d[1],p=Object(o.useState)(0),b=p[0],h=p[1],j=Object(o.useState)(0),g=j[0],v=j[1],O=Object(o.useState)(0),x=O[0],m=O[1],E=Object(o.useState)(0),_=E[0],N=E[1],y=Object(o.useState)(new s.a({startValue:0,targetValue:0,duration:1})),L=y[0],S=y[1];function k(){1<=l&&"down"===e?window.scrollTo(window.scrollX,1):l<=0&&"up"===e&&window.scrollTo(window.scrollX,g-x-1)}function B(){v(document.getElementById("app").clientHeight),m(window.innerHeight)}function C(){N(window.scrollY)}function F(t){var e=l,n=Math.abs(t-e)>.5,i=t-e;S(new s.a({startValue:0,targetValue:t,duration:800,easing:"easeInOut",step:n?function(t){(t=e+(i<0?1:-1)*((1-Math.abs(i))*t))<0?t=1+t:1<t&&(t-=1),w(M(t))}:function(t){w(M(t=e+i*t))}}))}function M(t){return Math.max(2e-4,Math.min(t,.9999))}return Object(o.useEffect)((function(){if(!e)return window.addEventListener("resize",B,{passive:!0}),document.addEventListener("scroll",C,{passive:!0}),B(),void w(M(0));k()}),[e]),Object(o.useEffect)((function(){var t=b-l;t<0?Math.abs(t)>.99?n("up"):n("down"):Math.abs(t)>.99?n("down"):n("up"),k(),h(l)}),[l]),Object(o.useEffect)((function(){window.scrollTo(window.scrollX,(g-x)*f)}),[f]),Object(o.useEffect)((function(){g-x&&u(_/(g-x))}),[_]),Object(o.useEffect)((function(){return window.addEventListener("mousedown",t,{passive:!1}),window.addEventListener("wheel",t,{passive:!1}),window.addEventListener("touchstart",t,{passive:!1}),function(){L.stop(),window.removeEventListener("mousedown",t),window.removeEventListener("wheel",t),window.removeEventListener("touchstart",t)};function t(){L.stop()}}),[L]),Object(i.jsxs)(a,{className:e?"":"transparent",children:[Object(i.jsxs)("ol",{className:"list",children:[" ",r.map((function(t,e){return Object(i.jsx)("li",{},e)}))," "]}),Object(i.jsx)("div",{className:"debug",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:(100*l).toFixed(2)}),Object(i.jsx)("p",{children:e})]})}),Object(i.jsxs)("ol",{className:"btns",children:[r.map((function(t,e,n){if(e!==n.length-1){var o=e/(n.length-1);return Object(i.jsx)("li",{onClick:function(){return F(o)},children:(100*o).toFixed(2)},e)}})),Object(i.jsx)("li",{onClick:function(){return F(1)},children:"100"})]})]})}},lnni:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scroll",function(){return n("Oba/")}])}},[["lnni",0,1,2]]]);