webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/layout/Menubar.tsx":
/*!*******************************************!*\
  !*** ./src/components/layout/Menubar.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/common */ "./src/components/common/index.tsx");
/* harmony import */ var _scripts_menus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @scripts/menus */ "./src/scripts/menus/index.ts");


var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/project/FrontEnd/resume/resume-gv/liuguanhua.github.io/src/components/layout/Menubar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Menubar = function Menubar() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      pathname = _useRouter.pathname;

  return __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, _scripts_menus__WEBPACK_IMPORTED_MODULE_6__["menuData"].map(function (_ref) {
    var path = _ref.path,
        title = _ref.title,
        icon = _ref.icon,
        enName = _ref.enName,
        isHot = _ref.isHot;
    var isBlog = Object.is(path, _scripts_menus__WEBPACK_IMPORTED_MODULE_6__["BLOG"]);

    var node = __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_common__WEBPACK_IMPORTED_MODULE_5__["SvgIcon"], {
      className: "mgr",
      width: 1.2,
      height: 1.2,
      component: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "m-l-xs vam",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, title, __jsx("span", {
      className: "m-l-r-xxs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, "/"), __jsx("small", {
      className: "font-family-niconne font-size-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, enName), isHot && __jsx("span", {
      className: "hot pos-rel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 19
      }
    }, __jsx("em", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }))));

    return __jsx("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        active: Object.is(pathname, path)
      }),
      key: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, [_scripts_menus__WEBPACK_IMPORTED_MODULE_6__["BLOG"], _scripts_menus__WEBPACK_IMPORTED_MODULE_6__["OPEN_SOURCE"]].includes(path) ? __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      href: isBlog ? '#' : 'https://github.com/liuguanhua'
    }, isBlog && {
      onClick: function onClick(e) {
        e.preventDefault();
        alert('功能开发中...，敬请期待^_^');
      }
    }, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }), node) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    }, node)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menubar);

/***/ })

})
//# sourceMappingURL=_app.js.1bc27cfbbbe66416be16.hot-update.js.map