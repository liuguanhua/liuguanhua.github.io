(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[19,112],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n(769);var a=n(770),r=n(0),l=n.n(r),c=n(408),o=n(42),i=Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(6),n.e(9),n.e(103)]).then(n.bind(null,410))})),u=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(4),n.e(3),n.e(100)]).then(n.bind(null,411))})),m=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(4),n.e(3),n.e(6),n.e(102)]).then(n.bind(null,416))})),s=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(4),n.e(3),n.e(101)]).then(n.bind(null,409))}));function d(){return l.a.createElement(a.a,{gutter:24},l.a.createElement(c.default,null),l.a.createElement(o.LazyRenderCompt,null,l.a.createElement(i,null)),l.a.createElement(o.LazyRenderCompt,null,l.a.createElement(u,null)),l.a.createElement(o.LazyRenderCompt,null,l.a.createElement(m,null)),l.a.createElement(o.LazyRenderCompt,null,l.a.createElement(s,null)))}},408:function(e,t,n){"use strict";n.r(t),n.d(t,"SkeletonList",(function(){return E})),n.d(t,"default",(function(){return P}));n(231);var a=n(7),r=n(10),l=n(18),c=(n(749),n(751)),o=n(0),i=n.n(o),u=n(1081),m=n.n(u),s=n(6),d=n(900),_=n(715),h=n.n(_),p=n(85),f=n(15),b=n(46),y=n(42);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var E=function(){return i.a.createElement(i.a.Fragment,null,w.map((function(e){return i.a.createElement(c.a,{key:e,sm:12,lg:12,xl:6,className:O},i.a.createElement("div",{"layout-align":"start center",className:"item-card bg-color-white"},i.a.createElement("div",{"layout-flex":"none"},i.a.createElement(y.BegetReactPlaceholder,{type:"round",style:{width:74,height:74,marginLeft:-8}})),i.a.createElement("div",{style:{paddingLeft:"10%"}},i.a.createElement(y.BegetReactPlaceholder,{type:"textRow",style:{width:124,height:34,marginTop:0}}),i.a.createElement(y.BegetReactPlaceholder,{type:"textRow",style:{width:64,height:20}}))))})))},O=h.a.grid_item,j=h.a.grid_inside,w=["shopping","pay-circle","user","eye"];function P(){var e=Object(b.useFetchStage)(),t=e.loading,n=e.hideLoading,u=Object(o.useState)([]),_=Object(l.a)(u,2),h=_[0],P=_[1],v=Object(o.useCallback)((function(){Object(p.getMallCountQuantity)().then((function(e){Object(s.isArray)(e)&&(e=e.map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{icon:w[t],start:d.Random.natural(800,1e3)})})),P(e),n())}))}),[]);return Object(o.useEffect)((function(){v()}),[]),i.a.createElement(y.CoverWaitContent,{loading:t,loadingPlaceholder:i.a.createElement(E,null)},h.map((function(e){var t=e.num,n=e.name,r=e.start,l=e.icon;return i.a.createElement(c.a,{key:n,sm:12,lg:12,xl:6,className:O},i.a.createElement("div",{"layout-align":"start center",className:"item-card ".concat(j)},l&&i.a.createElement(a.a,{type:l}),i.a.createElement("div",null,i.a.createElement("h2",null,i.a.createElement(m.a,{start:r,end:t,formattingFn:function(e){return Object(f.numToThousands)(e)}})),i.a.createElement("h3",null,n))))})))}},715:function(e,t,n){e.exports={grid_item:"home_grid_item__zDmhQ",grid_inside:"home_grid_inside__3lZna",stats_head:"home_stats_head__1cSNZ",card_tab:"home_card_tab__35OlM",home_sales_table:"home_home_sales_table__2c9ba",comment_content:"home_comment_content__341GK",product_buy_record:"home_product_buy_record__1plVw",sales_front_wrapper:"home_sales_front_wrapper__3Jx5L"}}}]);