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

  var sizeIcon = '(Smaller Image)';

  if (props.imageSize == 'small') {
    sizeIcon = '(Larger Image)';
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-904296256" + " " + "workout ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "904296256",
    __self: this
  }, "h1.jsx-904296256{background-color:#7c6f5e;box-shadow:0 1px 2px rgba(0,0,0,.4);margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-904296256{float:right;}.workout.jsx-904296256{padding:1rem;}.flex.jsx-904296256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-904296256{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-transition:width .5s ease-in-out;transition:width .5s ease-in-out;}.flex-item.table.jsx-904296256{width:60%;}.flex-item.image.jsx-904296256{width:40%;}.workout.jsx-904296256 .workout-content.jsx-904296256{background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;opacity:0;padding:0 1rem;margin:0 0 1rem;max-height:0;}small.jsx-904296256{font-size:60%;padding-top:.5rem;}.workout.active.jsx-904296256 .workout-content.jsx-904296256{opacity:1;padding:1rem;max-height:600px;}.workout.active.jsx-904296256 h1.jsx-904296256{box-shadow:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmtCLEFBR29DLEFBU2IsQUFJQyxBQUlBLEFBTUQsQUFLRixBQUlBLEFBSXNCLEFBY2xCLEFBS0osQUFNTSxVQWhDbEIsQUFJQSxBQXVCZSxFQTlDZixDQUlBLENBcUNvQixFQVdwQixPQUxtQixFQXhEbUIsT0FvQ0osQUFlbEMsUUFNQSxxQkF4RFcsR0FvQzJCLE1BbkN0QixDQXFCbUIsR0FOZCxVQWRrQixnQkFzQ0YscUJBckNyQixjQUNoQixRQWFtQixFQU1uQiw2REFMQSxzSUF1QlksVUFDSyxlQUNDLGdCQUNILGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3dwaWVyY2UvcHJvamVjdHMvZmxleGluLWJvd3MvY29tcG9uZW50cy9Xb3Jrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmtvdXRUYWJsZSBmcm9tICcuL1dvcmtvdXRUYWJsZSdcbmltcG9ydCBJbWFnZUNhcmQgZnJvbSAnLi9JbWFnZUNhcmQnXG5cbmNvbnN0IFdvcmtvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcbiAgY29uc3QgcGxhbnMgPSBwcm9wcy5kYXRhLndvcmtvdXRcblxuICBsZXQgdG9nZ2xlSWNvbiA9ICcoU2hvdyBEZXNjcmlwdGlvbiknXG5cbiAgaWYgKHByb3BzLnNob3dEZXNjKSB7XG4gICAgdG9nZ2xlSWNvbiA9ICcoSGlkZSBEZXNjcmlwdGlvbiknXG4gIH1cblxuICBsZXQgc2l6ZUljb24gPSAnKFNtYWxsZXIgSW1hZ2UpJ1xuXG4gIGlmIChwcm9wcy5pbWFnZVNpemUgPT0gJ3NtYWxsJykge1xuICAgIHNpemVJY29uID0gJyhMYXJnZXIgSW1hZ2UpJ1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHdvcmtvdXQgJHtwcm9wcy5zaG93RGVzYyA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2ZjVlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6ICNkZmQyYzg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZsZXgtaXRlbSB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4LWl0ZW0udGFibGUge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleC1pdGVtLmltYWdlIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQgLndvcmtvdXQtY29udGVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQgLjVzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgLjVzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW07XG4gICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dC5hY3RpdmUgLndvcmtvdXQtY29udGVudCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQuYWN0aXZlIGgxIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxoMT57ZGF0YS50aXRsZX0gXG4gICAgICAgICAgPHNtYWxsIGlkPXtgdG9nZ2xlLWRlc2NgfSBjbGFzc05hbWU9e2BjbG9zZWB9IG9uQ2xpY2s9e3Byb3BzLm9uQ2hhbmdlfT57dG9nZ2xlSWNvbn08L3NtYWxsPlxuICAgICAgICAgIDxzbWFsbCBpZD17YHRvZ2dsZS1zaXplYH0gY2xhc3NOYW1lPXtgY2xvc2VgfSBvbkNsaWNrPXtwcm9wcy5vblNpemVDaGFuZ2V9PntzaXplSWNvbn08L3NtYWxsPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdvcmtvdXQtY29udGVudGB9PlxuICAgICAgICAgIDxwPjxzdHJvbmc+RnJlcXVlbmN5OiA8L3N0cm9uZz57ZGF0YS5mcmVxdWVuY3l9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+VGltZTogPC9zdHJvbmc+e2RhdGEudGltZX08L3A+XG4gICAgICAgICAgPHA+e2RhdGEuY29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1pdGVtIHRhYmxlYH0+XG4gICAgICAgICAgPFdvcmtvdXRUYWJsZVxuICAgICAgICAgICAgcGxhbnM9e3BsYW5zfVxuICAgICAgICAgICAgYWN0aXZlVGFiPXtwcm9wcy5hY3RpdmVUYWJ9XG4gICAgICAgICAgICBvbldvcmtvdXRDbGljaz17cHJvcHMub25Xb3Jrb3V0Q2xpY2t9XG4gICAgICAgICAgICBvbkJvZHlQYXJ0Q2xpY2s9e3Byb3BzLm9uQm9keVBhcnRDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LWl0ZW0gaW1hZ2VgfT5cbiAgICAgICAgICA8SW1hZ2VDYXJkIGltYWdlPXtwcm9wcy5pbWFnZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya291dCJdfQ== */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, data.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-904296256" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, toggleIcon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-size",
    onClick: props.onSizeChange,
    className: "jsx-904296256" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, sizeIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "workout-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "flex-item table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plans: plans,
    activeTab: props.activeTab,
    onWorkoutClick: props.onWorkoutClick,
    onBodyPartClick: props.onBodyPartClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "flex-item image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ })

})
//# sourceMappingURL=better-body.js.abe72bf8e682a403e497.hot-update.js.map