(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-867416c8"],{4370:function(e,t,r){},"43e4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"server-explain-container",domProps:{innerHTML:e._s(e.serverExplain)}})},a=[],i=r("b562"),c={name:"serverExplain",data:function(){return{serverExplain:{}}},methods:{$getServerProto:function(){var e=this;Object(i["g"])().then((function(t){1==t.code&&(e.serverExplain=t.data)}))},$getPrivatePolicy:function(){var e=this;Object(i["f"])().then((function(t){1==t.code&&(e.serverExplain=t.data)}))},$getAfterSaleGuar:function(){var e=this;Object(i["b"])().then((function(t){1==t.code&&(e.serverExplain=t.data)}))}},mounted:function(){var e=this.$route.query.type;switch(e=parseInt(e),document.title=0==e?"服务协议":1==e?"隐私政策":"售后保障",e){case 0:this.$getServerProto();break;case 1:this.$getPrivatePolicy();break;case 2:this.$getAfterSaleGuar();break;default:this.$getServerProto();break}}},s=c,o=(r("6719"),r("2877")),u=Object(o["a"])(s,n,a,!1,null,"485cf32d",null);t["default"]=u.exports},6719:function(e,t,r){"use strict";var n=r("4370"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-867416c8.7ca6d956.js.map