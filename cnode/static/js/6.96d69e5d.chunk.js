webpackJsonp([6],{319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"UserLogin",function(){return u}),n.d(t,"NotLogin",function(){return l}),n.d(t,"DetectLogin",function(){return f}),n.d(t,"LoadLoop",function(){return p}),n.d(t,"LoadFail",function(){return m}),n.d(t,"NotResult",function(){return b});var a=n(32),s=n(70),c=(n(41),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),u=function(t){function n(e){o(this,n);var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={btnval:"\u767b\u5f55"},t.loginSubmit=t.loginSubmit.bind(t),t}return i(n,t),c(n,[{key:"enterSumit",value:function(e){Object.is(e.keyCode,13)&&this.loginSubmit()}},{key:"loginSubmit",value:function(){var e=this,t=this.refs.userToken.value;if(!t)return this.$showMsg("\u4eb2,token\u4e0d\u80fd\u4e3a\u7a7a!");this.setState({btnval:"\u767b\u5f55\u4e2d..."}),this.$request({method:"post",url:"accesstoken",data:{accesstoken:t},success:function(n){n.success?(e.$showMsg("\u767b\u5f55\u6210\u529f!"),n.accesstoken=t,Object(s.b)("saveUser",n),e.props.history.push({pathname:"/user",search:"?name="+n.loginname})):(e.$showMsg("\u767b\u5f55\u5931\u8d25!"),e.setState({btnval:"\u767b\u5f55"}))},error:function(){e.$showMsg("\u767b\u5f55\u5931\u8d25!"),e.setState({btnval:"\u767b\u5f55"})}})}},{key:"render",value:function(){return e.createElement("div",{className:"user-login-form"},e.createElement("div",{className:"ipt-row"},e.createElement("input",{ref:"userToken",className:"bd-radius bd-none pdl",type:"text",name:"user-token",onKeyDown:this.enterSumit.bind(this),placeholder:"Access Token"})),e.createElement("div",{className:"ipt-row"},e.createElement("input",{className:"bd-radius bg-color ft-white bd-none",type:"submit",value:this.state.btnval,onClick:this.loginSubmit,name:"btn-submit"})))}}]),n}(e.Component),l=function(t){return e.createElement("div",{className:"not-login-wrap tc"},t.isLogo&&e.createElement("img",{className:"not-login-photo",src:n(330),alt:""}),e.createElement("h2",{"data-layout-align":"center center","data-layout":"layout"},"\u8fd8\u672a\u767b\u5f55\uff0c\u73b0\u5728\u5c31\u53bb",e.createElement(a.b,{className:"ft-color",to:"/user/login"},"\u767b\u5f55")))};l.defaultProps={isLogo:!0};var f=function(t){return function(n){function a(e){return o(this,a),r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return i(a,n),c(a,[{key:"render",value:function(){return this.$userExp()?e.createElement(t.realuser,this.props):e.createElement(l,null)}}]),a}(e.Component)},p=function(){return e.createElement("div",{className:"tc pdtb"},"\u73a9\u547d\u52a0\u8f7d\u4e2d...")},m=function(){return e.createElement("div",{className:"tc pdtb"},"\u52a0\u8f7d\u5931\u8d25!")},b=function(t){return e.createElement("div",{className:"tc pdtb"},t.text)};b.defaultProps={text:"\u6682\u65e0\u6570\u636e!"}}.call(t,n(0))},330:function(e,t,n){e.exports=n.p+"static/media/logo.3bd6cd42.png"}});
//# sourceMappingURL=6.96d69e5d.chunk.js.map