(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[52],{405:function(e,t,n){"use strict";n.r(t),n.d(t,"productSalesColumn",(function(){return s})),n.d(t,"clientBuyColumn",(function(){return f})),n.d(t,"areaBuyColumn",(function(){return p})),n.d(t,"supplierGoodsColumn",(function(){return b})),n.d(t,"salesManColumn",(function(){return d})),n.d(t,"tableRowRecord",(function(){return y}));var r=n(88),o=(n(894),n(898)),a=n(0),l=n.n(a),i=n(900),c=n(15),u=function(e){return Object(c.numToThousands)(e)},s=Object(c.begetColunmKey)([{dataIndex:"goodsName",title:"\u5546\u54c1\u540d\u79f0"},{dataIndex:"price",title:"\u5355\u4ef7"},{dataIndex:"quantity",title:"\u6570\u91cf"},{dataIndex:"sales",title:"\u9500\u552e\u989d",render:u}]),f=Object(c.begetColunmKey)([{dataIndex:"clientName",title:"\u5ba2\u6237\u540d\u79f0"},{dataIndex:"orderQuantity",title:"\u8ba2\u5355\u6570\u91cf"},{dataIndex:"sales",title:"\u9500\u552e\u989d",render:u}]),p=Object(c.begetColunmKey)([{dataIndex:"areaName",title:"\u5730\u533a\u540d\u79f0"},{dataIndex:"orderQuantity",title:"\u8ba2\u5355\u6570\u91cf"},{dataIndex:"sales",title:"\u9500\u552e\u989d",render:u}]),b=Object(c.begetColunmKey)([{dataIndex:"supplierName",title:"\u4f9b\u5e94\u5546\u540d\u79f0"},{dataIndex:"type",title:"\u7c7b\u522b"},{dataIndex:"salesVolume",title:"\u9500\u91cf"},{dataIndex:"sales",title:"\u9500\u552e\u989d",render:u}]),d=Object(c.begetColunmKey)([{dataIndex:"salesManName",title:"\u4e1a\u52a1\u5458\u540d\u79f0"},{dataIndex:"sales",title:"\u9500\u552e\u989d",render:u}]),y={pageIndex:1},m=Object(i.mock)(Object(c.generateNumList)(3).map((function(){return"@color"}))),h=function(e,t,n){return n<=2&&Object.is(y.pageIndex,1)?l.a.createElement(o.a,{style:{margin:0},color:m[n]},e):e},g=[s,f,p,b,d].map((function(e){return[{dataIndex:"ranking",title:"\u6392\u540d",render:h,align:"center"}].concat(Object(r.a)(e),[{dataIndex:"operate",title:"\u64cd\u4f5c",width:85,render:function(){return l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"\u67e5\u770b\u8be6\u60c5")},align:"center"}])}));t.default=g},872:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(33),o=Object(r.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},894:function(e,t,n){"use strict";n(32),n(895)},895:function(e,t,n){},898:function(e,t,n){"use strict";var r=n(0),o=n(2),a=n.n(o),l=n(19),i=n(11),c=n(7),u=n(51);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,y(t).apply(this,arguments))).handleClick=function(){var t=e.props,n=t.checked,r=t.onChange;r&&r(!n)},e.renderCheckableTag=function(t){var n,o=t.getPrefixCls,l=e.props,i=l.prefixCls,c=l.className,u=l.checked,s=h(l,["prefixCls","className","checked"]),b=o("tag",i),d=a()(b,(p(n={},"".concat(b,"-checkable"),!0),p(n,"".concat(b,"-checkable-checked"),u),n),c);return delete s.onChange,r.createElement("span",f({},s,{className:d,onClick:e.handleClick}))},e}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement(u.a,null,this.renderCheckableTag)}}])&&b(n.prototype,o),l&&b(n,l),t}(r.Component),v=n(872),O=n(14),C=n(239);function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},T=new RegExp("^(".concat(v.a.join("|"),")(-inverse)?$")),_=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=P(this,I(t).call(this,e))).state={visible:!0},n.handleIconClick=function(e){n.setVisible(!1,e)},n.renderTag=function(e){var t=n.props,o=t.children,a=E(t,["children"]),i="onClick"in a||o&&"a"===o.type,c=Object(l.a)(a,["onClose","afterClose","color","visible","closable","prefixCls"]);return i?r.createElement(C.a,null,r.createElement("span",k({},c,{className:n.getTagClassName(e),style:n.getTagStyle()}),o,n.renderCloseIcon())):r.createElement("span",k({},c,{className:n.getTagClassName(e),style:n.getTagStyle()}),o,n.renderCloseIcon())},Object(O.a)(!("afterClose"in e),"Tag","'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."),n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,i=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(o=[{key:"getTagStyle",value:function(){var e=this.props,t=e.color,n=e.style,r=this.isPresetColor();return k({backgroundColor:t&&!r?t:void 0},n)}},{key:"getTagClassName",value:function(e){var t,n=e.getPrefixCls,r=this.props,o=r.prefixCls,l=r.className,i=r.color,c=this.state.visible,u=this.isPresetColor(),s=n("tag",o);return a()(s,(w(t={},"".concat(s,"-").concat(i),u),w(t,"".concat(s,"-has-color"),i&&!u),w(t,"".concat(s,"-hidden"),!c),t),l)}},{key:"setVisible",value:function(e,t){var n=this.props,r=n.onClose,o=n.afterClose;r&&r(t),o&&!r&&o(),t.defaultPrevented||"visible"in this.props||this.setState({visible:e})}},{key:"isPresetColor",value:function(){var e=this.props.color;return!!e&&T.test(e)}},{key:"renderCloseIcon",value:function(){return this.props.closable?r.createElement(c.a,{type:"close",onClick:this.handleIconClick}):null}},{key:"render",value:function(){return r.createElement(u.a,null,this.renderTag)}}])&&x(n.prototype,o),i&&x(n,i),t}(r.Component);_.CheckableTag=g,_.defaultProps={closable:!1},Object(i.polyfill)(_);t.a=_}}]);