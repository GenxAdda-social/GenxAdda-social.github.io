(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54f1b721"],{"0798":function(t,e,i){"use strict";i("caad");var s=i("5530"),r=i("ade3"),n=(i("0c18"),i("10d2")),a=i("afdd"),o=i("9d26"),l=i("f2e7"),c=i("7560"),d=i("f40d"),h=i("58df"),u=i("d9bd");e["a"]=Object(h["a"])(n["a"],l["a"],d["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(r["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(u["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},"47de":function(t,e,i){t.exports=i.p+"img/world.a173521f.png"},"8b9c":function(t,e,i){"use strict";i("a9e3"),i("94aa");var s=i("2b0e"),r=s["default"].extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),n=i("58df"),a=Object(n["a"])(r);e["a"]=a.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=this.$refs.img;e&&(e.complete?(this.translate(),this.listeners()):e.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},i=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),s=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[i,s])}})},"94aa":function(t,e,i){},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},afdd:function(t,e,i){"use strict";var s=i("8336");e["a"]=s["a"]},db4f:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-parallax",{attrs:{height:"100%",src:i("47de")}},[s("v-container",[s("form",{on:{submit:function(e){return e.preventDefault(),t.ResetPassword(e)}}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-card",{staticClass:"ma-2 pa-5",attrs:{shaped:"",color:"","max-width":"500px"}},[s("v-card-title",[t._v("Reset Password")]),s("v-container",[t.error?s("v-alert",{attrs:{text:"",outlined:"",type:"error",dismissible:"",icon:"mdi-key"}},[t._v(t._s(t.error))]):t._e(),s("v-text-field",{attrs:{outlined:"",label:"email","prepend-inner-icon":"mdi-at",rounded:"",type:"text",name:"email",clearable:"",id:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-btn",{staticClass:"my-5 px-10",attrs:{color:"primary",type:"submit",rounded:"",href:"",link:""}},[t._v("Update Password")])],1)],1)],1)],1)])],1)},r=[],n=(i("ac1f"),i("466d"),i("5530")),a=i("2f62"),o={data:function(){return{email:"",error:""}},methods:Object(n["a"])(Object(n["a"])({},Object(a["b"])(["resetPassword","globalErrorHandler"])),{},{ResetPassword:function(){var t=this;if(this.email&&this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){var e={email:this.email};this.resetPassword(e).then((function(e){e.data&&e.data.success?t.$router.push({name:"verify-OTP-reset-password",params:{email:t.email}}):t.error=e.response.data.msg}))}else this.error="Please enter a valid email address."}}),mounted:function(){document.title="Reset Password - GenxAdda",console.clear()}},l=o,c=i("2877"),d=i("6544"),h=i.n(d),u=i("0798"),p=i("8336"),f=i("b0af"),m=i("99d9"),v=i("a523"),g=i("8b9c"),b=i("0fd9"),w=i("8654"),_=Object(c["a"])(l,s,r,!1,null,null,null);e["default"]=_.exports;h()(_,{VAlert:u["a"],VBtn:p["a"],VCard:f["a"],VCardTitle:m["c"],VContainer:v["a"],VParallax:g["a"],VRow:b["a"],VTextField:w["a"]})},f40d:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);
//# sourceMappingURL=chunk-54f1b721.e2c0cb64.js.map