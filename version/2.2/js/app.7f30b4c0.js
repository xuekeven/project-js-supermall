(function(t){function e(e){for(var r,o,c=e[0],u=e[1],s=e[2],f=0,l=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-04bc55cb":"afcecbca","chunk-512f8a4c":"2c083022","chunk-011915af":"36362e2c","chunk-158853b6":"ff324c5c","chunk-16a127a4":"d68a1750","chunk-535e4f2c":"507d79a9","chunk-4ab02da8":"f30e7b5b"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-04bc55cb":1,"chunk-512f8a4c":1,"chunk-011915af":1,"chunk-158853b6":1,"chunk-16a127a4":1,"chunk-535e4f2c":1,"chunk-4ab02da8":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-04bc55cb":"d1190faf","chunk-512f8a4c":"c760791a","chunk-011915af":"92a79427","chunk-158853b6":"33fd8c1b","chunk-16a127a4":"61f59c3d","chunk-535e4f2c":"f4a86cf5","chunk-4ab02da8":"fc8e4e32"}[t]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],f=s.getAttribute("data-href");if(f===r||f===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=c(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0733":function(t,e,n){},2872:function(t,e,n){t.exports=n.p+"img/shopcart.fbc81098.svg"},3522:function(t,e,n){},3704:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("MainTabBar")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("TabBar",[r("TabBarItem",{attrs:{path:"/home",activeColor:"deepPink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("9443"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("b508"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("首页")])]},proxy:!0}])}),r("TabBarItem",{attrs:{path:"/category",activeColor:"deepPink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("57cd"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("a5ef"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("分类")])]},proxy:!0}])}),r("TabBarItem",{attrs:{path:"/cart",activeColor:"deepPink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("2872"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("c3f8"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("购物车")])]},proxy:!0}])}),r("TabBarItem",{attrs:{path:"/profile",activeColor:"deepPink"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("e55d"),alt:""}})]},proxy:!0},{key:"item-icon-active",fn:function(){return[r("img",{attrs:{src:n("d151"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[r("div",[t._v("我的")])]},proxy:!0}])})],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],f={},l=f,p=(n("7bf3"),n("2877")),d=Object(p["a"])(l,u,s,!1,null,null,null),h=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:function(e){return t.itemClick()}}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},v=[],b=(n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=b,y=(n("6721"),Object(p["a"])(g,m,v,!1,null,null,null)),k=y.exports,x={name:"MainTabBar",components:{TabBar:h,TabBarItem:k}},S=x,_=Object(p["a"])(S,i,c,!1,null,null,null),w=_.exports,C={name:"App",components:{MainTabBar:w}},T=C,O=(n("beba"),Object(p["a"])(T,o,a,!1,null,"507ae21c",null)),P=O.exports,L=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(L["a"]);var j=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-011915af"),n.e("chunk-158853b6")]).then(n.bind(null,"b3d7"))},E=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-011915af"),n.e("chunk-16a127a4")]).then(n.bind(null,"bb51"))},B=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-4ab02da8")]).then(n.bind(null,"c228"))},$=function(){return n.e("chunk-04bc55cb").then(n.bind(null,"3b42"))},A=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-011915af"),n.e("chunk-535e4f2c")]).then(n.bind(null,"6ab7"))},I=[{path:"",redirect:"/home"},{path:"/home",component:j},{path:"/category",component:E},{path:"/cart",component:B},{path:"/profile",component:$},{path:"/detail/:iid",component:A}],N=new L["a"]({routes:I,mode:"history"}),M=N,J=n("2f62"),D={getSessionStorage:function(t){t.cartList=JSON.parse(sessionStorage.sessionCartList)},setSessionStorage:function(t){sessionStorage.setItem("sessionCartList",JSON.stringify(t.cartList))},addCounter:function(t,e){e.count++,this.commit("setSessionStorage")},decCounter:function(t,e){e.count--,this.commit("setSessionStorage")},addToCart:function(t,e){e.checked=!0,t.cartList.push(e),this.commit("setSessionStorage")}},q={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}},F=(n("7db0"),{addCart:function(t,e){return new Promise((function(n,r){var o=t.state.cartList.find((function(t){return t.iid===e.iid}));o?(t.commit("addCounter",o),n("当前商品数量加1"),r("添加失败，稍后再试")):(e.count=1,t.commit("addToCart",e),n("添加到购物车成功"),r("添加失败，稍后再试"))}))}});r["a"].use(J["a"]);var H={cartList:[]},K=new J["a"].Store({state:H,mutations:D,getters:q,actions:F}),U=K,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},G=[],Q={name:"Toast",data:function(){return{isShow:!1,message:"我是弹窗"}},methods:{show:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;this.isShow=!0,this.message=t,setTimeout((function(){e.isShow=!1,e.message="我是弹窗"}),n)}}},R=Q,V=(n("f701"),Object(p["a"])(R,z,G,!1,null,"79a97786",null)),W=V.exports,X={install:function(t){var e=t.extend(W),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},Y=X,Z=n("fe3c"),tt=n.n(Z);r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(Y),tt.a.attach(document.body),new r["a"]({render:function(t){return t(P)},router:M,store:U,mounted:function(){sessionStorage.sessionCartList&&this.$store.commit("getSessionStorage")}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.11368804.svg"},6721:function(t,e,n){"use strict";n("3704")},"7bf3":function(t,e,n){"use strict";n("3522")},"934e":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.43fd8010.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.e3dac1fb.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.74d1cc4d.svg"},beba:function(t,e,n){"use strict";n("934e")},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3857810e.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.3ba58f85.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.c2b75dfe.svg"},f701:function(t,e,n){"use strict";n("0733")}});
//# sourceMappingURL=app.7f30b4c0.js.map