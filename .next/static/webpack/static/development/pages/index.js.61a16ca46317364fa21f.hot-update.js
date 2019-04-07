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
      className: "jsx-3170226606" + " " + "main-layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3170226606",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700');body{background:url('/static/images/body-bg.png') top left repeat;margin:0;padding:0;font-family:Helvetica,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDMkIsQUFFMEYsQUFHaEIsNkRBQ3BELFNBQ0MsVUFDd0IsaUNBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmtvdXQgZnJvbSBcIi4vV29ya291dFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBXb3Jrb3V0TGlzdCBmcm9tICcuL1dvcmtvdXRMaXN0J1xuXG5jb25zdCBMYXlvdXQgPSAoIHByb3BzKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdCZXR0ZXIgQm9keScsXG4gICAgICBocmVmOiAnL2JldHRlci1ib2R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FkdmFuY2VkIENvbmRpdGlvbmluZycsXG4gICAgICBocmVmOiAnL2FkdmFuY2VkLWNvbmRpdGlvbmluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCb2R5IEJ1aWxkaW5nJyxcbiAgICAgIGhyZWY6ICcvYm9keS1idWlsZGluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTdHJlbmd0aCBUcmFpbmluZycsXG4gICAgICBocmVmOiAnL3N0cmVuZ3RoLXRyYWluaW5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Flcm9iaWMnLFxuICAgICAgaHJlZjogJy9hZXJvYmljJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1VwcGVyIExvd2VyIEJvZHknLFxuICAgICAgaHJlZjogJy91cHBlci1sb3dlci1ib2R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FuYWVyb2JpYycsXG4gICAgICBocmVmOiAnL2FuYWVyb2JpYydcbiAgICB9XG4gIF1cbiAgXG4gIGlmIChwcm9wcy5kYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXRgfT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2FucytKUDozMDAsNDAwLDcwMCcpO1xuICAgICAgICAgIFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvc3RhdGljL2ltYWdlcy9ib2R5LWJnLnBuZycpIHRvcCBsZWZ0IHJlcGVhdDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgbGlua3M9e2xpbmtzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cbiAgICAgICAgICBzZWFyY2hWYWx1ZT17cHJvcHMuc2VhcmNodmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxXb3Jrb3V0XG4gICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgICBhY3RpdmVUYWI9e3Byb3BzLmFjdGl2ZVRhYn1cbiAgICAgICAgICBvbldvcmtvdXRDbGljaz17cHJvcHMub25Xb3Jrb3V0Q2xpY2t9XG4gICAgICAgICAgb25Cb2R5UGFydENsaWNrPXtwcm9wcy5vbkJvZHlQYXJ0Q2xpY2t9XG4gICAgICAgICAgaW1hZ2U9e3Byb3BzLmltYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1haW4tbGF5b3V0YH0+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2JvZHktYmcucG5nJykgdG9wIGxlZnQgcmVwZWF0O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxIZWFkZXIgbGlua3M9e2xpbmtzfSAvPlxuICAgICAgICA8V29ya291dExpc3QgbGlua3M9e2xpbmtzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      links: links,
      onChange: props.onChange,
      searchValue: props.searchvalue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
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
        lineNumber: 55
      },
      __self: this
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-940123235" + " " + "main-layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "940123235",
      __self: this
    }, "body{background:url('/static/images/body-bg.png') top left repeat;margin:0;padding:0;font-family:Helvetica,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFMkIsQUFHMEUsNkRBQ3BELFNBQ0MsVUFDd0IsaUNBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmtvdXQgZnJvbSBcIi4vV29ya291dFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBXb3Jrb3V0TGlzdCBmcm9tICcuL1dvcmtvdXRMaXN0J1xuXG5jb25zdCBMYXlvdXQgPSAoIHByb3BzKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdCZXR0ZXIgQm9keScsXG4gICAgICBocmVmOiAnL2JldHRlci1ib2R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FkdmFuY2VkIENvbmRpdGlvbmluZycsXG4gICAgICBocmVmOiAnL2FkdmFuY2VkLWNvbmRpdGlvbmluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCb2R5IEJ1aWxkaW5nJyxcbiAgICAgIGhyZWY6ICcvYm9keS1idWlsZGluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTdHJlbmd0aCBUcmFpbmluZycsXG4gICAgICBocmVmOiAnL3N0cmVuZ3RoLXRyYWluaW5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Flcm9iaWMnLFxuICAgICAgaHJlZjogJy9hZXJvYmljJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1VwcGVyIExvd2VyIEJvZHknLFxuICAgICAgaHJlZjogJy91cHBlci1sb3dlci1ib2R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FuYWVyb2JpYycsXG4gICAgICBocmVmOiAnL2FuYWVyb2JpYydcbiAgICB9XG4gIF1cbiAgXG4gIGlmIChwcm9wcy5kYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXRgfT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2FucytKUDozMDAsNDAwLDcwMCcpO1xuICAgICAgICAgIFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvc3RhdGljL2ltYWdlcy9ib2R5LWJnLnBuZycpIHRvcCBsZWZ0IHJlcGVhdDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgbGlua3M9e2xpbmtzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cbiAgICAgICAgICBzZWFyY2hWYWx1ZT17cHJvcHMuc2VhcmNodmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxXb3Jrb3V0XG4gICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cbiAgICAgICAgICBhY3RpdmVUYWI9e3Byb3BzLmFjdGl2ZVRhYn1cbiAgICAgICAgICBvbldvcmtvdXRDbGljaz17cHJvcHMub25Xb3Jrb3V0Q2xpY2t9XG4gICAgICAgICAgb25Cb2R5UGFydENsaWNrPXtwcm9wcy5vbkJvZHlQYXJ0Q2xpY2t9XG4gICAgICAgICAgaW1hZ2U9e3Byb3BzLmltYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1haW4tbGF5b3V0YH0+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2JvZHktYmcucG5nJykgdG9wIGxlZnQgcmVwZWF0O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxIZWFkZXIgbGlua3M9e2xpbmtzfSAvPlxuICAgICAgICA8V29ya291dExpc3QgbGlua3M9e2xpbmtzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      links: links,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      links: links,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.61a16ca46317364fa21f.hot-update.js.map