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

  if (props.imageSize === 'small') {
    sizeIcon = '(Larger Image)';
  }

  if (props.imageSize === 'large') {
    sizeIcon = '(Smaller Image)';
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-904296256" + " " + "workout ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "904296256",
    __self: this
  }, "h1.jsx-904296256{background-color:#7c6f5e;box-shadow:0 1px 2px rgba(0,0,0,.4);margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-904296256{float:right;}.workout.jsx-904296256{padding:1rem;}.flex.jsx-904296256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-904296256{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-transition:width .5s ease-in-out;transition:width .5s ease-in-out;}.flex-item.table.jsx-904296256{width:60%;}.flex-item.image.jsx-904296256{width:40%;}.workout.jsx-904296256 .workout-content.jsx-904296256{background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;opacity:0;padding:0 1rem;margin:0 0 1rem;max-height:0;}small.jsx-904296256{font-size:60%;padding-top:.5rem;}.workout.active.jsx-904296256 .workout-content.jsx-904296256{opacity:1;padding:1rem;max-height:600px;}.workout.active.jsx-904296256 h1.jsx-904296256{box-shadow:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR29DLEFBU2IsQUFJQyxBQUlBLEFBTUQsQUFLRixBQUlBLEFBSXNCLEFBY2xCLEFBS0osQUFNTSxVQWhDbEIsQUFJQSxBQXVCZSxFQTlDZixDQUlBLENBcUNvQixFQVdwQixPQUxtQixFQXhEbUIsT0FvQ0osQUFlbEMsUUFNQSxxQkF4RFcsR0FvQzJCLE1BbkN0QixDQXFCbUIsR0FOZCxVQWRrQixnQkFzQ0YscUJBckNyQixjQUNoQixRQWFtQixFQU1uQiw2REFMQSxzSUF1QlksVUFDSyxlQUNDLGdCQUNILGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3dwaWVyY2UvcHJvamVjdHMvZmxleGluLWJvd3MvY29tcG9uZW50cy9Xb3Jrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmtvdXRUYWJsZSBmcm9tICcuL1dvcmtvdXRUYWJsZSdcbmltcG9ydCBJbWFnZUNhcmQgZnJvbSAnLi9JbWFnZUNhcmQnXG5cbmNvbnN0IFdvcmtvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcbiAgY29uc3QgcGxhbnMgPSBwcm9wcy5kYXRhLndvcmtvdXRcblxuICBsZXQgdG9nZ2xlSWNvbiA9ICcoU2hvdyBEZXNjcmlwdGlvbiknXG5cbiAgaWYgKHByb3BzLnNob3dEZXNjKSB7XG4gICAgdG9nZ2xlSWNvbiA9ICcoSGlkZSBEZXNjcmlwdGlvbiknXG4gIH1cblxuICBsZXQgc2l6ZUljb24gPSAnKFNtYWxsZXIgSW1hZ2UpJ1xuXG4gIGlmIChwcm9wcy5pbWFnZVNpemUgPT09ICdzbWFsbCcpIHtcbiAgICBzaXplSWNvbiA9ICcoTGFyZ2VyIEltYWdlKSdcbiAgfVxuXG4gIGlmIChwcm9wcy5pbWFnZVNpemUgPT09ICdsYXJnZScpIHtcbiAgICBzaXplSWNvbiA9ICcoU21hbGxlciBJbWFnZSknXG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgd29ya291dCAke3Byb3BzLnNob3dEZXNjID8gJ2FjdGl2ZScgOiAnJ31gfT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YzZmNWU7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsLjQpO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogI2RmZDJjODtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmxleC1pdGVtIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgtaXRlbS50YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4LWl0ZW0uaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dCAud29ya291dC1jb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodCAuNXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdyAuNXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0LmFjdGl2ZSAud29ya291dC1jb250ZW50IHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dC5hY3RpdmUgaDEge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgxPntkYXRhLnRpdGxlfSBcbiAgICAgICAgICA8c21hbGwgaWQ9e2B0b2dnbGUtZGVzY2B9IGNsYXNzTmFtZT17YGNsb3NlYH0gb25DbGljaz17cHJvcHMub25DaGFuZ2V9Pnt0b2dnbGVJY29ufTwvc21hbGw+XG4gICAgICAgICAgPHNtYWxsIGlkPXtgdG9nZ2xlLXNpemVgfSBjbGFzc05hbWU9e2BjbG9zZWB9IG9uQ2xpY2s9e3Byb3BzLm9uU2l6ZUNoYW5nZX0+e3NpemVJY29ufTwvc21hbGw+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd29ya291dC1jb250ZW50YH0+XG4gICAgICAgICAgPHA+PHN0cm9uZz5GcmVxdWVuY3k6IDwvc3Ryb25nPntkYXRhLmZyZXF1ZW5jeX08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5UaW1lOiA8L3N0cm9uZz57ZGF0YS50aW1lfTwvcD5cbiAgICAgICAgICA8cD57ZGF0YS5jb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXhgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LWl0ZW0gdGFibGVgfT5cbiAgICAgICAgICA8V29ya291dFRhYmxlXG4gICAgICAgICAgICBwbGFucz17cGxhbnN9XG4gICAgICAgICAgICBhY3RpdmVUYWI9e3Byb3BzLmFjdGl2ZVRhYn1cbiAgICAgICAgICAgIG9uV29ya291dENsaWNrPXtwcm9wcy5vbldvcmtvdXRDbGlja31cbiAgICAgICAgICAgIG9uQm9keVBhcnRDbGljaz17cHJvcHMub25Cb2R5UGFydENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgtaXRlbSBpbWFnZWB9PlxuICAgICAgICAgIDxJbWFnZUNhcmQgaW1hZ2U9e3Byb3BzLmltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3Jrb3V0Il19 */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, data.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-904296256" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, toggleIcon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-size",
    onClick: props.onSizeChange,
    className: "jsx-904296256" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, sizeIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "workout-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "flex-item table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plans: plans,
    activeTab: props.activeTab,
    onWorkoutClick: props.onWorkoutClick,
    onBodyPartClick: props.onBodyPartClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "flex-item image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ })

})
//# sourceMappingURL=better-body.js.d2112c6820c275eecdfe.hot-update.js.map