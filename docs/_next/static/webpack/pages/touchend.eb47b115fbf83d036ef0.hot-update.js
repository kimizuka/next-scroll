webpackHotUpdate_N_E("pages/touchend",{

/***/ "./src/pages/touchend/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/touchend/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/touchend/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"touchend__Wrapper\",\n  componentId: \"sc-1nymc90-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState3[0],\n      setLastProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scrollProgress = _useState4[0],\n      setScrollProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight && windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    setTimeout(function () {\n      var wrapper = document.getElementById('wrapper');\n      var parent = wrapper.parentElement;\n      parent.removeChild(wrapper);\n      parent.appendChild(wrapper);\n      window.scrollTo(window.scrollX, 500);\n    }, 1000);\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    id: \"wrapper\",\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n        children: [\"body \", '{', \" width: 100%; height: 100%; \", '}']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 170,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: scrollY\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 176,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 177,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 178,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 163,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"OA9+d1/2NnUyj6JNh4X5Zphv6sQ=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvdWNoZW5kL2luZGV4LnRzeD9mMjZlIl0sIm5hbWVzIjpbImNvbG9ycyIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJsZW5ndGgiLCJzdHlsZXMiLCJpIiwiY3NzIiwiU2Nyb2xsV3JhcHBlciIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImxhc3RQcm9ncmVzcyIsInNldExhc3RQcm9ncmVzcyIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJjb250ZW50c0hlaWdodCIsInNldENvbnRlbnRzSGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJ1c2VFZmZlY3QiLCJpbml0IiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwicGFzc2l2ZSIsImRvY3VtZW50IiwiaGFuZGxlU2Nyb2xsIiwic2V0VGltZW91dCIsIndyYXBwZXIiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwibm9ybWFsaXplIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ2YWwiLCJtYXgiLCJtaW4iLCJtYXAiLCJfIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUcsQ0FDWCxTQURXLEVBRVgsU0FGVyxFQUdYLFNBSFcsRUFJWCxTQUpXLEVBS1gsU0FMVyxFQU1YLFNBTlcsRUFPWCxTQVBXLEVBUVgsU0FSVyxFQVNYLFNBVFcsRUFVWCxTQVZXLEVBV1gsU0FYVyxDQUFiO0FBY0EsSUFBTUMsT0FBTyxHQUFH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QUNxQixHQUFMLENBQVMsS0FBVCxFQUFnQnJCLElBQUksQ0FBQ3NCLEdBQUwsQ0FBU0YsR0FBVCxFQUFjLEtBQWQsQ0FBaEIsQ0FBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLE9BQUQ7QUFBUyxNQUFFLEVBQUMsU0FBWjtBQUFzQixhQUFTLEVBQUcsQ0FBQyxDQUFDckMsU0FBRixHQUFjLEVBQWQsR0FBbUIsYUFBckQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsNEJBQWEsR0FBYixrQ0FBOEMsR0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLHNCQUNFVixNQUFNLENBQUNrRCxHQUFQLENBQVcsVUFBQ0MsQ0FBRCxFQUFJN0MsQ0FBSixFQUFVO0FBQ25CLDRCQUNFLCtFQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFHRCxPQUpELENBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFXRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLZ0I7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBSyxDQUFDVixRQUFRLEdBQUcsR0FBWixFQUFpQndDLE9BQWpCLENBQXlCLENBQXpCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUEsb0JBQUsxQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQTVHdUJGLGE7O01BQUFBLGEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG91Y2hlbmQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxubGV0IGNvbG9ycyA9IFtcbiAgJyNFMEYyRjEnLFxuICAnI0IyREZEQicsXG4gICcjODBDQkM0JyxcbiAgJyM0REI2QUMnLFxuICAnIzI2QTY5QScsXG4gICcjMDA5Njg4JyxcbiAgJyMwMDg5N0InLFxuICAnIzAwNzk2QicsXG4gICcjMDA2OTVDJyxcbiAgJyMwMDRENDAnLFxuICAnI0UwRjJGMSdcbl07XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xuXG4gIC5saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAkeyAxMDAgKiBjb2xvcnMubGVuZ3RoIH12aDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcwJyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHsoKCkgPT4ge1xuICAgICAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBzdHlsZXMgKz0gYFxuICAgICAgICAgIGxpOm50aC1jaGlsZCgkeyBpICsgMSB9KSB7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7IDEwMCAvIGNvbG9ycy5sZW5ndGggfSU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyBjb2xvcnNbaV0gfTtcblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb2xvcjogJHsgaSA8IDcgfHwgOSA8IGkgPyAnIzAwMCcgOiAnI2ZmZicgfTtcbiAgICAgICAgICAgICAgY29udGVudDogJyR7IGkgPT09IDEwID8gMCA6IGkgfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzYCR7IHN0eWxlcyB9YDtcbiAgICB9KSgpfVxuICB9XG5cbiAgLmRlYnVnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDsgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDgwcHg7IGhlaWdodDogODBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbFdyYXBwZXIoKSB7XG4gIGNvbnN0IFsgZGlyZWN0aW9uLCBzZXREaXJlY3Rpb24gXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgWyBwcm9ncmVzcywgc2V0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGxhc3RQcm9ncmVzcywgc2V0TGFzdFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBzY3JvbGxQcm9ncmVzcywgc2V0U2Nyb2xsUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbIGNvbnRlbnRzSGVpZ2h0LCBzZXRDb250ZW50c0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgd2luZG93SGVpZ2h0LCBzZXRXaW5kb3dIZWlnaHQgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFksIHNldFNjcm9sbFkgXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIGluaXQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSwgW2RpcmVjdGlvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGlmZiA9IGxhc3RQcm9ncmVzcyAtIHByb2dyZXNzO1xuXG4gICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAuOTkpIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCdkb3duJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpcmVjdGlvbigndXAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMYXN0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICB9LCBbcHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2Nyb2xsUHJvZ3Jlc3MgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpICogc2Nyb2xsUHJvZ3Jlc3MpO1xuICAgIHNldFNjcm9sbFByb2dyZXNzKG51bGwpO1xuICB9LCBbc2Nyb2xsUHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZW50c0hlaWdodCAmJiB3aW5kb3dIZWlnaHQpIHtcbiAgICAgIHNldFByb2dyZXNzKHNjcm9sbFkgLyAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpKTtcbiAgICB9XG4gIH0sIFtzY3JvbGxZXSk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XG4gICAgICBjb25zdCBwYXJlbnQgPSB3cmFwcGVyLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgNTAwKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgwKSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKTogdm9pZCB7XG4gICAgc2V0Q29udGVudHNIZWlnaHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmNsaWVudEhlaWdodCk7XG4gICAgc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heCguMDAwMiwgTWF0aC5taW4odmFsLCAuOTk5OSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBpZD1cIndyYXBwZXJcIiBjbGFzc05hbWU9eyAhIWRpcmVjdGlvbiA/ICcnIDogJ3RyYW5zcGFyZW50JyB9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzdHlsZT5ib2R5IHsneyd9IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHsnfSd9PC9zdHlsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0XCI+IHtcbiAgICAgICAgY29sb3JzLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsgaSB9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH0gPC9vbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVidWdcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD57IHNjcm9sbFkgfTwvcD5cbiAgICAgICAgICA8cD57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9wPlxuICAgICAgICAgIDxwPnsgZGlyZWN0aW9uIH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/touchend/index.tsx\n");

/***/ })

})