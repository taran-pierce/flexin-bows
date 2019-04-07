webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Workout */ "./components/Workout.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _WorkoutList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkoutList */ "./components/WorkoutList.js");
var _jsxFileName = "/Users/wpierce/projects/flexin-bows/components/Layout.js";






var Layout = function Layout(props) {
  var links = [{
    name: 'Better Body',
    href: '/better-body'
  }, {
    name: 'Advanced Conditioning',
    href: '/advanced-conditioning'
  }, {
    name: 'Body Building',
    href: '/body-building'
  }, {
    name: 'Strength Training',
    href: '/strength-training'
  }, {
    name: 'Aerobic',
    href: '/aerobic'
  }, {
    name: 'Upper Lower Body',
    href: '/upper-lower-body'
  }, {
    name: 'Anaerobic',
    href: '/anaerobic'
  }];

  if (props.data) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-682495397" + " " + "main-layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "682495397",
      __self: this
    }, "body{background:url('/static/images/body-bg.png') top left repeat;margin:0;padding:0;font-family:'Noto Sans JP',Helvetica,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDMkIsQUFHMEUsNkRBQ3BELFNBQ0MsVUFDd0MsZ0RBQ3BEIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmtvdXQgZnJvbSBcIi4vV29ya291dFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBXb3Jrb3V0TGlzdCBmcm9tICcuL1dvcmtvdXRMaXN0J1xuXG5jb25zdCBMYXlvdXQgPSAoIHByb3BzKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdCZXR0ZXIgQm9keScsXG4gICAgICBocmVmOiAnL2JldHRlci1ib2R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FkdmFuY2VkIENvbmRpdGlvbmluZycsXG4gICAgICBocmVmOiAnL2FkdmFuY2VkLWNvbmRpdGlvbmluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCb2R5IEJ1aWxkaW5nJyxcbiAgICAgIGhyZWY6ICcvYm9keS1idWlsZGluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTdHJlbmd0aCBUcmFpbmluZycsXG4gICAgICBocmVmOiAnL3N0cmVuZ3RoLXRyYWluaW5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Flcm9iaWMnLFxuICAgICAgaHJlZjogJy9hZXJvYmljJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1VwcGVyIExvd2VyIEJvZHknLFxuICAgICAgaHJlZjogJy91cHBlci1sb3dlci1ib2R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FuYWVyb2JpYycsXG4gICAgICBocmVmOiAnL2FuYWVyb2JpYydcbiAgICB9XG4gIF1cbiAgXG4gIGlmIChwcm9wcy5kYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXRgfT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9pbWFnZXMvYm9keS1iZy5wbmcnKSB0b3AgbGVmdCByZXBlYXQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSlAnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBsaW5rcz17bGlua3N9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgIHNlYXJjaFZhbHVlPXtwcm9wcy5zZWFyY2h2YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFdvcmtvdXRcbiAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxuICAgICAgICAgIGFjdGl2ZVRhYj17cHJvcHMuYWN0aXZlVGFifVxuICAgICAgICAgIG9uV29ya291dENsaWNrPXtwcm9wcy5vbldvcmtvdXRDbGlja31cbiAgICAgICAgICBvbkJvZHlQYXJ0Q2xpY2s9e3Byb3BzLm9uQm9keVBhcnRDbGlja31cbiAgICAgICAgICBpbWFnZT17cHJvcHMuaW1hZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXRgfT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9pbWFnZXMvYm9keS1iZy5wbmcnKSB0b3AgbGVmdCByZXBlYXQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEhlYWRlciBsaW5rcz17bGlua3N9IC8+XG4gICAgICAgIDxXb3Jrb3V0TGlzdCBsaW5rcz17bGlua3N9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      links: links,
      onChange: props.onChange,
      searchValue: props.searchvalue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Workout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: props.data,
      activeTab: props.activeTab,
      onWorkoutClick: props.onWorkoutClick,
      onBodyPartClick: props.onBodyPartClick,
      image: props.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-940123235" + " " + "main-layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "940123235",
      __self: this
    }, "body{background:url('/static/images/body-bg.png') top left repeat;margin:0;padding:0;font-family:Helvetica,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFMkIsQUFHMEUsNkRBQ3BELFNBQ0MsVUFDd0IsaUNBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmtvdXQgZnJvbSBcIi4vV29ya291dFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBXb3Jrb3V0TGlzdCBmcm9tICcuL1dvcmtvdXRMaXN0J1xuXG5jb25zdCBMYXlvdXQgPSAoIHByb3BzKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdCZXR0ZXIgQm9keScsXG4gICAgICBocmVmOiAnL2JldHRlci1ib2R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FkdmFuY2VkIENvbmRpdGlvbmluZycsXG4gICAgICBocmVmOiAnL2FkdmFuY2VkLWNvbmRpdGlvbmluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCb2R5IEJ1aWxkaW5nJyxcbiAgICAgIGhyZWY6ICcvYm9keS1idWlsZGluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTdHJlbmd0aCBUcmFpbmluZycsXG4gICAgICBocmVmOiAnL3N0cmVuZ3RoLXRyYWluaW5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Flcm9iaWMnLFxuICAgICAgaHJlZjogJy9hZXJvYmljJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1VwcGVyIExvd2VyIEJvZHknLFxuICAgICAgaHJlZjogJy91cHBlci1sb3dlci1ib2R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FuYWVyb2JpYycsXG4gICAgICBocmVmOiAnL2FuYWVyb2JpYydcbiAgICB9XG4gIF1cbiAgXG4gIGlmIChwcm9wcy5kYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXRgfT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9pbWFnZXMvYm9keS1iZy5wbmcnKSB0b3AgbGVmdCByZXBlYXQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSlAnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBsaW5rcz17bGlua3N9XG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgIHNlYXJjaFZhbHVlPXtwcm9wcy5zZWFyY2h2YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFdvcmtvdXRcbiAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxuICAgICAgICAgIGFjdGl2ZVRhYj17cHJvcHMuYWN0aXZlVGFifVxuICAgICAgICAgIG9uV29ya291dENsaWNrPXtwcm9wcy5vbldvcmtvdXRDbGlja31cbiAgICAgICAgICBvbkJvZHlQYXJ0Q2xpY2s9e3Byb3BzLm9uQm9keVBhcnRDbGlja31cbiAgICAgICAgICBpbWFnZT17cHJvcHMuaW1hZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXRgfT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9pbWFnZXMvYm9keS1iZy5wbmcnKSB0b3AgbGVmdCByZXBlYXQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEhlYWRlciBsaW5rcz17bGlua3N9IC8+XG4gICAgICAgIDxXb3Jrb3V0TGlzdCBsaW5rcz17bGlua3N9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      links: links,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      links: links,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.6e866093add549cf6270.hot-update.js.map