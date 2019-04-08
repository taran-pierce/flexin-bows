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
    className: "jsx-3137639490" + " " + "workout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3137639490",
    __self: this
  }, "h1.jsx-3137639490{background-color:#7c6f5e;box-shadow:0 1px 2px rgba(0,0,0,.4);margin:0;color:#dfd2c8;text-shadow:-1px -1px rgba(0,0,0,.3);padding:.5rem;}.close.jsx-3137639490{float:right;}.workout.jsx-3137639490{padding:1rem;}.flex.jsx-3137639490{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.flex-item.jsx-3137639490{width:50%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.workout-content.jsx-3137639490{background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.3);-webkit-transition:opacity .5s ease-in-out, max-height .5s ease-in-out;transition:opacity .5s ease-in-out, max-height .5s ease-in-out;opacity:0;padding:1rem;margin-top:0;max-height:0;}small.jsx-3137639490{font-size:60%;padding-top:.5rem;}.workout-content.active.jsx-3137639490{opacity:1;max-height:600px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvV29ya291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHb0MsQUFTYixBQUlDLEFBSUEsQUFNSCxBQUtzQixBQVlsQixBQUtKLFVBckJFLEFBc0JLLEVBcENuQixDQUlBLENBMkJvQixXQXhDa0IsRUE4Q3RDLEtBbEJrQyxBQWFsQyw2QkF4Q1csR0E0QjJCLE1BM0J0QixJQWVLLE9BT3JCLEdBckJ1QyxnQkE0QkMscUJBM0J4QixjQUNoQixRQWFtQiwrREFDbkIsNEJBYVksVUFDRyxhQUNBLGFBQ0EsYUFDZiIsImZpbGUiOiIvVXNlcnMvd3BpZXJjZS9wcm9qZWN0cy9mbGV4aW4tYm93cy9jb21wb25lbnRzL1dvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV29ya291dFRhYmxlIGZyb20gJy4vV29ya291dFRhYmxlJ1xuaW1wb3J0IEltYWdlQ2FyZCBmcm9tICcuL0ltYWdlQ2FyZCdcblxuY29uc3QgV29ya291dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxuICBjb25zdCBwbGFucyA9IHByb3BzLmRhdGEud29ya291dFxuXG4gIGxldCB0b2dnbGVJY29uID0gJyhTaG93IERlc2NyaXB0aW9uKSdcblxuICBpZiAocHJvcHMuc2hvd0Rlc2MpIHtcbiAgICB0b2dnbGVJY29uID0gJyhIaWRlIERlc2NyaXB0aW9uKSdcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2B3b3Jrb3V0YH0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2ZjVlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6ICNkZmQyYzg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZsZXgtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dC1jb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC40KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodCAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAud29ya291dC1jb250ZW50LmFjdGl2ZSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDE+e2RhdGEudGl0bGV9IDxzbWFsbCBpZD17YHRvZ2dsZS1kZXNjYH0gY2xhc3NOYW1lPXtgY2xvc2VgfSBvbkNsaWNrPXtwcm9wcy5vbkNoYW5nZX0+e3RvZ2dsZUljb259PC9zbWFsbD48L2gxPlxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e2B3b3Jrb3V0LWNvbnRlbnQgJHtwcm9wcy5zaG93RGVzYyA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICAgICAgPHA+PHN0cm9uZz5GcmVxdWVuY3k6IDwvc3Ryb25nPntkYXRhLmZyZXF1ZW5jeX08L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz5UaW1lOiA8L3N0cm9uZz57ZGF0YS50aW1lfTwvcD5cbiAgICAgICAgICA8cD57ZGF0YS5jb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXhgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4LWl0ZW1gfT5cbiAgICAgICAgICA8V29ya291dFRhYmxlXG4gICAgICAgICAgICBwbGFucz17cGxhbnN9XG4gICAgICAgICAgICBhY3RpdmVUYWI9e3Byb3BzLmFjdGl2ZVRhYn1cbiAgICAgICAgICAgIG9uV29ya291dENsaWNrPXtwcm9wcy5vbldvcmtvdXRDbGlja31cbiAgICAgICAgICAgIG9uQm9keVBhcnRDbGljaz17cHJvcHMub25Cb2R5UGFydENsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgtaXRlbWB9PlxuICAgICAgICAgIDxJbWFnZUNhcmQgaW1hZ2U9e3Byb3BzLmltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3Jrb3V0Il19 */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Workout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3137639490",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, data.title, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    id: "toggle-desc",
    onClick: props.onChange,
    className: "jsx-3137639490" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, toggleIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3137639490" + " " + "workout-content ".concat(props.showDesc ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3137639490",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3137639490",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Frequency: "), data.frequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3137639490",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3137639490",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Time: "), data.time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3137639490",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, data.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3137639490" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3137639490" + " " + "flex-item",
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
    className: "jsx-3137639490" + " " + "flex-item",
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
//# sourceMappingURL=better-body.js.838f91d1f6fa3e9f788a.hot-update.js.map