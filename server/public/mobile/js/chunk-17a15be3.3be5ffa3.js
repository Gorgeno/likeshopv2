(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17a15be3"],{"43e6":function(t,e,s){"use strict";var c=s("dce8"),i=s.n(c);i.a},dce8:function(t,e,s){},e591:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAABkCAMAAACSAnNuAAAAV1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////+ORg7oAAAAHHRSTlMAECAwP0BPUF9gb3B/gI+Qn6CvsL/Az9Df4O/wQqu59AAAA/pJREFUaN7NmtmCqyAMQAPWWhdcwZX//8770GnH1qAscbx5xeWYjSQIYCXsdi9KKaXUWo9SyrYobhH8ndyKdtSoyDrj578/ylq9L2P9YCcC8KzXVtLeTyK4t9pe5vIEozxG7ShtTEuQORNorbUkjJTYi0BrrWsii/BW+8ucUSAksw6SPtggrNXBkgampF4TSB2StOJZk0jvD5FqKun55Qhaz9HlCJ4QtAhePhHN+moIhqZnlTKApNl50ZRzgKha0BB1ZJDIM5bkpaPBhJC/PqHDVhMnhBxD+PUqNhxmRAxidolQjjmDWCcvFKFbGxMzR+vAgG0Sy8cVCmP4CL8Ku8K+rEG/Un1cIg4p0YeMQQ75YQqA5JCSB+2hx8bGnfbzIyM8SVgy4PE/Hl/DLPKsnUcwfXw3mw/NJbWFOl03inWurQ/3pcS0d1kxdMZS/Q1RHtaO5urHKlnutJKP5/OleYcuGAAAr80Pabyj4vUOKeVBsyGl3C1Ce8+tglRC3IFKLKJTnfHeSVUijZ/CLmDoROxaQdF+f5V4lLKUDM0bIHoUpZRyfkZWUdz5nzAs4scCt1KiUZ5FJzO8CO71vDc+M2AMJFZ4psvycHgyZuycuJjio4S9Te/EOapiAMBq6+vn4ptBhHpCAgCQObVp41cEJ4EIEQBw6XpbyWzKKDsZmOcI63NspUIR/Dr2OaZxiIkZ6zy32RkP84Xa/xNSAmOkphbPHcI3MirMF5SoDJkXWVkV5pO3M3xPbxQHAIgRCnzlt3/wc+wEAEa8oWGTqdX5XmmC9i2FhBQ3mte4ElvV9+ZSlZsbceuV8aDtPVJDgzgpHmuNOQrfscEmj7DiOwOJ2VYPK0VErgwMSbAzMxrXvLLqPxxjo9sGxcoYrDfNKrcrazs1rqbAVFc+s39vOtPAVmbwhIgMjepYFgV+FGReiT0hvGLpYNjrCKEAoKdiqMALQlE2aMrvEONMBogWu56GkmEzqWHd5XoAgGS5ngGYup7Bpv2jHOBU2ImK3ZZVUTGk1jP0TSFHdhjJ/dSgm9AmcVUbH6hhEgbfGOkmm4g7rI8JKgYASTOcagzEFOJrsvCsfnKh1CZTTmdF5rs66rYzG/Yzeo0JR93IKPlV/y+5xQkQgSI6s0cqqyPa+BRveBblk+3ENzg0ckOOfE9cLawx0FsCoOtyl6m7Zb2xN8ch+MEydKZHIen1CHY1z8kIvj4x0P4ByzzKmQaoxXXGuSRAL5GTKrqT/kROprAETRSl03XOsNJFc7kiAICl5m1saZa9cp5WG0JtMsbQ5dGqkZwZnC8sToQQjVKVEHm8Gnv90Am4ULj6mgheIvliKCP/VBXd1cYAAIiaKYf/S/4B7VJH9897pzMAAAAASUVORK5CYII="},f2fa:function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"contact-offical"},[c("div",{staticClass:"header"}),c("div",{staticClass:"content column-center"},[c("div",{staticClass:"content-view column-center bg-white"},[c("img",{staticClass:"content-img",attrs:{src:t.server.image}}),c("div",{staticClass:"primary wechat-num lg"},[t._v("客服微信")]),c("div",{staticClass:"row-center copy-btn xxl white",on:{click:function(e){return t.onCopy(t.server.wechat)}}},[c("img",{staticClass:"mr5",staticStyle:{width:"32px",height:"25px"},attrs:{src:s("e591")}}),t._v(" 微信扫码添加 ")]),c("div",{staticClass:"mt20 normal xs",staticStyle:{"line-height":"35px"}},[t._v(t._s(t.server.time))]),c("div",{staticClass:"sm row",on:{click:function(e){return t.tipsShow()}}},[c("span",{staticStyle:{"line-height":"50px"}},[t._v("在线客服")])])]),c("div",{staticClass:"xs white",staticStyle:{"margin-top":"40px","line-height":"49px"}},[t._v(" 无法添加或疑难问题请联系工作人员 ")]),c("div",{staticClass:"row white"},[c("div",{staticClass:"xs",staticStyle:{"line-height":"49px"}},[t._v(t._s(t.server.phone))]),c("a",{staticClass:"ml10 phone-btn xs row-center white",attrs:{href:"tel:"+t.server.phone}},[t._v("拨打")]),c("div",{staticClass:"ml5 copy-phone-btn xs row-center",on:{click:function(e){return t.onCopy(t.server.phone)}}},[t._v("复制")])])])])},i=[],n=s("b562"),a={name:"contactOffical",data:function(){return{server:{}}},created:function(){this.$getService()},methods:{$getService:function(){var t=this;Object(n["h"])().then((function(e){1==e.code&&(t.server=e.data)}))},tipsShow:function(){this.$toast("该功能暂未开放")},onCopy:function(t){var e=document.createElement("input");e.setAttribute("value",t),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$toast({type:"success",message:"复制成功"})}}},r=a,o=(s("43e6"),s("2877")),l=Object(o["a"])(r,c,i,!1,null,"536f6b28",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-17a15be3.3be5ffa3.js.map