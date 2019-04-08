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
    className: "jsx-2912712646" + " " + "workout ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2912712646",
    __self: this
  }, "h1.jsx-2912712646{background-color:#7c6f5e;box-shadow:0 1px 2px rgba(0,0,0,.4);margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-2912712646{float:right;}.workout.jsx-2912712646{padding:1rem;}.flex.jsx-2912712646{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-2912712646{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-transition:width .5s ease-in-out;transition:width .5s ease-in-out;}.flex-item.table.jsx-2912712646{width:60%;}.flex-item.image.jsx-2912712646{width:40%;}.workout.jsx-2912712646 .workout-content.jsx-2912712646{background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;opacity:0;padding:0 1rem;margin:0 0 1rem;max-height:0;}small.jsx-2912712646{font-size:60%;padding-top:.5rem;}small.jsx-2912712646+small.jsx-2912712646{margin-right:.5rem;}.workout.active.jsx-2912712646 .workout-content.jsx-2912712646{opacity:1;padding:1rem;max-height:600px;}.workout.active.jsx-2912712646 h1.jsx-2912712646{box-shadow:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR29DLEFBU2IsQUFJQyxBQUlBLEFBTUQsQUFLRixBQUlBLEFBSXNCLEFBY2xCLEFBS0ssQUFJVCxBQU1NLFVBcENsQixBQUlBLEFBMkJlLEVBbERmLENBSUEsQ0FxQ29CLEVBZXBCLEdBVkEsSUFLbUIsRUE1RG1CLE9Bb0NKLEFBZWxDLFFBVUEscUJBNURXLEdBb0MyQixNQW5DdEIsQ0FxQm1CLEdBTmQsVUFka0IsZ0JBc0NGLHFCQXJDckIsY0FDaEIsUUFhbUIsRUFNbkIsNkRBTEEsc0lBdUJZLFVBQ0ssZUFDQyxnQkFDSCxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3Jrb3V0VGFibGUgZnJvbSAnLi9Xb3Jrb3V0VGFibGUnXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gJy4vSW1hZ2VDYXJkJ1xuXG5jb25zdCBXb3Jrb3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhXG4gIGNvbnN0IHBsYW5zID0gcHJvcHMuZGF0YS53b3Jrb3V0XG5cbiAgbGV0IHRvZ2dsZUljb24gPSAnKFNob3cgRGVzY3JpcHRpb24pJ1xuXG4gIGlmIChwcm9wcy5zaG93RGVzYykge1xuICAgIHRvZ2dsZUljb24gPSAnKEhpZGUgRGVzY3JpcHRpb24pJ1xuICB9XG5cbiAgbGV0IHNpemVJY29uID0gJyhTbWFsbGVyIEltYWdlKSdcblxuICBpZiAocHJvcHMuaW1hZ2VTaXplID09PSAnc21hbGwnKSB7XG4gICAgc2l6ZUljb24gPSAnKExhcmdlciBJbWFnZSknXG4gIH1cblxuICBpZiAocHJvcHMuaW1hZ2VTaXplID09PSAnbGFyZ2UnKSB7XG4gICAgc2l6ZUljb24gPSAnKFNtYWxsZXIgSW1hZ2UpJ1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHdvcmtvdXQgJHtwcm9wcy5zaG93RGVzYyA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2ZjVlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6ICNkZmQyYzg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZsZXgtaXRlbSB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4LWl0ZW0udGFibGUge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleC1pdGVtLmltYWdlIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQgLndvcmtvdXQtY29udGVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQgLjVzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgLjVzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW07XG4gICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBzbWFsbCArIHNtYWxsIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQuYWN0aXZlIC53b3Jrb3V0LWNvbnRlbnQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0LmFjdGl2ZSBoMSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDE+e2RhdGEudGl0bGV9IFxuICAgICAgICAgIDxzbWFsbCBpZD17YHRvZ2dsZS1kZXNjYH0gY2xhc3NOYW1lPXtgY2xvc2VgfSBvbkNsaWNrPXtwcm9wcy5vbkNoYW5nZX0+e3RvZ2dsZUljb259PC9zbWFsbD5cbiAgICAgICAgICA8c21hbGwgaWQ9e2B0b2dnbGUtc2l6ZWB9IGNsYXNzTmFtZT17YGNsb3NlYH0gb25DbGljaz17cHJvcHMub25TaXplQ2hhbmdlfT57c2l6ZUljb259PC9zbWFsbD5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3b3Jrb3V0LWNvbnRlbnRgfT5cbiAgICAgICAgICA8cD48c3Ryb25nPkZyZXF1ZW5jeTogPC9zdHJvbmc+e2RhdGEuZnJlcXVlbmN5fTwvcD5cbiAgICAgICAgICA8cD48c3Ryb25nPlRpbWU6IDwvc3Ryb25nPntkYXRhLnRpbWV9PC9wPlxuICAgICAgICAgIDxwPntkYXRhLmNvbnRlbnR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCAke3Byb3BzLmltYWdlU2l6ZSA9PT0gJ2xhcmdlJyA/ICdsYXJnZS1pbWFnZScgOiAnc21hbGwtaW1hZ2UnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgtaXRlbSB0YWJsZWB9PlxuICAgICAgICAgIDxXb3Jrb3V0VGFibGVcbiAgICAgICAgICAgIHBsYW5zPXtwbGFuc31cbiAgICAgICAgICAgIGFjdGl2ZVRhYj17cHJvcHMuYWN0aXZlVGFifVxuICAgICAgICAgICAgb25Xb3Jrb3V0Q2xpY2s9e3Byb3BzLm9uV29ya291dENsaWNrfVxuICAgICAgICAgICAgb25Cb2R5UGFydENsaWNrPXtwcm9wcy5vbkJvZHlQYXJ0Q2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleC1pdGVtIGltYWdlYH0+XG4gICAgICAgICAgPEltYWdlQ2FyZCBpbWFnZT17cHJvcHMuaW1hZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtvdXQiXX0= */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2912712646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, data.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-2912712646" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, toggleIcon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-size",
    onClick: props.onSizeChange,
    className: "jsx-2912712646" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, sizeIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2912712646" + " " + "workout-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2912712646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-2912712646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2912712646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-2912712646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2912712646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2912712646" + " " + "flex ".concat(props.imageSize === 'large' ? 'large-image' : 'small-image'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2912712646" + " " + "flex-item table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plans: plans,
    activeTab: props.activeTab,
    onWorkoutClick: props.onWorkoutClick,
    onBodyPartClick: props.onBodyPartClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2912712646" + " " + "flex-item image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ })

})
//# sourceMappingURL=better-body.js.329096148c7f13af9d22.hot-update.js.map