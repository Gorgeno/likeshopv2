(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d386b17"],{"1b01":function(t,e,i){"use strict";var a=i("3d0e");e["a"]=a["a"]},"218f":function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var a=i("6b75");function n(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=i("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return n(t)||r(t)||Object(s["a"])(t)||c()}},"3d0e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.list.length?i("div",{style:{padding:t.padding,height:t.height}},[i("van-swipe",{directives:[{name:"show",rawName:"v-show",value:t.list&&t.list.length>0,expression:"list && list.length > 0"}],attrs:{"stop-propagation":!1,autoplay:3e3,"indicator-color":t.primaryColor}},t._l(t.list,(function(e,a){return i("van-swipe-item",{key:a},[i("van-image",{attrs:{width:"100%",height:"100%",radius:t.radius?t.radius:"5","lazy-load":"",src:e.image},on:{click:function(i){return i.preventDefault(),t.goPage(i,e)}}})],1)})),1)],1):t._e()},n=[],r=(i("a9e3"),i("9911"),i("73f5")),s={name:"AdSwiper",props:{id:{type:Number},radius:{type:String},padding:{type:String},height:{type:String,default:"142px"}},data:function(){return{list:[]}},created:function(){this.$getAdList()},mounted:function(){},methods:{$getAdList:function(){var t=this;Object(r["f"])({pid:this.id}).then((function(e){1==e.code&&(t.list=e.data)}))},goPage:function(t,e){var i=e.link,a=e.link_type,n=e.params;switch(a){case 1:case 2:this.$router.push({path:i,query:n});break;case 3:location.href=i;break}}},watch:{}},c=s,o=(i("ebac"),i("2877")),l=Object(o["a"])(c,a,n,!1,null,"280920f6",null);e["a"]=l.exports},"5b3a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAY1BMVEUAAACfn5+fn5+Tk5OXl5eSkpKampqWlpaampqXl5eYmJiZmZmZmZmXl5eYmJiZmZmZmZmZmZmZmZmYmJiYmJiZmZmZmZmYmJiYmJiZmZmZmZmYmJiYmJiZmZmZmZmZmZmZmZljCtX8AAAAIHRSTlMACBAaICMwPT9AT1BfYG9wf4CPkJ+gr7C/wM/Q3+Dv8LmhC18AAAH0SURBVEjH7VbbloMgDGzZLluqVKhaQa34/1+5Ei9FAZtz+rbbvNQKY8JkSHI4fOwf21kUSqm+79vhR1xOaOClqPutdfcr4gP01vURUynZhaats/mhwVz/Rdw9m6GmkszxQnnZzHAR9s7UhMxpYJXwZoYHVsW4ppNoYKfcwJZ6+3E6EqzZLiVEjh7WzhOg+JG8TMapBHThnPwKbyRKBewBoS/oAtwypIYIOK+npMFBGuLLpQZp+dLggD7Cs30sPah6SuPqhW5p/4FHHcDytTC3zumA/poSkIWxRufVKI3aQ8soRQwY5E5y7vjbbLNRkVUYHIvlG/bt/xYLtudc6VdvX+xI0Ip8rV60/oCuzVbvc7vg5B1w9g4491iokGx7meF+LFGrtqKwosHWfRt35+S1xB95EsWCJlArKBpMoEwWZ8vV2AeiJybCu+3UrDuNXyvEpIShZhTeYuNiPb90qLbfSxny0IdscV56RLNuKUMyWCuGLbLSOuckeGX75vhMRd+hSy+w3yzhZBDeDSeCdlupEzhgi2g3xUgDCbCrXjQ60YUb09QA1SXudZo4moDamJ5nh2BzT6cpx8i9BggNSpzdsSJd5iMj40MNd4XVKWvuWGXK/YtJcxMbpTQnrzOZ5I0HNFWGnwKZLMcRzA5jMsEDP/YH7ReWi1I3oMXV+gAAAABJRU5ErkJggg=="},7890:function(t,e,i){t.exports=i.p+"img/null_notice.9338c5a1.png"},"857a":function(t,e,i){var a=i("1d80"),n=/"/g;t.exports=function(t,e,i,r){var s=String(a(t)),c="<"+e;return""!==i&&(c+=" "+i+'="'+String(r).replace(n,"&quot;")+'"'),c+">"+s+"</"+e+">"}},9045:function(t,e,i){"use strict";var a=i("b9d8"),n=i.n(a);n.a},9911:function(t,e,i){"use strict";var a=i("23e7"),n=i("857a"),r=i("af03");a({target:"String",proto:!0,forced:r("link")},{link:function(t){return n(this,"a","href",t)}})},aa2a:function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return s}));var a=i("b775");function n(t){var e=t.type,i=parseInt(e)?"help/category":"article/category";return a["a"].get(i,{params:t})}function r(t){var e=t.type;delete t.type;var i=parseInt(e)?"help/lists":"article/lists";return a["a"].get(i,{params:t})}function s(t){var e=t.type,i=parseInt(e)?"help/detail":"article/detail";return a["a"].get(i,{params:{id:t.id}})}},af03:function(t,e,i){var a=i("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b9d8:function(t,e,i){},bb1b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news-center"},[i("div",{staticClass:"news-header"},[t.type?t._e():i("ad-swiper",{attrs:{id:7,radius:"0"}}),t.type?i("ad-swiper",{attrs:{id:10,radius:"0"}}):t._e()],1),i("van-tabs",{attrs:{swipeable:"","line-width":"40"},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}},[i("van-tab",{attrs:{title:"全部"}},[i("article-list",{staticClass:"mt10",attrs:{type:t.type,finishedText:"我可是有底线的～",errorText:t.errorText}})],1),t._l(t.categoryList,(function(e){return i("van-tab",{key:e.id,attrs:{title:e.name}},[i("article-list",{staticClass:"mt10",attrs:{type:t.type,categoryId:t.categoryId,finishedText:"我可是有底线的～"}})],1)}))],2)],1)},n=[],r=i("aa2a"),s=i("1b01"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-list"},[a("van-list",{directives:[{name:"show",rawName:"v-show",value:!t.isEmpty,expression:"!isEmpty"}],attrs:{finished:t.finished,"finished-text":t.finishedText},on:{load:function(e){return t.$getArticleList()}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articleList,(function(e,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEmpty,expression:"!isEmpty"}],key:n,staticClass:"article-item bg-white",on:{click:function(i){return t.visitArticle(e.id)}}},[a("div",{staticClass:"article-info row-between"},[a("div",{staticClass:"column",staticStyle:{"align-self":"flex-start"}},[a("div",{staticClass:"lg two-txt-cut",staticStyle:{"font-weight":"500"}},[t._v(t._s(e.title))]),a("div",{staticClass:"two-txt-cut nr mt10 lighter"},[t._v(t._s(e.synopsis))])]),a("div",{staticClass:"info-cover ml10"},[a("van-image",{attrs:{src:e.image,width:"100%",height:"100%",radius:"5px"}})],1)]),a("div",{staticClass:"article-bottom row-between"},[a("div",{staticClass:"xs muted"},[t._v("发布时间: "+t._s(e.create_time))]),a("div",{staticClass:"row mt10"},[a("div",{staticStyle:{height:"15px",width:"15px"}},[a("img",{attrs:{src:i("5b3a")}})]),a("div",{staticClass:"xs muted ml5"},[t._v(t._s(e.visit)+"人浏览")])])])])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isEmpty,expression:"isEmpty"}],staticClass:"data-null column-center"},[a("img",{staticClass:"img-null",attrs:{src:i("7890")}}),a("div",{staticClass:"muted"},[t._v(t._s(t.emptyText))])])],1)},o=[],l=(i("a9e3"),i("2909")),u={name:"articleList",props:{categoryId:{type:Number,default:0},type:{type:Number|String,default:0},finishedText:{type:String,default:""},emptyText:{type:String,default:"暂无任何内容..."}},data:function(){return{loading:!1,articleList:[],finished:!1,page:1,isEmpty:!1}},methods:{$getArticleList:function(){var t=this;this.loading=!0,1!=this.finished&&Object(r["b"])({type:this.type,page_no:this.page,id:this.categoryId||""}).then((function(e){if(1==e.code){var i;t.loading=!1;var a=e.data,n=a.more,r=a.list;(i=t.articleList).push.apply(i,Object(l["a"])(r)),t.page++,t.$nextTick((function(){n||(t.finished=!0),t.articleList.length<=0&&(t.isEmpty=!0)}))}}))},visitArticle:function(t){this.loading=!1,this.$router.push({name:"newsDetail",query:{id:t,type:this.type}})}},mounted:function(){this.$getArticleList({type:this.type})}},d=u,p=(i("fa85"),i("2877")),m=Object(p["a"])(d,c,o,!1,null,"58f68da2",null),f=m.exports,h=f,g={name:"helpCenter",components:{ArticleList:h,AdSwiper:s["a"]},data:function(){return{type:0,categoryId:0,isEmpty:!1,isError:!1,errorText:"",categoryList:[]}},methods:{$getCategoryList:function(t){var e=this;Object(r["c"])(t).then((function(t){1==t.code&&(e.categoryList=t.data)}))}},created:function(){var t=this.$route.query,e=t.id,i=t.type;this.id=e,this.type=i||0,document.title=i?"帮助中心":"商城咨讯"},mounted:function(){this.$getCategoryList({type:this.type})}},v=g,y=(i("9045"),Object(p["a"])(v,a,n,!1,null,"b2d247b0",null));e["default"]=y.exports},d183:function(t,e,i){},ebac:function(t,e,i){"use strict";var a=i("218f"),n=i.n(a);n.a},fa85:function(t,e,i){"use strict";var a=i("d183"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-4d386b17.957acc4a.js.map