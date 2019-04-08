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
    className: "jsx-904296256" + " " + "workout ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "904296256",
    __self: this
  }, "h1.jsx-904296256{background-color:#7c6f5e;box-shadow:0 1px 2px rgba(0,0,0,.4);margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-904296256{float:right;}.workout.jsx-904296256{padding:1rem;}.flex.jsx-904296256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-904296256{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-transition:width .5s ease-in-out;transition:width .5s ease-in-out;}.flex-item.table.jsx-904296256{width:60%;}.flex-item.image.jsx-904296256{width:40%;}.workout.jsx-904296256 .workout-content.jsx-904296256{background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;opacity:0;padding:0 1rem;margin:0 0 1rem;max-height:0;}small.jsx-904296256{font-size:60%;padding-top:.5rem;}.workout.active.jsx-904296256 .workout-content.jsx-904296256{opacity:1;padding:1rem;max-height:600px;}.workout.active.jsx-904296256 h1.jsx-904296256{box-shadow:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHb0MsQUFTYixBQUlDLEFBSUEsQUFNRCxBQUtGLEFBSUEsQUFJc0IsQUFjbEIsQUFLSixBQU1NLFVBaENsQixBQUlBLEFBdUJlLEVBOUNmLENBSUEsQ0FxQ29CLEVBV3BCLE9BTG1CLEVBeERtQixPQW9DSixBQWVsQyxRQU1BLHFCQXhEVyxHQW9DMkIsTUFuQ3RCLENBcUJtQixHQU5kLFVBZGtCLGdCQXNDRixxQkFyQ3JCLGNBQ2hCLFFBYW1CLEVBTW5CLDZEQUxBLHNJQXVCWSxVQUNLLGVBQ0MsZ0JBQ0gsYUFDZiIsImZpbGUiOiIvVXNlcnMvd3BpZXJjZS9wcm9qZWN0cy9mbGV4aW4tYm93cy9jb21wb25lbnRzL1dvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV29ya291dFRhYmxlIGZyb20gJy4vV29ya291dFRhYmxlJ1xuaW1wb3J0IEltYWdlQ2FyZCBmcm9tICcuL0ltYWdlQ2FyZCdcblxuY29uc3QgV29ya291dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxuICBjb25zdCBwbGFucyA9IHByb3BzLmRhdGEud29ya291dFxuXG4gIGxldCB0b2dnbGVJY29uID0gJyhTaG93IERlc2NyaXB0aW9uKSdcblxuICBpZiAocHJvcHMuc2hvd0Rlc2MpIHtcbiAgICB0b2dnbGVJY29uID0gJyhIaWRlIERlc2NyaXB0aW9uKSdcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2B3b3Jrb3V0ICR7cHJvcHMuc2hvd0Rlc2MgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdjNmY1ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjZGZkMmM4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5mbGV4LWl0ZW0ge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleC1pdGVtLnRhYmxlIHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgtaXRlbS5pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0IC53b3Jrb3V0LWNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjQpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0IC41cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93IC41cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQuYWN0aXZlIC53b3Jrb3V0LWNvbnRlbnQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0LmFjdGl2ZSBoMSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDE+e2RhdGEudGl0bGV9IDxzbWFsbCBpZD17YHRvZ2dsZS1kZXNjYH0gY2xhc3NOYW1lPXtgY2xvc2VgfSBvbkNsaWNrPXtwcm9wcy5vbkNoYW5nZX0+e3RvZ2dsZUljb259PC9zbWFsbD48L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdvcmtvdXQtY29udGVudGB9PlxuICAgICAgICAgIDxwPjxzdHJvbmc+RnJlcXVlbmN5OiA8L3N0cm9uZz57ZGF0YS5mcmVxdWVuY3l9PC9wPlxuICAgICAgICAgIDxwPjxzdHJvbmc+VGltZTogPC9zdHJvbmc+e2RhdGEudGltZX08L3A+XG4gICAgICAgICAgPHA+e2RhdGEuY29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1pdGVtIHRhYmxlYH0+XG4gICAgICAgICAgPFdvcmtvdXRUYWJsZVxuICAgICAgICAgICAgcGxhbnM9e3BsYW5zfVxuICAgICAgICAgICAgYWN0aXZlVGFiPXtwcm9wcy5hY3RpdmVUYWJ9XG4gICAgICAgICAgICBvbldvcmtvdXRDbGljaz17cHJvcHMub25Xb3Jrb3V0Q2xpY2t9XG4gICAgICAgICAgICBvbkJvZHlQYXJ0Q2xpY2s9e3Byb3BzLm9uQm9keVBhcnRDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LWl0ZW0gaW1hZ2VgfT5cbiAgICAgICAgICA8SW1hZ2VDYXJkIGltYWdlPXtwcm9wcy5pbWFnZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya291dCJdfQ== */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, data.title, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-904296256" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, toggleIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "workout-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-904296256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "flex-item table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plans: plans,
    activeTab: props.activeTab,
    onWorkoutClick: props.onWorkoutClick,
    onBodyPartClick: props.onBodyPartClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-904296256" + " " + "flex-item image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ })

})
//# sourceMappingURL=better-body.js.0dd4a54f279d90fd0988.hot-update.js.map