(function(){"use strict";var e={9569:function(e,t,a){var n=a(9242),o=a(3396),r=a(4870);const s=(0,o._)("h1",null,"❀ Little Tea Shop ❀",-1),i={class:"inner"},l=["src"],c={class:"overlay"};var u={__name:"TeaCanvas",props:["location"],emits:["click"],setup(e,{emit:t}){const a=e,n=()=>t("click"),r=()=>a.location;return(e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"container",onClick:n},[s,(0,o._)("div",i,[(0,o._)("img",{class:"location",src:r()},null,8,l),(0,o._)("div",c,[(0,o.WI)(e.$slots,"default")])])]))}};const h=u;var v=h,p=a(7139);const d=e=>((0,o.dD)("data-v-cd53c106"),e=e(),(0,o.Cn)(),e),g={class:"talking"},f=d((()=>(0,o._)("span",{class:"blinking"},"◀",-1))),w=["src"];var y={__name:"TalkingView",props:["character","words","height"],setup(e){const t=e,a=()=>t.character;return(e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("span",g,[(0,o.Uk)(" “"+(0,p.zw)(t.words)+"” ",1),f]),(0,o._)("img",{class:"character",style:(0,p.j5)(`height: ${t.height}`),src:a()},null,12,w)],64))}},m=a(89);const _=(0,m.Z)(y,[["__scopeId","data-v-cd53c106"]]);var b=_;const k=e=>((0,o.dD)("data-v-5cd63a4c"),e=e(),(0,o.Cn)(),e),j={class:"shop"},O=k((()=>(0,o._)("h2",null,"Granny's Herbs",-1))),H={class:"wares"},S=["src"];var I={__name:"ShopView",setup(e){const t=[{name:"Black tea leaves",image:"./blacktea.png"}];return(e,a)=>((0,o.wg)(),(0,o.iD)("div",j,[O,(0,o._)("div",H,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(t,((e,t)=>(0,o._)("span",{class:"item",key:t},[(0,o._)("img",{src:e.image},null,8,S),(0,o._)("label",null,(0,p.zw)(e.name),1)]))),64))])]))}};const T=(0,m.Z)(I,[["__scopeId","data-v-5cd63a4c"]]);var C=T;const D="./owner.png",x="./owner-surprised.png",P="./herblady.png",U="./teashop_outside_1.jpg",M="./herb_store.jpg",L={normal:D,surprised:x,height:"70%"},W={normal:P,height:"80%"},$=[{at:U,say:"Wow!",who:L},{say:"My very own teashop!"},{say:"I've always wanted to own a teashop."},{say:"I wonder what tea it has inside?"},{say:"??",emo:"surprised"},{say:"There's no tea?!?"},{say:"Looks like I'll have to buy some. Let's go to the market!",emo:"normal"},{at:M,say:"Here we are."},{say:"Hello, dear.",who:W},{who:L,say:"Hi, Granny. I need to buy some tea. Do you have any?"},{who:W,say:"Well dear, why don't you take a look at what I've got and let me know if it's what you want?"},{who:L,say:"Okay!"}],z=(0,r.iH)(0);let G=[];const V=(0,r.iH)(""),Y=(0,r.iH)(""),Z=(0,r.iH)({}),q=(0,r.iH)("normal"),A=()=>{const e=G[z.value];e.at&&(V.value=e.at),e.say&&(Y.value=e.say),e.who&&(Z.value=e.who,q.value="normal"),e.emo&&(q.value=e.emo)},B={character:()=>Z.value[q.value],location:()=>V.value,words:()=>Y.value,height:()=>Z.value.height,init(e){G=e,A()},next(){return z.value++,z.value<G.length&&(A(),!0)}};var E={__name:"OutsideShop",setup(e){const t=()=>{if(n.value){const e=B.next();if(e)return;n.value=!1,a.value++}if(a.value<i.length){const e=i[a.value];"script"===e.type?(B.init(e.value),n.value=!0):"shop"===e.type&&(console.log("shop"),s.value=!0)}},a=(0,r.iH)(0),n=(0,r.iH)(!1),s=(0,r.iH)(!1),i=[{type:"script",value:$},{type:"shop"}];return t(),(e,a)=>((0,o.wg)(),(0,o.j4)(v,{location:(0,r.SU)(B).location(),onClick:t},{default:(0,o.w5)((()=>[n.value?((0,o.wg)(),(0,o.j4)(b,{key:0,character:(0,r.SU)(B).character(),words:(0,r.SU)(B).words(),height:(0,r.SU)(B).height()},null,8,["character","words","height"])):s.value?((0,o.wg)(),(0,o.j4)(C,{key:1})):(0,o.kq)("",!0)])),_:1},8,["location"]))}};const F=E;var K=F,J={__name:"App",setup(e){return(0,o.bv)((()=>{this.$imagePreload(["./owner.png","./owner-surprised.png","./herblady.png","./teashop_outside_1.jpg","./herb_store.jpg"])})),(e,t)=>((0,o.wg)(),(0,o.j4)(K))}};const N=J;var Q=N;const R=a(922);(0,n.ri)(Q).use(R).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var u=l(a)}for(t&&t(n);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkteashop"]=self["webpackChunkteashop"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9569)}));n=a.O(n)})();
//# sourceMappingURL=app.ef021d9a.js.map