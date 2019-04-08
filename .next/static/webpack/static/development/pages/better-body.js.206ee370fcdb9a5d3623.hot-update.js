webpackHotUpdate("static/development/pages/better-body.js",{

/***/ "./pages/better-body.js":
/*!******************************!*\
  !*** ./pages/better-body.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _data_programs_better_body_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/programs/better-body.json */ "./data/programs/better-body.json");
var _data_programs_better_body_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/programs/better-body.json */ "./data/programs/better-body.json", 1);






var _jsxFileName = "/Users/wpierce/projects/flexin-bows/pages/better-body.js";




var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Page, _React$Component);

  function Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).call(this, props)); // TODO how do I get this first activeTab by default

    _this.state = {
      activeTab: 'better-body-M-W-F',
      image: '/static/images/exercises/edited/bench-press-horizontal.jpg',
      value: '',
      showDesc: 1,
      imageSize: 'small'
    };
    _this.onWorkoutClick = _this.onWorkoutClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onBodyPartClick = _this.onBodyPartClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSizeChange = _this.onSizeChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  } // TODO name this better
  // toggles desc of work


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();

      if (this.state.showDesc) {
        this.setState({
          showDesc: 0
        });
      } else {
        this.setState({
          showDesc: 1
        });
      }
    }
  }, {
    key: "onSizeChange",
    value: function onSizeChange(event) {
      event.preventDefault();

      if (this.state.imageSize === 'large') {
        this.setState({
          imageSize: 'small'
        });
      }

      if (this.state.imageSize === 'small') {
        this.setState({
          imageSize: 'large'
        });
      }
    }
  }, {
    key: "onBodyPartClick",
    value: function onBodyPartClick(event) {
      event.preventDefault();
      var fileName = "/static/images/exercises/edited/".concat(event.target.dataset.file, ".jpg");
      this.setState({
        image: fileName
      });
    }
  }, {
    key: "onWorkoutClick",
    value: function onWorkoutClick(event) {
      event.preventDefault();
      var id = event.target.dataset.id;
      this.setState({
        activeTab: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: _data_programs_better_body_json__WEBPACK_IMPORTED_MODULE_8__,
        activeTab: this.state.activeTab,
        onChange: this.onChange,
        showDesc: this.state.showDesc,
        onWorkoutClick: this.onWorkoutClick,
        onBodyPartClick: this.onBodyPartClick,
        image: this.state.image,
        onSizeChange: this.onSizeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      });
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=better-body.js.206ee370fcdb9a5d3623.hot-update.js.map