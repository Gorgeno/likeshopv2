(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f5c7d46"],{"218f":function(t,e,s){},2909:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}s("a4d3"),s("e01a"),s("d28b"),s("a630"),s("d3b7"),s("3ca3"),s("ddb0");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=s("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||n(t)||Object(o["a"])(t)||r()}},"3d0e":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.list.length?s("div",{style:{padding:t.padding,height:t.height}},[s("van-swipe",{directives:[{name:"show",rawName:"v-show",value:t.list&&t.list.length>0,expression:"list && list.length > 0"}],attrs:{"stop-propagation":!1,autoplay:3e3,"indicator-color":t.primaryColor}},t._l(t.list,(function(e,i){return s("van-swipe-item",{key:i},[s("van-image",{attrs:{width:"100%",height:"100%",radius:t.radius?t.radius:"5","lazy-load":"",src:e.image},on:{click:function(s){return s.preventDefault(),t.goPage(s,e)}}})],1)})),1)],1):t._e()},a=[],n=(s("a9e3"),s("9911"),s("73f5")),o={name:"AdSwiper",props:{id:{type:Number},radius:{type:String},padding:{type:String},height:{type:String,default:"142px"}},data:function(){return{list:[]}},created:function(){this.$getAdList()},mounted:function(){},methods:{$getAdList:function(){var t=this;Object(n["e"])({pid:this.id}).then((function(e){1==e.code&&(t.list=e.data)}))},goPage:function(t,e){var s=e.link,i=e.link_type,a=e.params;switch(i){case 1:case 2:this.$router.push({path:s,query:a});break;case 3:location.href=s;break}}},watch:{}},r=o,c=(s("ebac"),s("2877")),l=Object(c["a"])(r,i,a,!1,null,"280920f6",null);e["a"]=l.exports},"3d84":function(t,e,s){},"857a":function(t,e,s){var i=s("1d80"),a=/"/g;t.exports=function(t,e,s,n){var o=String(i(t)),r="<"+e;return""!==s&&(r+=" "+s+'="'+String(n).replace(a,"&quot;")+'"'),r+">"+o+"</"+e+">"}},9911:function(t,e,s){"use strict";var i=s("23e7"),a=s("857a"),n=s("af03");i({target:"String",proto:!0,forced:n("link")},{link:function(t){return a(this,"a","href",t)}})},"9c6d":function(t,e,s){"use strict";s("3d84")},a434:function(t,e,s){"use strict";var i=s("23e7"),a=s("23cb"),n=s("a691"),o=s("50c4"),r=s("7b0b"),c=s("65f0"),l=s("8418"),d=s("1dde"),u=s("ae40"),v=d("splice"),m=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,h=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!v||!m},{splice:function(t,e){var s,i,d,u,v,m,f=r(this),A=o(f.length),w=a(t,A),C=arguments.length;if(0===C?s=i=0:1===C?(s=0,i=A-w):(s=C-2,i=h(p(n(e),0),A-w)),A+s-i>g)throw TypeError(b);for(d=c(f,i),u=0;u<i;u++)v=w+u,v in f&&l(d,u,f[v]);if(d.length=i,s<i){for(u=w;u<A-i;u++)v=u+i,m=u+s,v in f?f[m]=f[v]:delete f[m];for(u=A;u>A-i+s;u--)delete f[u-1]}else if(s>i)for(u=A-i;u>w;u--)v=u+i-1,m=u+s-1,v in f?f[m]=f[v]:delete f[m];for(u=0;u<s;u++)f[u+w]=arguments[u+2];return f.length=A-i+s,d}})},af03:function(t,e,s){var i=s("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},ce5c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAAWlBMVEUAAAD/IDD/KDj/Kjr/LT3/LDz/Kjr/KTn/Kzv/Kjr/LDz/Kzv/LDz/LDz/Kzv/Kzr/Kzv/Kzv/LDz/Kzv/LDz/LDz/Kzv/Kzv/Kzv/Kzv/LDz/LDv/Kzv/LDznz9o6AAAAHHRSTlMAECAwP0BPUF9gb3B/gI+Qn6CvsL/Az9Df4O/wQqu59AAAAoBJREFUWMPtmNl26yAMRQsuN/Wga5MY4qH+/9+smTwKN8Z0rT70vGTAOQhpI1h5e/vTDyjJ6robhrqu/pFrTqRohoXu7IJX1g0b3WloWHJAlIYly4TVP1I2JouxsjVu/4O9elhknQntVp32otrrsSlg2qtvIShf5T5e7XY7Zwa+CKhy604RR5UXx3N5eqF8/EFLDoI+gRs5BKpFs+lVqgI7HJWvmz0O00LOrVMxlviHFbv5y2Zq6m+4gTNgtAfj+UsVIB+FUjU+3BR+TePZQS6Kbjiru28vVK86fC7eS9ztNgQJ33QyzGwgPh5CxHzdIEQYcSymWR5qJnxtKkTSs3vDFNWMxCMDY4OEm6XxyMDYuIWb8XhkYKDxcLMOI8O0JuHYIdvm/NAfVXI5ANjWzjDQGlcWveGf9rF2PV9jvu7VrE9zQnHsIJuB4TYNqUsHs62/0TFQm3GhaaUYaMmMMulNtcEts5zTQ/W0zJhx321JramfCwvLY12sYbdrB/2hwczArokSfTNh1kPHkINWa7P6NL+FdqJTIGYqbAb6kQS5I0gbgzDXDHDR75uQsE/mnXpULO8I9N3Iwa5qOEbMqE3/ng1pb6qgn0+WZMAG9jERN1hvG4KTIaalMZeMRTE1aKNqPsO5Z4O4YEezep613HVNe7ER060PaUITGfM8pat5CnM1zYJKux1rvAk52sm8FrENX7qJSGcr42lCak31WLFMjxWqeCofH+8L6aFsfFPY18rThC40oH0TEtfMht2N+IpYnHNub5ZcNYM455xRGedo2rNx2UxGJGPFhrxsRuORsWIjqtkz5jKjokHamHvT/PcR6+5IIDi4nof+DfanX6wvfj0wZO7GQUwAAAAASUVORK5CYII="},d5b1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAABd1BMVEUAAAAAAAAAAABVVVVmZmZtbW1gYGBxcXFdXV1qampiYmJ2dnZtbW1mZmZgYGBwcHBpaWljY2NxcXFmZmZtbW1oaGhvb29qampmZmZsbGxtbW1ra2twcHBubm5ra2tvb29wcHBubm5tbW1wcHBtbW1wcHBvb29tbW1vb29ubm5ycnJsbGxxcXFwcHBubm5wcHBxcXFwcHBxcXFubm5ubm5vb29wcHBvb29vb29wcHBvb29vb29vb29vb29ubm5wcHBvb29vb29vb29ubm5vb29wcHBvb29ubm5wcHBwcHBvb29vb29vb29vb29wcHBubm5wcHBvb29vb29vb29wcHBvb29ubm5vb29vb29wcHBwcHBvb29vb29wcHBwcHBwcHBvb29vb29wcHBwcHBvb29wcHBvb29wcHBvb29vb29wcHBwcHBvb29wcHBvb29wcHBwcHBwcHBvb29vb29wcHBvb29wcHBwcHBvb29wcHBwcHBvb29wcHBhabGmAAAAfHRSTlMAAQIDBQcICQsMDQ0ODxAQERISFBUWFxgZGhwfIiUmJyksLzAxMjU2Nzo6Oz1AQUJGaW94eXp7gYOEhYeIiouLjI6RlpqbnJ2doKGjpqqtsLC3vb/AwcPDxcbJy8zP0tTV19nb3N3f4uPo6evs8vPz9Pb3+Pj6+vv8/P3+O+IQPgAAAZNJREFUWMPt2MdSAkEUheFBBZVRVEAUFVTMOeeIohINmDCLOWdhYObhhem2XLm7R4uqPg/w161vMXQhSWJiYmI5uLI2Vz6m3Lx9czkEKcsbWmYLhYijE9n0x7SZPt2q6Xvx0qete2kW95rI2+2HLP0+RW5icMe5yQy9Se0JN5mjN+k4wpk0nONM6uI4k05h8qvJ23gxzOR5AmByxk0myU0M3cc4k8YrnInrL0zGcCZPI0CTYSPM5HW0iN7kmrUfASb1FyrMpOcUZ+LJdZNBI8zk1kNv0vLA2gPk5cqgwn4te8nL6ym9rAZk4nJpkH1J1IMakEYqQl22rfGbI07icomf3azuV1Pf7E9yDfLyqgLWSMM0lDBKIx2uQmnEHDANR85oyEu8vEt9s9Wn/xWgJUN26nKE3xyivln28fKOXWj8aGyhNBIBK0ojQH2z+Vtjk/pmyyJKwxJOgjQKZvm3LlpB/Uhy3+vlz+Vy8pddF/vtXrHRP0cd2Se6EqW/WZLy+mPa3TyinHmiO/uaTJKYmJjYf+wLmpv4t3Rddy0AAAAASUVORK5CYII="},e606:function(t,e){t.exports="data:image/png;base64,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"},e74b:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"row white bg-primary",staticStyle:{height:"30px","padding-top":"5px"}},[i("img",{staticClass:"logo ml10",attrs:{src:t.headerLogo}})]),i("van-sticky",[i("van-search",{attrs:{disabled:"",shape:"round",background:t.primaryColor,placeholder:"请输入搜索关键词"},on:{click:function(e){return t.goPage("goodsSearch")}}})],1)],1),i("div",{staticClass:"main"},[i("div",{staticClass:"banner"},[i("ad-swiper",{attrs:{id:1,height:"4.02667rem",padding:"0 10px 10px 10px",radius:"6px"}})],1),t.navList.length?i("van-swipe",{staticClass:"nav-box bg-white",attrs:{loop:!1,"indicator-color":t.primaryColor,"show-indicators":!0}},t._l(t.navList,(function(e,s){return i("van-swipe-item",{key:s,staticClass:"row wrap mb10"},t._l(e,(function(e,s){return i("div",{key:s,staticClass:"nav-item column-center normal",on:{click:function(s){return t.handleNav(e.link,e.link_type)}}},[i("img",{attrs:{src:e.image,alt:""}}),i("div",{staticClass:"xs"},[t._v(t._s(e.name))])])})),0)})),1):t._e(),t.news.length?i("div",{staticClass:"news row bg-white"},[i("img",{staticClass:"icon-toutiao",attrs:{src:s("e606")}}),i("span",{staticClass:"gap-line"}),i("div",{staticClass:"news-list"},[i("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1,vertical:!0,touchable:!1,height:"0.66667rem"}},t._l(t.news,(function(e,s){return i("van-swipe-item",{key:s,staticClass:"row"},[i("router-link",{staticClass:"row normal",attrs:{to:{name:"newsCenter"}}},[e.is_new?i("van-tag",{staticClass:"tag",attrs:{plain:"",round:"",color:t.primaryColor,size:"medium"}},[t._v("最新")]):t._e(),i("div",{staticClass:"text-swiper ml10 one-txt-cut"},[t._v(" "+t._s(e.title)+" ")])],1)],1)})),1)],1),i("img",{staticClass:"icon-sm ml10",attrs:{src:s("d5b1")}})]):t._e(),t.newGoodsObj.length?i("div",{staticClass:"new-goods-container"},[t._m(0),i("div",{staticClass:"goods-contain"},t._l(t.newGoodsObj,(function(e){return i("div",{key:e.id,staticClass:"goods-item row bg-white",on:{click:function(s){return t.goPage("goodsDetail",{id:e.id})}}},[i("div",{staticClass:"goods-img"},[i("van-image",{attrs:{src:e.image,width:"100%",height:"100%"}})],1),i("div",{staticClass:"goods-info column"},[i("div",{staticClass:"goods-name two-txt-cut nr"},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"goods-params row-between muted mt10 mb5 xxs"},[i("div",{staticClass:"xxs"},[t._v(" 原价 "),i("price-slice",{attrs:{showSubscript:"",subScriptClass:"xxs",firstClass:"xxs",secondClass:"xxs",price:e.market_price}})],1),i("div",{staticClass:"xxs"},[t._v(" "+t._s(e.sales_sum)+"人购买 ")])]),i("div",{staticClass:"row-between"},[i("price-slice",{attrs:{weight:"bold",showSubscript:"",subScriptClass:"sm",firstClass:"home-new-goods-size",secondClass:"sm",price:e.price,color:t.primaryColor}}),i("div",{staticClass:"fastbuy-btn white row-center br60 xs"},[t._v(" 立即抢购 ")])],1)])])})),0)]):t._e(),t.goodsList.length?i("div",{staticClass:"recommend"},[t._m(1),i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.$getBestList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("goods-list",{attrs:{lists:t.goodsList}})],1)],1):t._e(),i("van-popup",{staticClass:"column-center",attrs:{round:"",transition:"fade"},model:{value:t.showCoupop,callback:function(e){t.showCoupop=e},expression:"showCoupop"}},[i("div",{staticClass:"coupon-popup"},[i("div",{staticClass:"coupon-container"},[i("div",{staticClass:"coupon-wrapper"},t._l(t.couponPopList,(function(e){return i("div",{key:e.id,staticClass:"coupon-item row"},[i("div",{staticClass:"lg primary money"},[i("price-slice",{attrs:{price:e.money,showSubscript:!0,subScriptClass:"lg",firstClass:"coupon-pop-size",secondClass:"lg"}})],1),i("div",{staticClass:"column coupon-desc"},[i("div",{staticClass:"bold md"},[t._v(t._s(e.name))]),i("div",{staticClass:"xs muted mt5",staticStyle:{"line-height":"15px"}},[t._v(t._s(e.use_goods_type))])])])})),0)])]),i("div",{staticClass:"get-coupon-btn lg white bg-primary mt10 br60 column-center",on:{click:function(e){t.showCoupop=!1}}},[t._v(" 立即领取 ")])])],1)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-goods-header row-center"},[i("div",{staticClass:"line mr10"}),i("img",{staticClass:"header-icon mr10",attrs:{src:s("ce5c"),alt:""}}),i("div",{staticClass:"title xxl normal bold"},[t._v("新品推荐")]),i("div",{staticClass:"line ml10"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-header row-center"},[i("div",{staticClass:"line mr10"}),i("img",{staticClass:"header-icon mr10",attrs:{src:s("7fff"),alt:""}}),i("div",{staticClass:"title xxl normal bold"},[t._v("好物优选")]),i("div",{staticClass:"line ml10"})])}],n=(s("a434"),s("5530")),o=s("2909"),r=s("19ed"),c=s("73f5"),l=s("b562"),d=s("c24f"),u=s("f6b8"),v=s("3d0e"),m=s("e699"),p=(s("5f01"),s("2f62")),h={name:"home",components:{Recommend:r["a"],GoodsList:u["a"],AdSwiper:v["a"],PriceSlice:m["a"]},data:function(){return{colors:["#FE41B7","#FA444D","#BD5AFF","#FB831C","#2DC1B9"],showCoupop:!1,showHotRank:!0,showHotShop:!0,headerLogo:"",remainTime:0,couponList:[],newGoodsObj:[],news:[],activityArea:[],navList:[],couponPopList:[],loading:!0,finished:!1,isEmpty:!1,page:1,goodsList:[],isDischarge:!0}},methods:{userGetCoupon:function(t){var e=this;Object(d["s"])({id:t}).then((function(t){1==t.code&&(e.$toast(t.msg),e.$getHome())}))},handleArray:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return t.length<=s?(t.length>0&&e.push(t),e):(e.push(t.splice(0,s)),this.handleArray(t,e,s))},$getMenu:function(){var t=this;Object(l["f"])({type:1,client:2}).then((function(e){if(1==e.code){JSON.parse(JSON.stringify(e.data));var s=t.handleArray(e.data);t.navList=s}}))},handleNav:function(t,e){switch(e){case 1:this.$router.push(t);break;case 2:window.location.href=t;break;case 3:this.$router.push(t);break}},goPage:function(t,e){this.$router.push({name:t,query:e})},$getHome:function(){var t=this;Object(c["p"])().then((function(e){if(1==e.code){var s=e.data,i=s.coupon,a=s.new_goods,n=s.shop_logo,o=s.news,r=s.activity_area;Date.parse(new Date);t.couponList=i,t.newGoodsObj=a,t.headerLogo=n,t.news=o,t.activityArea=r}}))},$getCouponPopList:function(){var t=this;this.token&&Object(l["e"])().then((function(e){1==e.code&&(t.couponPopList=e.data,e.data.length>0&&(t.showCoupop=!0))}))},onChangeDate:function(){},activeTimeOut:function(){this.$getHome()},$getBestList:function(){var t=this,e=this.page,s=this.finished;this.loading=!0,1!=s&&Object(c["f"])({page_no:e,page_size:15}).then((function(e){if(1==e.code){var s;t.loading=!1;var i=e.data,a=i.more,n=i.list;(s=t.goodsList).push.apply(s,Object(o["a"])(n)),t.page++,a||(t.finished=!0),t.goodsList.length<=0&&(t.isEmpty=!0)}}))}},created:function(){this.$getMenu(),this.$getHome(),this.$getBestList(),this.$getCouponPopList()},mounted:function(){this.isDischarge=!1},computed:Object(n["a"])({},Object(p["c"])(["token"])),destroyed:function(){this.isDischarge=!0}},g=h,b=(s("9c6d"),s("2877")),f=Object(b["a"])(g,i,a,!1,null,"0ff68d86",null);e["default"]=f.exports},ebac:function(t,e,s){"use strict";s("218f")}}]);
//# sourceMappingURL=chunk-1f5c7d46.05a5f30d.js.map