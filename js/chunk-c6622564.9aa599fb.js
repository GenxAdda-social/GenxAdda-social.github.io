(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6622564"],{"3f43":function(t,a,s){"use strict";var i=s("ca7e"),e=s.n(i);e.a},4643:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("v-card-title",[t._v("Watch Later")]),s("v-card-subtitle",[t._v("List of your saved contents.")]),t.loading?s("div",{staticClass:"post_loading mx-3 loading-bg"},[s("div",{staticClass:"cvd7vsds7vdscsc"},[s("div",{staticClass:"cvd7vsds7vds"},[s("div",{staticClass:"loading-animation",staticStyle:{width:"50px",height:"50px","border-radius":"50px"}}),s("div",[s("div",{staticClass:"loading-animation ml-2",staticStyle:{width:"160px",height:"15px","border-radius":"15px"}}),s("div",{staticClass:"loading-animation ma-2",staticStyle:{width:"130px",height:"15px","border-radius":"15px"}})])]),s("div",[s("div",{staticClass:"loading-animation",staticStyle:{width:"40px",height:"40px","border-radius":"40px"}})])]),s("div",{staticClass:"cascasc78asc"},[s("div",{staticClass:"loading-animation",staticStyle:{width:"100px",height:"30px","border-radius":"20px"}}),s("div",{staticClass:"loading-animation",staticStyle:{width:"100px",height:"30px","border-radius":"20px"}}),s("div",{staticClass:"loading-animation",staticStyle:{width:"100px",height:"30px","border-radius":"20px"}})])]):t.err?s("v-card",{staticClass:"box-shadow",staticStyle:{"border-radius":"20px"}},[s("v-card-subtitle",{staticClass:"pa-6 text-center"},[t._v(t._s(t.err))])],1):s("Posts",{attrs:{posts:t.postsById}})],1)},e=[],r=(s("96cf"),s("1da1")),n=s("5530"),d=s("bc3a"),c=s.n(d),o=s("2f62"),l=s("16cf"),u={data:function(){return{err:null,loading:!0}},components:{Posts:l["a"]},computed:Object(o["c"])(["postsById","user"]),methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["getpostsbyID","globalErrorHandler"])),{},{getsavedPosts:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c.a.get("".concat(t.$API,"/playlists/watchlater")).then((function(a){var s=a.data.watchlater;if(s.user_id==t.user._id){var i=s.saved_posts.length;i<=0&&(t.err="No posts saved in Watch Later.");for(var e=0;e<i;e++)t.getpostsbyID(s.saved_posts[e]);t.loading=!1}})).catch((function(a){t.globalErrorHandler(a)}));case 2:case"end":return a.stop()}}),a)})))()}}),mounted:function(){console.clear()},created:function(){this.getsavedPosts(),document.title="Watch Later - GenxAdda"}},p=u,v=(s("3f43"),s("2877")),h=s("6544"),g=s.n(h),b=s("b0af"),x=s("99d9"),f=s("a523"),m=Object(v["a"])(p,i,e,!1,null,null,null);a["default"]=m.exports;g()(m,{VCard:b["a"],VCardSubtitle:x["b"],VCardTitle:x["c"],VContainer:f["a"]})},ca7e:function(t,a,s){}}]);
//# sourceMappingURL=chunk-c6622564.9aa599fb.js.map