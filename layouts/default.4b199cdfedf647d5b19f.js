webpackJsonp([1],{"/Jub":function(t,a,e){"use strict";(function(t){a.a={data:function(){return{}},mounted:function(){this.navAni(),this.smallAni()},methods:{bgReplace:function(a){var e=t(a.currentTarget),s=e.css("background-image");e.addClass("active").siblings().removeClass("active"),t("#app,.hWrap").css("background-image",s)},colorTheme:function(a){for(var e="<style id='colorThemeTh' type=\"text/css\">",s=["#abtTxt h3, #banTxt, #btnDown, #btnThumbsUp, #contactBox .iptFocus label, #feNavBox h4, #footer em, .ft-color, #nav li:hover small, #themes i, .ysHov, a:hover,.fa-circle{color:","#DB_rightQuick li, #blogBox .more:hover, #btnMore:active, #btnMore:hover, #contactBox span:after, #headBg, #jobsBox .jobsItem>i, #logo h2,#paging .pagTxt:after, .plbtn,#skillBox .skillW,#worksBox .wTxt,#btnColor{background-color:","#round,#themes .active,.skill-list span{border:1px solid ","#navLine{border-right:3px solid ","#feNavBox a:hover .bdLine:after, #feNavBox a:hover .bdLine:before{border-left:1px solid ","#feNavBox h4{border-left:3px solid ","#feNavBox a:hover:after, #feNavBox a:hover:before{border-bottom:1px solid "],o=0;o<s.length;o++)e+=s[o]+t(a.currentTarget).val()+"}";e+="</style>",t("head").find("#colorThemeTh").remove().end().append(e)},colorThemeReset:function(){t("head").find("#colorThemeTh").remove()},popupTip:function(){alert("正在更新......，敬请期待^_^")},navAni:function(){var a=t("#nav>ul>li.cur"),e=a.position().top,s=(a.outerHeight(!0),t("#navLine")),o=t("#nav>ul>li:not('.last')"),n=t("#nav");s.stop(!0,!0).animate({top:e}),o.mouseenter(function(){var a=t(this),e=(a.outerHeight(!0),a.position().top);s.stop(!0,!0).animate({top:e},"fast")}),n.mouseleave(function(t,a){t=e,s.stop(!0,!0).animate({top:t},"fast")})},smallAni:function(){var a=t("#wrapNav");t("#nav li");t("#btnToggle").on("click",function(){var e=t(this);e.find("i");0==a.hasClass("navpos")?(e.addClass("btnActive"),a.addClass("navpos")):(e.removeClass("btnActive"),a.removeClass("navpos"))}),t("#nav a").click(function(){1==a.hasClass("navpos")&&(a.removeClass("navpos"),t("#btnToggle").removeClass("btnActive"))})},moveHotIn:function(a){t(a.currentTarget).find("em").addClass("shake animated")},moveHotOut:function(a){t(a.currentTarget).find("em").removeClass("shake animated")}}}}).call(a,e("7t+N"))},"6UQv":function(t,a,e){"use strict";var s=e("kE5N"),o=e("Tv3R");a.a={components:{spaMenu:s.a,spaFooter:o.a},beforeRouteUpdate:function(t,a,e){console.log(1)}}},DS8J:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"footer"},[s("div",{attrs:{id:"wrapFooter"}},[s("section",{staticClass:"container",attrs:{id:"footer"}},[s("h5",{staticClass:"copyright"},[s("p",[t._v("Copyright © "),s("span",{staticClass:"numFt"},[t._v("2016")]),t._v(" 个人版权所有")])])])]),s("div",{staticClass:"scrollGo",attrs:{id:"DB_rightQuick"}},[s("ul",[s("li",{attrs:{id:"goTop"}},[s("a",{attrs:{href:"javascript:;",title:"返回顶部"}},[s("i",{staticClass:"fa fa-angle-up fa-2x"}),s("span",[t._v("\n\t\t\t\t返回顶部\n\t\t\t")])])]),s("li",[s("a",{attrs:{href:"#",title:"扫一扫"}},[s("i",{staticClass:"fa fa-qrcode fa-2x"}),s("span",{attrs:{id:"qrCode"}},[s("img",{attrs:{src:e("bhA8")}}),s("em",[t._v("手机或iPad浏览")])])])])])])])}],n={render:s,staticRenderFns:o};a.a=n},KwiH:function(t,a,e){"use strict";(function(t){a.a={data:function(){return{show_gotop:!0}},mounted:function(){this.backTop()},destroyed:function(){t(window).off("scroll")},methods:{backTop:function(){var a=(t(".banner"),t("#goTop"));a.click(function(){return t("html,body").animate({scrollTop:0},800),!1})}}}}).call(a,e("7t+N"))},Ma2J:function(t,a,e){"use strict";function s(t){e("mx6w")}Object.defineProperty(a,"__esModule",{value:!0});var o=e("6UQv"),n=e("VWxc"),i=e("VU/8"),r=s,l=i(o.a,n.a,!1,r,null,null);a.default=l.exports},OsqA:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"#app{min-height:100%;position:relative;padding-bottom:43px}",""])},Tv3R:function(t,a,e){"use strict";var s=e("KwiH"),o=e("DS8J"),n=e("VU/8"),i=n(s.a,o.a,!1,null,null,null);a.a=i.exports},VWxc:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("spa-menu"),e("nuxt",{staticClass:"view",attrs:{id:"wrapPage"}}),e("spa-footer")],1)},o=[],n={render:s,staticRenderFns:o};a.a=n},bhA8:function(t,a,e){t.exports=e.p+"img/qrcode.605d5cf.png"},eTpM:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",[t._m(0),s("div",{staticClass:"wrapNav",attrs:{id:"wrapNav"}},[s("section",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/",id:"logo",title:"刘关化|个人简历|web前端工程师"}},[s("div",{attrs:{id:"round"}},[s("i",{staticClass:"fa fa-circle"})]),s("h2",[s("span",[t._v("前端\n\t\t"),s("br"),t._v("\n\t\t一枚")])]),s("img",{attrs:{src:e("ktGL"),alt:"刘关化|个人简历|web前端工程师"}})]),s("ul",[s("li",{staticClass:"cur"},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"fa fa-user fa-fw"}),t._v("关于"),s("span",[t._v("/")]),s("small",[t._v("me")])])],1),s("li",[s("div",{on:{mouseenter:t.moveHotIn,mouseleave:t.moveHotOut}},[s("router-link",{attrs:{to:"/works"}},[s("i",{staticClass:"fa fa-briefcase fa-fw"}),t._v("作品"),s("span",[t._v("/")]),s("small",[t._v("works")]),s("span",{staticClass:"hot"},[s("em")])])],1)]),s("li",[s("a",{attrs:{href:"javascript:;",id:"navLiThree"},on:{click:t.popupTip}},[s("i",{staticClass:"fa fa-pencil-square-o fa-fw"}),t._v("博客"),s("span",[t._v("/")]),s("small",[t._v("blog")])])]),s("li",[s("router-link",{attrs:{to:"/fenav"}},[s("i",{staticClass:"fa fa-th fa-fw"}),t._v("导航"),s("span",[t._v("/")]),s("small",[t._v("nav")])])],1),s("li",[s("router-link",{attrs:{to:"/contact"}},[s("i",{staticClass:"fa fa-phone fa-fw"}),t._v("联系"),s("span",[t._v("/")]),s("small",[t._v("contact")])])],1),s("div",{attrs:{id:"navLine"}})])],1),s("section",{staticClass:"clearfix tc",attrs:{id:"themes"}},[s("h5",[t._v("主题背景")]),s("div",{staticClass:"ilbk bgImg"},t._l(5,function(a,e){return s("button",{key:e,class:[{active:1==a}],on:{click:t.bgReplace}},[s("i",{staticClass:"fa fa-check"})])})),s("h5",[t._v("主题颜色")]),s("div",{staticClass:"tmBox ilbk"},[s("input",{attrs:{type:"color",name:"color",id:"changecolor",value:"#8697CB"},on:{change:t.colorTheme}}),s("button",{staticClass:"bgHov",attrs:{id:"btnColor"}},[t._v("\n\t\t更改\n\t\t")]),s("button",{staticClass:"bgHov",attrs:{id:"btnReset"},on:{click:t.colorThemeReset}},[t._v("\n\t\t重置\n\t\t")])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"clearfix",attrs:{id:"headBg"}},[e("button",{attrs:{id:"btnToggle"}},[e("span",[e("i")]),e("span",[e("i")]),e("span",[e("i")])])])}],n={render:s,staticRenderFns:o};a.a=n},kE5N:function(t,a,e){"use strict";var s=e("/Jub"),o=e("eTpM"),n=e("VU/8"),i=n(s.a,o.a,!1,null,null,null);a.a=i.exports},ktGL:function(t,a,e){t.exports=e.p+"img/logo.863afdf.jpg"},mx6w:function(t,a,e){var s=e("OsqA");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("f85e15c8",s,!0)}});
//# sourceMappingURL=default.4b199cdfedf647d5b19f.js.map