(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d703264"],{"399b":function(s,e,t){"use strict";t.d(e,"d",(function(){return i})),t.d(e,"e",(function(){return n})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return r}));var i={ALL:"all",PAY:"pay",DELIVERY:"delivery",FINISH:"finish",CLOSE:"close"},n={wechat:1,balance:3},o={REGISTER:"ZCYZ",FINDPWD:"ZHMM",LOGIN:"YZMDL",CHANGE_MOBILE:"YZMDL"},a={ALL:"all",RUNNING:"running",SUCCESS:"success",FAIL:"fail"},r={NORMAL:0,SUCCESS:1,FAIL:2}},"799c":function(s,e,t){"use strict";var i=t("d899"),n=t.n(i);n.a},b953:function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"register-container"},[t("div",{staticClass:"input-container"},[t("div",{staticClass:"input-item row"},[t("div",{staticClass:"input-label row md normal"},[s._v("手机号")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.mobile,expression:"mobile"}],staticClass:"input",attrs:{placeholder:"请输入手机号码"},domProps:{value:s.mobile},on:{input:function(e){e.target.composing||(s.mobile=e.target.value)}}})]),t("div",{staticClass:"input-item row"},[t("div",{staticClass:"input-label row md normal"},[s._v("短信验证码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.smsCode,expression:"smsCode"}],staticStyle:{width:"3.8rem"},attrs:{placeholder:"请输入"},domProps:{value:s.smsCode},on:{input:function(e){e.target.composing||(s.smsCode=e.target.value)}}}),t("button",{staticClass:"bd-primary sm primary br60 row-center",on:{click:function(e){return s.$sendSms()}}},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.canSendSms,expression:"canSendSms"}]},[s._v("获取验证码")]),t("van-count-down",{directives:[{name:"show",rawName:"v-show",value:!s.canSendSms,expression:"!canSendSms"}],ref:"countDown",attrs:{"auto-start":!1,time:s.time,format:" ss 秒"},on:{finish:s.countDownFinish},scopedSlots:s._u([{key:"default",fn:function(e){return[t("div",{staticClass:"seconds"},[s._v(s._s(e.seconds)+"秒")])]}}])})],1)]),t("div",{staticClass:"input-item row"},[t("div",{staticClass:"input-label row md normal"},[s._v("设置密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"6-20位数字+字母或符号组合"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]),t("div",{staticClass:"input-item row"},[t("div",{staticClass:"input-label row md normal"},[s._v("确认密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordConfirm,expression:"passwordConfirm"}],attrs:{type:"password",placeholder:"6-20位数字+字母或符号组合"},domProps:{value:s.passwordConfirm},on:{input:function(e){e.target.composing||(s.passwordConfirm=e.target.value)}}})])]),t("van-checkbox",{attrs:{"icon-size":"15px","checked-color":s.primaryColor},model:{value:s.isAgree,callback:function(e){s.isAgree=e},expression:"isAgree"}},[t("div",{staticClass:"xs"},[s._v("已阅读并同意《隐私协议》《会员章程》")])]),t("div",{staticClass:"btn white bg-primary br60",on:{click:s.$register}},[s._v(" 立即注册 ")])],1)},n=[],o=t("b562"),a=t("5f01"),r=t("399b"),c={name:"register",created:function(){},data:function(){return{isAgree:!1,mobile:"",smsCode:"",password:"",passwordConfirm:"",canSendSms:!0,time:6e4}},mounted:function(){},methods:{$register:function(){var s=this,e=this.isAgree,t=this.mobile,i=this.password,n=this.smsCode,r=this.passwordConfirm;if(t)if(n)if(i)if(i==r)if(e){var c={mobile:t,password:i,code:n,client:2};Object(o["l"])(c).then((function(e){1==e.code&&(s.$ls.set(a["a"],e.data.token),s.$toast({message:e.msg}),setTimeout((function(){s.goPage("login")}),1e3))}))}else this.$toast({message:"请阅读并同意《隐私协议》《会员章程》"});else this.$toast({message:"两次密码输入不一致"});else this.$toast({message:"请设置密码"});else this.$toast({message:"请填写短信验证码"});else this.$toast({message:"请填写手机号"})},countDownFinish:function(){this.$refs.countDown.reset(),this.canSendSms=!0},goPage:function(s){this.$router.push(s)},$sendSms:function(){var s=this;0!=this.canSendSms&&(this.mobile?Object(o["m"])({mobile:this.mobile,key:r["b"].REGISTER}).then((function(e){1==e.code&&(s.canSendSms=!1,s.$toast(e.msg),s.$refs.countDown.start())})):this.$toast("请填写手机号信息～"))}}},l=c,d=(t("799c"),t("2877")),m=Object(d["a"])(l,i,n,!1,null,"0f1c5e64",null);e["default"]=m.exports},d899:function(s,e,t){}}]);
//# sourceMappingURL=chunk-6d703264.392200df.js.map