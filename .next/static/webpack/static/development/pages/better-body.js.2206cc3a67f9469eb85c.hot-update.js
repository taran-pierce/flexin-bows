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
  var toggleIcon = '(Show Description)';

  if (props.showDesc) {
    toggleIcon = '(Hide Description)';
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-385456141" + " " + "workout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "385456141",
    __self: this
  }, "h1.jsx-385456141{background-color:#7c6f5e;box-shadow:0 1px 2px rgba(0,0,0,.4);margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-385456141{float:right;}.workout.jsx-385456141{padding:1rem;}.flex.jsx-385456141{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-385456141{width:50%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.workout-content.jsx-385456141{background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-transition:opacity .5s ease-in-out, max-height .5s ease-in-out;transition:opacity .5s ease-in-out, max-height .5s ease-in-out;opacity:0;padding:1rem;margin:0 0 1rem;max-height:0;}small.jsx-385456141{font-size:60%;padding-top:.5rem;}.workout-content.active.jsx-385456141{opacity:1;max-height:600px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHb0MsQUFTYixBQUlDLEFBSUEsQUFNSCxBQUtzQixBQVlsQixBQUtKLFVBckJFLEFBc0JLLEVBcENuQixDQUlBLENBMkJvQixXQXhDa0IsRUE4Q3RDLEtBbEJrQyxBQWFsQyw2QkF4Q1csR0E0QjJCLE1BM0J0QixJQWVLLE9BT3JCLEdBckJ1QyxnQkE0QkMscUJBM0J4QixjQUNoQixRQWFtQiwrREFDbkIsNEJBYVksVUFDRyxhQUNHLGdCQUNILGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3dwaWVyY2UvcHJvamVjdHMvZmxleGluLWJvd3MvY29tcG9uZW50cy9Xb3Jrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmtvdXRUYWJsZSBmcm9tICcuL1dvcmtvdXRUYWJsZSdcbmltcG9ydCBJbWFnZUNhcmQgZnJvbSAnLi9JbWFnZUNhcmQnXG5cbmNvbnN0IFdvcmtvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcbiAgY29uc3QgcGxhbnMgPSBwcm9wcy5kYXRhLndvcmtvdXRcblxuICBsZXQgdG9nZ2xlSWNvbiA9ICcoU2hvdyBEZXNjcmlwdGlvbiknXG5cbiAgaWYgKHByb3BzLnNob3dEZXNjKSB7XG4gICAgdG9nZ2xlSWNvbiA9ICcoSGlkZSBEZXNjcmlwdGlvbiknXG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgd29ya291dGB9PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdjNmY1ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjZGZkMmM4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5mbGV4LWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQtY29udGVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQgLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQtY29udGVudC5hY3RpdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgxPntkYXRhLnRpdGxlfSA8c21hbGwgaWQ9e2B0b2dnbGUtZGVzY2B9IGNsYXNzTmFtZT17YGNsb3NlYH0gb25DbGljaz17cHJvcHMub25DaGFuZ2V9Pnt0b2dnbGVJY29ufTwvc21hbGw+PC9oMT5cbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtgd29ya291dC1jb250ZW50ICR7cHJvcHMuc2hvd0Rlc2MgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgICAgIDxwPjxzdHJvbmc+RnJlcXVlbmN5OiA8L3N0cm9uZz57ZGF0YS5mcmVxdWVuY3l9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+VGltZTogPC9zdHJvbmc+e2RhdGEudGltZX08L3A+XG4gICAgICAgICAgPHA+e2RhdGEuY29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1pdGVtYH0+XG4gICAgICAgICAgPFdvcmtvdXRUYWJsZVxuICAgICAgICAgICAgcGxhbnM9e3BsYW5zfVxuICAgICAgICAgICAgYWN0aXZlVGFiPXtwcm9wcy5hY3RpdmVUYWJ9XG4gICAgICAgICAgICBvbldvcmtvdXRDbGljaz17cHJvcHMub25Xb3Jrb3V0Q2xpY2t9XG4gICAgICAgICAgICBvbkJvZHlQYXJ0Q2xpY2s9e3Byb3BzLm9uQm9keVBhcnRDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LWl0ZW1gfT5cbiAgICAgICAgICA8SW1hZ2VDYXJkIGltYWdlPXtwcm9wcy5pbWFnZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya291dCJdfQ== */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-385456141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, data.title, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-385456141" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, toggleIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-385456141" + " " + "workout-content ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-385456141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-385456141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-385456141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-385456141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-385456141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-385456141" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-385456141" + " " + "flex-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plans: plans,
    activeTab: props.activeTab,
    onWorkoutClick: props.onWorkoutClick,
    onBodyPartClick: props.onBodyPartClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-385456141" + " " + "flex-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ })

})
//# sourceMappingURL=better-body.js.2206cc3a67f9469eb85c.hot-update.js.map