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
    className: "jsx-1707336835" + " " + "workout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1707336835",
    __self: this
  }, "h1.jsx-1707336835{background-color:#7c6f5e;box-shadow:0 1px 2px rgba(0,0,0,.4);margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-1707336835{float:right;}.workout.jsx-1707336835{padding:1rem;margin-bottom:1rem;}.flex.jsx-1707336835{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-1707336835{width:50%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.workout-content.jsx-1707336835{background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-transition:opacity .5s ease-in-out, max-height .5s ease-in-out;transition:opacity .5s ease-in-out, max-height .5s ease-in-out;opacity:0;padding:1rem;margin-top:0;max-height:0;}small.jsx-1707336835{font-size:60%;padding-top:.5rem;}.workout-content.active.jsx-1707336835{opacity:1;max-height:600px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHb0MsQUFTYixBQUlDLEFBS0EsQUFNSCxBQUtzQixBQVlsQixBQUtKLFVBckJFLEFBc0JLLEVBckNuQixDQUlxQixDQTRCRCxXQXpDa0IsRUErQ3RDLEtBakNBLEFBZWtDLEFBYWxDLDZCQXpDVyxHQTZCMkIsTUE1QnRCLElBZ0JLLE9BT3JCLEdBdEJ1QyxnQkE2QkMscUJBNUJ4QixjQUNoQixRQWNtQiwrREFDbkIsNEJBYVksVUFDRyxhQUNBLGFBQ0EsYUFDZiIsImZpbGUiOiIvVXNlcnMvd3BpZXJjZS9wcm9qZWN0cy9mbGV4aW4tYm93cy9jb21wb25lbnRzL1dvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV29ya291dFRhYmxlIGZyb20gJy4vV29ya291dFRhYmxlJ1xuaW1wb3J0IEltYWdlQ2FyZCBmcm9tICcuL0ltYWdlQ2FyZCdcblxuY29uc3QgV29ya291dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxuICBjb25zdCBwbGFucyA9IHByb3BzLmRhdGEud29ya291dFxuXG4gIGxldCB0b2dnbGVJY29uID0gJyhTaG93IERlc2NyaXB0aW9uKSdcblxuICBpZiAocHJvcHMuc2hvd0Rlc2MpIHtcbiAgICB0b2dnbGVJY29uID0gJyhIaWRlIERlc2NyaXB0aW9uKSdcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2B3b3Jrb3V0YH0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2ZjVlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6ICNkZmQyYzg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmxleC1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0LWNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjQpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0IC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0LWNvbnRlbnQuYWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxoMT57ZGF0YS50aXRsZX0gPHNtYWxsIGlkPXtgdG9nZ2xlLWRlc2NgfSBjbGFzc05hbWU9e2BjbG9zZWB9IG9uQ2xpY2s9e3Byb3BzLm9uQ2hhbmdlfT57dG9nZ2xlSWNvbn08L3NtYWxsPjwvaDE+XG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17YHdvcmtvdXQtY29udGVudCAke3Byb3BzLnNob3dEZXNjID8gJ2FjdGl2ZScgOiAnJ31gfT5cbiAgICAgICAgICA8cD48c3Ryb25nPkZyZXF1ZW5jeTogPC9zdHJvbmc+e2RhdGEuZnJlcXVlbmN5fTwvcD5cbiAgICAgICAgICA8cD48c3Ryb25nPlRpbWU6IDwvc3Ryb25nPntkYXRhLnRpbWV9PC9wPlxuICAgICAgICAgIDxwPntkYXRhLmNvbnRlbnR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgtaXRlbWB9PlxuICAgICAgICAgIDxXb3Jrb3V0VGFibGVcbiAgICAgICAgICAgIHBsYW5zPXtwbGFuc31cbiAgICAgICAgICAgIGFjdGl2ZVRhYj17cHJvcHMuYWN0aXZlVGFifVxuICAgICAgICAgICAgb25Xb3Jrb3V0Q2xpY2s9e3Byb3BzLm9uV29ya291dENsaWNrfVxuICAgICAgICAgICAgb25Cb2R5UGFydENsaWNrPXtwcm9wcy5vbkJvZHlQYXJ0Q2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1pdGVtYH0+XG4gICAgICAgICAgPEltYWdlQ2FyZCBpbWFnZT17cHJvcHMuaW1hZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtvdXQiXX0= */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1707336835",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, data.title, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-1707336835" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, toggleIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1707336835" + " " + "workout-content ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1707336835",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1707336835",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1707336835",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1707336835",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1707336835",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1707336835" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1707336835" + " " + "flex-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plans: plans,
    activeTab: props.activeTab,
    onWorkoutClick: props.onWorkoutClick,
    onBodyPartClick: props.onBodyPartClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1707336835" + " " + "flex-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ })

})
//# sourceMappingURL=better-body.js.0114cd1d4053cd94ff94.hot-update.js.map