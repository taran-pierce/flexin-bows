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

  if (!props.showDesc) {
    toggleIcon = '-';
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
  }, "h1.jsx-1265115918{background-color:#7c6f5e;margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-1265115918{float:right;}.workout.jsx-1265115918{padding:1rem;}.flex.jsx-1265115918{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-1265115918{width:50%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.workout-content.jsx-1265115918 p.jsx-1265115918{opacity:0;height:0;}.workout-content.active.jsx-1265115918 p.jsx-1265115918{opacity:1;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHb0MsQUFRYixBQUlDLEFBSUEsQUFNSCxBQUtBLEFBS0EsVUFURSxBQUtILEFBS0csRUF4QmQsQ0FJQSxNQWdCQSxHQUtBLEdBakNXLFNBQ0ssY0FDdUIsMEJBY2xCLE9BT3JCLElBcEJnQixjQUNoQiw0Q0FhbUIsK0RBQ25CIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3Jrb3V0VGFibGUgZnJvbSAnLi9Xb3Jrb3V0VGFibGUnXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gJy4vSW1hZ2VDYXJkJ1xuXG5jb25zdCBXb3Jrb3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXG4gIGNvbnN0IHBsYW5zID0gcHJvcHMuZGF0YS53b3Jrb3V0XG5cbiAgbGV0IHRvZ2dsZUljb24gPSAnKydcblxuICBpZiAoIXByb3BzLnNob3dEZXNjKSB7XG4gICAgdG9nZ2xlSWNvbiA9ICctJ1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHdvcmtvdXRgfT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YzZmNWU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjZGZkMmM4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5mbGV4LWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQtY29udGVudCBwIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0LWNvbnRlbnQuYWN0aXZlIHAge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHdvcmtvdXQtY29udGVudCAke3Byb3BzLnNob3dEZXNjID8gJ2FjdGl2ZScgOiAnJ31gfT5cbiAgICAgICAgPGgxPntkYXRhLnRpdGxlfSA8c3BhbiBpZD17YHRvZ2dsZS1kZXNjYH0gY2xhc3NOYW1lPXtgY2xvc2VgfSBvbkNsaWNrPXtwcm9wcy5vbkNoYW5nZX0+e3Byb3BzLnRvZ2dsZUljb259PC9zcGFuPjwvaDE+XG4gICAgICAgIDxwPntkYXRhLmNvbnRlbnR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD48c3Ryb25nPkZyZXF1ZW5jeTogPC9zdHJvbmc+e2RhdGEuZnJlcXVlbmN5fTwvcD5cbiAgICAgIDxwPjxzdHJvbmc+VGltZTogPC9zdHJvbmc+e2RhdGEudGltZX08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXhgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LWl0ZW1gfT5cbiAgICAgICAgICA8V29ya291dFRhYmxlXG4gICAgICAgICAgICBwbGFucz17cGxhbnN9XG4gICAgICAgICAgICBhY3RpdmVUYWI9e3Byb3BzLmFjdGl2ZVRhYn1cbiAgICAgICAgICAgIG9uV29ya291dENsaWNrPXtwcm9wcy5vbldvcmtvdXRDbGlja31cbiAgICAgICAgICAgIG9uQm9keVBhcnRDbGljaz17cHJvcHMub25Cb2R5UGFydENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgtaXRlbWB9PlxuICAgICAgICAgIDxJbWFnZUNhcmQgaW1hZ2U9e3Byb3BzLmltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3Jrb3V0Il19 */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
  }, props.toggleIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
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
//# sourceMappingURL=better-body.js.dd0f0f47c742e229bd38.hot-update.js.map