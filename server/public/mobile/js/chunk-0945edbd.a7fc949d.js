(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0945edbd"],{"4d63":function(t,e,i){var a=i("83ab"),n=i("da84"),r=i("94ca"),s=i("7156"),c=i("9bf2").f,l=i("241c").f,u=i("44e7"),o=i("ad6d"),m=i("9f7f"),d=i("6eeb"),f=i("d039"),p=i("69f3").set,h=i("2626"),A=i("b622"),g=A("match"),b=n.RegExp,v=b.prototype,Z=/a/g,w=/a/g,y=new b(Z)!==Z,C=m.UNSUPPORTED_Y,x=a&&r("RegExp",!y||C||f((function(){return w[g]=!1,b(Z)!=Z||b(w)==w||"/a/i"!=b(Z,"i")})));if(x){var D=function(t,e){var i,a=this instanceof D,n=u(t),r=void 0===e;if(!a&&n&&t.constructor===D&&r)return t;y?n&&!r&&(t=t.source):t instanceof D&&(r&&(e=o.call(t)),t=t.source),C&&(i=!!e&&e.indexOf("y")>-1,i&&(e=e.replace(/y/g,"")));var c=s(y?new b(t,e):b(t,e),a?this:v,D);return C&&i&&p(c,{sticky:i}),c},R=function(t){t in D||c(D,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},Y=l(b),E=0;while(Y.length>E)R(Y[E++]);v.constructor=D,D.prototype=v,d(n,"RegExp",D)}h("RegExp")},"5b3a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAY1BMVEUAAACfn5+fn5+Tk5OXl5eSkpKampqWlpaampqXl5eYmJiZmZmZmZmXl5eYmJiZmZmZmZmZmZmZmZmYmJiYmJiZmZmZmZmYmJiYmJiZmZmZmZmYmJiYmJiZmZmZmZmZmZmZmZljCtX8AAAAIHRSTlMACBAaICMwPT9AT1BfYG9wf4CPkJ+gr7C/wM/Q3+Dv8LmhC18AAAH0SURBVEjH7VbbloMgDGzZLluqVKhaQa34/1+5Ei9FAZtz+rbbvNQKY8JkSHI4fOwf21kUSqm+79vhR1xOaOClqPutdfcr4gP01vURUynZhaats/mhwVz/Rdw9m6GmkszxQnnZzHAR9s7UhMxpYJXwZoYHVsW4ppNoYKfcwJZ6+3E6EqzZLiVEjh7WzhOg+JG8TMapBHThnPwKbyRKBewBoS/oAtwypIYIOK+npMFBGuLLpQZp+dLggD7Cs30sPah6SuPqhW5p/4FHHcDytTC3zumA/poSkIWxRufVKI3aQ8soRQwY5E5y7vjbbLNRkVUYHIvlG/bt/xYLtudc6VdvX+xI0Ip8rV60/oCuzVbvc7vg5B1w9g4491iokGx7meF+LFGrtqKwosHWfRt35+S1xB95EsWCJlArKBpMoEwWZ8vV2AeiJybCu+3UrDuNXyvEpIShZhTeYuNiPb90qLbfSxny0IdscV56RLNuKUMyWCuGLbLSOuckeGX75vhMRd+hSy+w3yzhZBDeDSeCdlupEzhgi2g3xUgDCbCrXjQ60YUb09QA1SXudZo4moDamJ5nh2BzT6cpx8i9BggNSpzdsSJd5iMj40MNd4XVKWvuWGXK/YtJcxMbpTQnrzOZ5I0HNFWGnwKZLMcRzA5jMsEDP/YH7ReWi1I3oMXV+gAAAABJRU5ErkJggg=="},"5f2a":function(t,e,i){"use strict";var a=i("fbe9"),n=i.n(a);n.a},"9f4e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news-detail"},[i("div",{staticClass:"news-detail-header"},[i("div",{staticClass:"title xxl mb10"},[t._v(t._s(t.articleDetailObj.title))]),i("div",{staticClass:"row-between"},[i("div",{staticClass:"xs lighter"},[t._v("发布时间: "+t._s(t.articleDetailObj.create_time))]),i("div",{staticClass:"row"},[t._m(0),i("div",{staticClass:"ml5 muted xs"},[t._v(t._s(t.articleDetailObj.visit)+"人浏览")])])])]),i("div",{ref:"main",staticClass:"main",domProps:{innerHTML:t._s(t.articleDetailObj.content)}})])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"visit-icon"},[a("img",{attrs:{src:i("5b3a")}})])}],r=(i("4d63"),i("ac1f"),i("25f0"),i("5319"),i("aa2a")),s={name:"helpDetail",data:function(){return{currentId:0,articleDetailObj:{}}},methods:{$getArticleDetail:function(t){var e=this;Object(r["a"])(t).then((function(t){1==t.code&&(e.articleDetailObj=t.data,e.$nextTick((function(){e.$refs.main.children[0].style.width="100%",e.$refs.main.children[0].style.height="100%";var t=new RegExp("<img","gi");e.articleDetailObj.content=e.articleDetailObj.content.replace(t,'<img style="max-width: 100%; height: auto"')})))}))}},created:function(){this.currentId=this.$route.query.id,this.type=this.$route.query.type},mounted:function(){this.$getArticleDetail({type:this.type,id:this.currentId}),this.currentId=this.$route.query.id}},c=s,l=(i("5f2a"),i("2877")),u=Object(l["a"])(c,a,n,!1,null,"f44a5e86",null);e["default"]=u.exports},aa2a:function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return s}));var a=i("b775");function n(t){var e=t.type,i=parseInt(e)?"help/category":"article/category";return a["a"].get(i,{params:t})}function r(t){var e=t.type;delete t.type;var i=parseInt(e)?"help/lists":"article/lists";return a["a"].get(i,{params:t})}function s(t){var e=t.type,i=parseInt(e)?"help/detail":"article/detail";return a["a"].get(i,{params:{id:t.id}})}},fbe9:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0945edbd.a7fc949d.js.map