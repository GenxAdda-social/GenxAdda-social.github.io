(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-354df145"],{"0857":function(t,i,a){},"3ef4":function(t,i,a){"use strict";var n=a("0857"),s=a.n(n);s.a},"58b9":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-container",[a("v-card-title",[t._v("Trending")]),a("v-card-subtitle",[t._v("Top 10 posts of the day.")]),a("Posts",{attrs:{posts:t.trendingPosts}}),t.loading?a("div",{staticClass:"post_loading mx-3 loading-bg"},[a("div",{staticClass:"cvd7vsds7vdscsc"},[a("div",{staticClass:"cvd7vsds7vds"},[a("div",{staticClass:"loading-animation",staticStyle:{width:"50px",height:"50px","border-radius":"50px"}}),a("div",[a("div",{staticClass:"loading-animation ml-2",staticStyle:{width:"160px",height:"15px","border-radius":"15px"}}),a("div",{staticClass:"loading-animation ma-2",staticStyle:{width:"130px",height:"15px","border-radius":"15px"}})])]),a("div",[a("div",{staticClass:"loading-animation",staticStyle:{width:"40px",height:"40px","border-radius":"40px"}})])]),a("div",{staticClass:"cascasc78asc"},[a("div",{staticClass:"loading-animation",staticStyle:{width:"100px",height:"30px","border-radius":"20px"}}),a("div",{staticClass:"loading-animation",staticStyle:{width:"100px",height:"30px","border-radius":"20px"}}),a("div",{staticClass:"loading-animation",staticStyle:{width:"100px",height:"30px","border-radius":"20px"}})])]):t._e()],1)},s=[],e=(a("96cf"),a("1da1")),d=a("5530"),r=a("bc3a"),o=a.n(r),c=a("16cf"),l=a("2f62"),u={data:function(){return{loading:!0,trendingPosts:[]}},components:{Posts:c["a"]},methods:Object(d["a"])(Object(d["a"])({},Object(l["b"])(["globalErrorHandler"])),{},{getTrending:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,o.a.get("".concat(t.$API,"/posts/trending")).then((function(i){t.trendingPosts=i.data.trendingPosts})).catch((function(i){t.globalErrorHandler(i)}));case 2:t.loading=!1;case 3:case"end":return i.stop()}}),i)})))()}}),mounted:function(){console.clear()},created:function(){document.title="Trending - GenxAdda",this.getTrending()}},g=u,p=(a("3ef4"),a("2877")),h=a("6544"),v=a.n(h),x=a("99d9"),b=a("a523"),f=Object(p["a"])(g,n,s,!1,null,null,null);i["default"]=f.exports;v()(f,{VCardSubtitle:x["b"],VCardTitle:x["c"],VContainer:b["a"]})}}]);
//# sourceMappingURL=chunk-354df145.c630022e.js.map