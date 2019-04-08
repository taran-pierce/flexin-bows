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
    className: "jsx-855283214" + " " + "workout ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "855283214",
    __self: this
  }, "h1.jsx-855283214{background-color:#7c6f5e;box-shadow:0 1px 2px rgba(0,0,0,.4);margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-855283214{float:right;}.workout.jsx-855283214{padding:1rem;}.flex.jsx-855283214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-855283214{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-transition:width .5s ease-in-out;transition:width .5s ease-in-out;}.flex-item.table.jsx-855283214{width:60%;}.flex-item.image.jsx-855283214{width:40%;}.flex.large-image.jsx-855283214 .flex-item.image.jsx-855283214{width:65%;}.flex.large-image.jsx-855283214 .flex-item.table.jsx-855283214{width:35%;}.flex.small-image.jsx-855283214 .flex-item.image.jsx-855283214{width:40%;}.flex.small-image.jsx-855283214 .flex-item.table.jsx-855283214{width:60%;}.workout.jsx-855283214 .workout-content.jsx-855283214{background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;transition:opacity .5s ease-in-out, max-height .5s ease-in-out, box-shadow .5s ease-in-out, padding .5s ease-in-out;opacity:0;padding:0 1rem;margin:0 0 1rem;max-height:0;}small.jsx-855283214{font-size:60%;padding-top:.5rem;}small.jsx-855283214+small.jsx-855283214{margin-right:.5rem;}.workout.active.jsx-855283214 .workout-content.jsx-855283214{opacity:1;padding:1rem;max-height:600px;}.workout.active.jsx-855283214 h1.jsx-855283214{box-shadow:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR29DLEFBU2IsQUFJQyxBQUlBLEFBTUQsQUFLRixBQUlBLEFBSUEsQUFHQSxBQUlBLEFBR0EsQUFJc0IsQUFjbEIsQUFLSyxBQUlULEFBTU0sVUFsRGxCLEFBSUEsQUFJQSxBQUdBLEFBSUEsQUFHQSxBQTJCZSxFQWhFZixDQUlBLENBbURvQixFQWVwQixHQVZBLElBS21CLEVBMUVtQixPQWtESixBQWVsQyxRQVVBLHFCQTFFVyxHQWtEMkIsTUFqRHRCLENBcUJtQixHQU5kLFVBZGtCLGdCQW9ERixxQkFuRHJCLGNBQ2hCLFFBYW1CLEVBTW5CLDZEQUxBLHNJQXFDWSxVQUNLLGVBQ0MsZ0JBQ0gsYUFDZiIsImZpbGUiOiIvVXNlcnMvd3BpZXJjZS9wcm9qZWN0cy9mbGV4aW4tYm93cy9jb21wb25lbnRzL1dvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV29ya291dFRhYmxlIGZyb20gJy4vV29ya291dFRhYmxlJ1xuaW1wb3J0IEltYWdlQ2FyZCBmcm9tICcuL0ltYWdlQ2FyZCdcblxuY29uc3QgV29ya291dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxuICBjb25zdCBwbGFucyA9IHByb3BzLmRhdGEud29ya291dFxuXG4gIGxldCB0b2dnbGVJY29uID0gJyhTaG93IERlc2NyaXB0aW9uKSdcblxuICBpZiAocHJvcHMuc2hvd0Rlc2MpIHtcbiAgICB0b2dnbGVJY29uID0gJyhIaWRlIERlc2NyaXB0aW9uKSdcbiAgfVxuXG4gIGxldCBzaXplSWNvbiA9ICcoU21hbGxlciBJbWFnZSknXG5cbiAgaWYgKHByb3BzLmltYWdlU2l6ZSA9PT0gJ3NtYWxsJykge1xuICAgIHNpemVJY29uID0gJyhMYXJnZXIgSW1hZ2UpJ1xuICB9XG5cbiAgaWYgKHByb3BzLmltYWdlU2l6ZSA9PT0gJ2xhcmdlJykge1xuICAgIHNpemVJY29uID0gJyhTbWFsbGVyIEltYWdlKSdcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2B3b3Jrb3V0ICR7cHJvcHMuc2hvd0Rlc2MgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdjNmY1ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjZGZkMmM4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmtvdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5mbGV4LWl0ZW0ge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleC1pdGVtLnRhYmxlIHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgtaXRlbS5pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4LmxhcmdlLWltYWdlIC5mbGV4LWl0ZW0uaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXgubGFyZ2UtaW1hZ2UgLmZsZXgtaXRlbS50YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4LnNtYWxsLWltYWdlIC5mbGV4LWl0ZW0uaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXguc21hbGwtaW1hZ2UgLmZsZXgtaXRlbS50YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0IC53b3Jrb3V0LWNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjQpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0IC41cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93IC41cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgc21hbGwgKyBzbWFsbCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53b3Jrb3V0LmFjdGl2ZSAud29ya291dC1jb250ZW50IHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dC5hY3RpdmUgaDEge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgxPntkYXRhLnRpdGxlfSBcbiAgICAgICAgICA8c21hbGwgaWQ9e2B0b2dnbGUtZGVzY2B9IGNsYXNzTmFtZT17YGNsb3NlYH0gb25DbGljaz17cHJvcHMub25DaGFuZ2V9Pnt0b2dnbGVJY29ufTwvc21hbGw+XG4gICAgICAgICAgPHNtYWxsIGlkPXtgdG9nZ2xlLXNpemVgfSBjbGFzc05hbWU9e2BjbG9zZWB9IG9uQ2xpY2s9e3Byb3BzLm9uU2l6ZUNoYW5nZX0+e3NpemVJY29ufTwvc21hbGw+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd29ya291dC1jb250ZW50YH0+XG4gICAgICAgICAgPHA+PHN0cm9uZz5GcmVxdWVuY3k6IDwvc3Ryb25nPntkYXRhLmZyZXF1ZW5jeX08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5UaW1lOiA8L3N0cm9uZz57ZGF0YS50aW1lfTwvcD5cbiAgICAgICAgICA8cD57ZGF0YS5jb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggJHtwcm9wcy5pbWFnZVNpemUgPT09ICdsYXJnZScgPyAnbGFyZ2UtaW1hZ2UnIDogJ3NtYWxsLWltYWdlJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LWl0ZW0gdGFibGVgfT5cbiAgICAgICAgICA8V29ya291dFRhYmxlXG4gICAgICAgICAgICBwbGFucz17cGxhbnN9XG4gICAgICAgICAgICBhY3RpdmVUYWI9e3Byb3BzLmFjdGl2ZVRhYn1cbiAgICAgICAgICAgIG9uV29ya291dENsaWNrPXtwcm9wcy5vbldvcmtvdXRDbGlja31cbiAgICAgICAgICAgIG9uQm9keVBhcnRDbGljaz17cHJvcHMub25Cb2R5UGFydENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgtaXRlbSBpbWFnZWB9PlxuICAgICAgICAgIDxJbWFnZUNhcmQgaW1hZ2U9e3Byb3BzLmltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3Jrb3V0Il19 */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-855283214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, data.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-855283214" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, toggleIcon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-size",
    onClick: props.onSizeChange,
    className: "jsx-855283214" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, sizeIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-855283214" + " " + "workout-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-855283214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-855283214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-855283214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-855283214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-855283214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-855283214" + " " + "flex ".concat(props.imageSize === 'large' ? 'large-image' : 'small-image'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-855283214" + " " + "flex-item table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plans: plans,
    activeTab: props.activeTab,
    onWorkoutClick: props.onWorkoutClick,
    onBodyPartClick: props.onBodyPartClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-855283214" + " " + "flex-item image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Workout);

/***/ })

})
//# sourceMappingURL=better-body.js.179324c1703644c7b7b7.hot-update.js.map