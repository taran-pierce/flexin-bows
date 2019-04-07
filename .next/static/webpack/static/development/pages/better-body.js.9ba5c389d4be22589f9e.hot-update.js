webpackHotUpdate("static/development/pages/better-body.js",{

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
      className: "jsx-1844103835" + " " + "main-layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1844103835",
      __self: this
    }, "body{background:url('/static/images/body-bg.png') top left repeat;margin:0;padding:0;font-family:'Noto Sans JP',Helvetica,sans-serif;}.hidden{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDMkIsQUFHMEUsQUFPaEQsYUFDZixnREFQVyxTQUNDLFVBQ3dDLGdEQUNwRCIsImZpbGUiOiIvVXNlcnMvd3BpZXJjZS9wcm9qZWN0cy9mbGV4aW4tYm93cy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3Jrb3V0IGZyb20gXCIuL1dvcmtvdXRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgV29ya291dExpc3QgZnJvbSAnLi9Xb3Jrb3V0TGlzdCdcblxuY29uc3QgTGF5b3V0ID0gKCBwcm9wcykgPT4ge1xuICBjb25zdCBsaW5rcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQmV0dGVyIEJvZHknLFxuICAgICAgaHJlZjogJy9iZXR0ZXItYm9keSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBZHZhbmNlZCBDb25kaXRpb25pbmcnLFxuICAgICAgaHJlZjogJy9hZHZhbmNlZC1jb25kaXRpb25pbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQm9keSBCdWlsZGluZycsXG4gICAgICBocmVmOiAnL2JvZHktYnVpbGRpbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU3RyZW5ndGggVHJhaW5pbmcnLFxuICAgICAgaHJlZjogJy9zdHJlbmd0aC10cmFpbmluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBZXJvYmljJyxcbiAgICAgIGhyZWY6ICcvYWVyb2JpYydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdVcHBlciBMb3dlciBCb2R5JyxcbiAgICAgIGhyZWY6ICcvdXBwZXItbG93ZXItYm9keSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBbmFlcm9iaWMnLFxuICAgICAgaHJlZjogJy9hbmFlcm9iaWMnXG4gICAgfVxuICBdXG4gIFxuICBpZiAocHJvcHMuZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1haW4tbGF5b3V0YH0+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2JvZHktYmcucG5nJykgdG9wIGxlZnQgcmVwZWF0O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEpQJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGxpbmtzPXtsaW5rc31cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgc2VhcmNoVmFsdWU9e3Byb3BzLnNlYXJjaHZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICA8V29ya291dFxuICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XG4gICAgICAgICAgYWN0aXZlVGFiPXtwcm9wcy5hY3RpdmVUYWJ9XG4gICAgICAgICAgb25Xb3Jrb3V0Q2xpY2s9e3Byb3BzLm9uV29ya291dENsaWNrfVxuICAgICAgICAgIG9uQm9keVBhcnRDbGljaz17cHJvcHMub25Cb2R5UGFydENsaWNrfVxuICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXRgfT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9pbWFnZXMvYm9keS1iZy5wbmcnKSB0b3AgbGVmdCByZXBlYXQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSlAnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8SGVhZGVyIGxpbmtzPXtsaW5rc30gLz5cbiAgICAgICAgPFdvcmtvdXRMaXN0IGxpbmtzPXtsaW5rc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      links: links,
      onChange: props.onChange,
      searchValue: props.searchvalue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Workout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: props.data,
      activeTab: props.activeTab,
      onWorkoutClick: props.onWorkoutClick,
      onBodyPartClick: props.onBodyPartClick,
      image: props.image,
      onChange: props.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1844103835" + " " + "main-layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1844103835",
      __self: this
    }, "body{background:url('/static/images/body-bg.png') top left repeat;margin:0;padding:0;font-family:'Noto Sans JP',Helvetica,sans-serif;}.hidden{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2ZsZXhpbi1ib3dzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFMkIsQUFHMEUsQUFPaEQsYUFDZixnREFQVyxTQUNDLFVBQ3dDLGdEQUNwRCIsImZpbGUiOiIvVXNlcnMvd3BpZXJjZS9wcm9qZWN0cy9mbGV4aW4tYm93cy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3Jrb3V0IGZyb20gXCIuL1dvcmtvdXRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgV29ya291dExpc3QgZnJvbSAnLi9Xb3Jrb3V0TGlzdCdcblxuY29uc3QgTGF5b3V0ID0gKCBwcm9wcykgPT4ge1xuICBjb25zdCBsaW5rcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQmV0dGVyIEJvZHknLFxuICAgICAgaHJlZjogJy9iZXR0ZXItYm9keSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBZHZhbmNlZCBDb25kaXRpb25pbmcnLFxuICAgICAgaHJlZjogJy9hZHZhbmNlZC1jb25kaXRpb25pbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQm9keSBCdWlsZGluZycsXG4gICAgICBocmVmOiAnL2JvZHktYnVpbGRpbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU3RyZW5ndGggVHJhaW5pbmcnLFxuICAgICAgaHJlZjogJy9zdHJlbmd0aC10cmFpbmluZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBZXJvYmljJyxcbiAgICAgIGhyZWY6ICcvYWVyb2JpYydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdVcHBlciBMb3dlciBCb2R5JyxcbiAgICAgIGhyZWY6ICcvdXBwZXItbG93ZXItYm9keSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBbmFlcm9iaWMnLFxuICAgICAgaHJlZjogJy9hbmFlcm9iaWMnXG4gICAgfVxuICBdXG4gIFxuICBpZiAocHJvcHMuZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1haW4tbGF5b3V0YH0+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2JvZHktYmcucG5nJykgdG9wIGxlZnQgcmVwZWF0O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEpQJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGxpbmtzPXtsaW5rc31cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgc2VhcmNoVmFsdWU9e3Byb3BzLnNlYXJjaHZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICA8V29ya291dFxuICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XG4gICAgICAgICAgYWN0aXZlVGFiPXtwcm9wcy5hY3RpdmVUYWJ9XG4gICAgICAgICAgb25Xb3Jrb3V0Q2xpY2s9e3Byb3BzLm9uV29ya291dENsaWNrfVxuICAgICAgICAgIG9uQm9keVBhcnRDbGljaz17cHJvcHMub25Cb2R5UGFydENsaWNrfVxuICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXRgfT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9pbWFnZXMvYm9keS1iZy5wbmcnKSB0b3AgbGVmdCByZXBlYXQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSlAnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8SGVhZGVyIGxpbmtzPXtsaW5rc30gLz5cbiAgICAgICAgPFdvcmtvdXRMaXN0IGxpbmtzPXtsaW5rc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=/Users/wpierce/projects/flexin-bows/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      links: links,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorkoutList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      links: links,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=better-body.js.9ba5c389d4be22589f9e.hot-update.js.map