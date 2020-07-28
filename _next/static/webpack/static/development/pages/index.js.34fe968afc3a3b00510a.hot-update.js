webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/assets/images/logo sync recursive ^\\.\\/.*\\.jpg$":
/*!***************************************************!*\
  !*** ./src/assets/images/logo sync ^\.\/.*\.jpg$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bwj.jpg": "./src/assets/images/logo/bwj.jpg",
	"./hzsj副本.jpg": "./src/assets/images/logo/hzsj副本.jpg",
	"./rzlt.jpg": "./src/assets/images/logo/rzlt.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/logo sync recursive ^\\.\\/.*\\.jpg$";

/***/ }),

/***/ "./src/assets/images/logo/hzsj.jpg":
false

})
//# sourceMappingURL=index.js.34fe968afc3a3b00510a.hot-update.js.map