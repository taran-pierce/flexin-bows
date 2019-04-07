webpackHotUpdate("static/development/pages/better-body.js",{

/***/ "./components/Workout.js":
/*!*******************************!*\
  !*** ./components/Workout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WorkoutTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkoutTable */ "./components/WorkoutTable.js");
/* harmony import */ var _ImageCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageCard */ "./components/ImageCard.js");
var _jsxFileName = "/Users/wpierce/projects/flexin-bows/components/Workout.js";





var Workout = function Workout(props) {
  var data = props.data;
  var plans = props.data.workout;
  var toggleIcon = '+';

  if (props.showDesc) {
    toggleIcon = '&mdash';
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1265115918" + " " + "workout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1265115918",
    __self: this
  }, "h1.jsx-1265115918{background-color:#7c6f5e;margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-1265115918{float:right;}.workout.jsx-1265115918{padding:1rem;}.flex.jsx-1265115918{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-1265115918{width:50%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.workout-content.jsx-1265115918 p.jsx-1265115918{opacity:0;height:0;}.workout-content.active.jsx-1265115918 p.jsx-1265115918{opacity:1;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHb0MsQUFRYixBQUlDLEFBSUEsQUFNSCxBQUtBLEFBS0EsVUFURSxBQUtILEFBS0csRUF4QmQsQ0FJQSxNQWdCQSxHQUtBLEdBakNXLFNBQ0ssY0FDdUIsMEJBY2xCLE9BT3JCLElBcEJnQixjQUNoQiw0Q0FhbUIsK0RBQ25CIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3Jrb3V0VGFibGUgZnJvbSAnLi9Xb3Jrb3V0VGFibGUnXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gJy4vSW1hZ2VDYXJkJ1xuXG5jb25zdCBXb3Jrb3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXG4gIGNvbnN0IHBsYW5zID0gcHJvcHMuZGF0YS53b3Jrb3V0XG5cbiAgbGV0IHRvZ2dsZUljb24gPSAnKydcblxuICBpZiAocHJvcHMuc2hvd0Rlc2MpIHtcbiAgICB0b2dnbGVJY29uID0gJyZtZGFzaCdcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2B3b3Jrb3V0YH0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2ZjVlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogI2RmZDJjODtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmxleC1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0LWNvbnRlbnQgcCB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dC1jb250ZW50LmFjdGl2ZSBwIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B3b3Jrb3V0LWNvbnRlbnQgJHtwcm9wcy5zaG93RGVzYyA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICAgIDxoMT57ZGF0YS50aXRsZX0gPHNwYW4gaWQ9e2B0b2dnbGUtZGVzY2B9IGNsYXNzTmFtZT17YGNsb3NlYH0gb25DbGljaz17cHJvcHMub25DaGFuZ2V9Pnt0b2dnbGVJY29ufTwvc3Bhbj48L2gxPlxuICAgICAgICA8cD57ZGF0YS5jb250ZW50fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+PHN0cm9uZz5GcmVxdWVuY3k6IDwvc3Ryb25nPntkYXRhLmZyZXF1ZW5jeX08L3A+XG4gICAgICA8cD48c3Ryb25nPlRpbWU6IDwvc3Ryb25nPntkYXRhLnRpbWV9PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1pdGVtYH0+XG4gICAgICAgICAgPFdvcmtvdXRUYWJsZVxuICAgICAgICAgICAgcGxhbnM9e3BsYW5zfVxuICAgICAgICAgICAgYWN0aXZlVGFiPXtwcm9wcy5hY3RpdmVUYWJ9XG4gICAgICAgICAgICBvbldvcmtvdXRDbGljaz17cHJvcHMub25Xb3Jrb3V0Q2xpY2t9XG4gICAgICAgICAgICBvbkJvZHlQYXJ0Q2xpY2s9e3Byb3BzLm9uQm9keVBhcnRDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LWl0ZW1gfT5cbiAgICAgICAgICA8SW1hZ2VDYXJkIGltYWdlPXtwcm9wcy5pbWFnZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya291dCJdfQ== */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1265115918" + " " + "workout-content ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1265115918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, data.title, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-1265115918" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, toggleIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1265115918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1265115918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1265115918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1265115918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1265115918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1265115918" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1265115918" + " " + "flex-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plans: plans,
    activeTab: props.activeTab,
    onWorkoutClick: props.onWorkoutClick,
    onBodyPartClick: props.onBodyPartClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1265115918" + " " + "flex-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ })

})
//# sourceMappingURL=better-body.js.364e0a99a90b9b3737cb.hot-update.js.map