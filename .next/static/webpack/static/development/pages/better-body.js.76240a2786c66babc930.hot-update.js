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
    className: "jsx-2765798724" + " " + "workout ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2765798724",
    __self: this
  }, "h1.jsx-2765798724{background-color:#7c6f5e;box-shadow:0 1px 2px rgba(0,0,0,.4);margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-2765798724{float:right;}.workout.jsx-2765798724{padding:1rem;}.flex.jsx-2765798724{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-2765798724{width:50%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.workout.jsx-2765798724 .workout-content.jsx-2765798724{background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out;transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out;opacity:0;padding:0 1rem;margin:0 0 1rem;max-height:0;}small.jsx-2765798724{font-size:60%;padding-top:.5rem;}.workout.active.jsx-2765798724 .workout-content.jsx-2765798724{opacity:1;padding:1rem;max-height:600px;}.workout.active.jsx-2765798724 h1.jsx-2765798724{box-shadow:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHb0MsQUFTYixBQUlDLEFBSUEsQUFNSCxBQUtzQixBQWFsQixBQUtKLEFBTU0sVUE1QkosQUF1QkMsRUFyQ2YsQ0FJQSxDQTRCb0IsRUFXcEIsT0FMbUIsRUEvQ21CLE9BNEJKLEFBY2xDLFFBTUEscUJBL0NXLEdBNEIyQixNQTNCdEIsSUFlSyxPQU9yQixHQXJCdUMsZ0JBNkJDLHFCQTVCeEIsY0FDaEIsUUFhbUIsK0RBQ25CLG9GQWNZLFVBQ0ssZUFDQyxnQkFDSCxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3Jrb3V0VGFibGUgZnJvbSAnLi9Xb3Jrb3V0VGFibGUnXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gJy4vSW1hZ2VDYXJkJ1xuXG5jb25zdCBXb3Jrb3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXG4gIGNvbnN0IHBsYW5zID0gcHJvcHMuZGF0YS53b3Jrb3V0XG5cbiAgbGV0IHRvZ2dsZUljb24gPSAnKFNob3cgRGVzY3JpcHRpb24pJ1xuXG4gIGlmIChwcm9wcy5zaG93RGVzYykge1xuICAgIHRvZ2dsZUljb24gPSAnKEhpZGUgRGVzY3JpcHRpb24pJ1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHdvcmtvdXQgJHtwcm9wcy5zaG93RGVzYyA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2ZjVlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6ICNkZmQyYzg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZsZXgtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dCAud29ya291dC1jb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodCAuNXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdyAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0LmFjdGl2ZSAud29ya291dC1jb250ZW50IHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dC5hY3RpdmUgaDEge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgxPntkYXRhLnRpdGxlfSA8c21hbGwgaWQ9e2B0b2dnbGUtZGVzY2B9IGNsYXNzTmFtZT17YGNsb3NlYH0gb25DbGljaz17cHJvcHMub25DaGFuZ2V9Pnt0b2dnbGVJY29ufTwvc21hbGw+PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3b3Jrb3V0LWNvbnRlbnRgfT5cbiAgICAgICAgICA8cD48c3Ryb25nPkZyZXF1ZW5jeTogPC9zdHJvbmc+e2RhdGEuZnJlcXVlbmN5fTwvcD5cbiAgICAgICAgICA8cD48c3Ryb25nPlRpbWU6IDwvc3Ryb25nPntkYXRhLnRpbWV9PC9wPlxuICAgICAgICAgIDxwPntkYXRhLmNvbnRlbnR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgtaXRlbWB9PlxuICAgICAgICAgIDxXb3Jrb3V0VGFibGVcbiAgICAgICAgICAgIHBsYW5zPXtwbGFuc31cbiAgICAgICAgICAgIGFjdGl2ZVRhYj17cHJvcHMuYWN0aXZlVGFifVxuICAgICAgICAgICAgb25Xb3Jrb3V0Q2xpY2s9e3Byb3BzLm9uV29ya291dENsaWNrfVxuICAgICAgICAgICAgb25Cb2R5UGFydENsaWNrPXtwcm9wcy5vbkJvZHlQYXJ0Q2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1pdGVtYH0+XG4gICAgICAgICAgPEltYWdlQ2FyZCBpbWFnZT17cHJvcHMuaW1hZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtvdXQiXX0= */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2765798724",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, data.title, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-2765798724" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, toggleIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2765798724" + " " + "workout-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2765798724",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-2765798724",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2765798724",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-2765798724",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2765798724",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2765798724" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2765798724" + " " + "flex-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plans: plans,
    activeTab: props.activeTab,
    onWorkoutClick: props.onWorkoutClick,
    onBodyPartClick: props.onBodyPartClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2765798724" + " " + "flex-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ })

})
//# sourceMappingURL=better-body.js.76240a2786c66babc930.hot-update.js.map