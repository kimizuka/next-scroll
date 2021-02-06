webpackHotUpdate_N_E("pages/scroll",{

/***/ "./src/pages/scroll/index.tsx":
/*!************************************!*\
  !*** ./src/pages/scroll/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/scroll/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"scroll__Wrapper\",\n  componentId: \"sc-1eo5722-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollProgress = _useState3[0],\n      setScrollProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState4[0],\n      setLastProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    if (1 <= progress && direction === 'down') {\n      setScrollProgress(normalize(0));\n    } else if (progress <= 0 && direction === 'up') {\n      setScrollProgress(normalize(1));\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 248,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 245,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 254,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 255,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 253,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 252,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [colors.map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 268,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 275,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 258,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 244,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"67TQg13/oVz+gUfpSdOD5ucq/yI=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Njcm9sbC9pbmRleC50c3g/MzliNiJdLCJuYW1lcyI6WyJjb2xvcnMiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwibGVuZ3RoIiwic3R5bGVzIiwiaSIsImNzcyIsIlNjcm9sbFdyYXBwZXIiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJzY3JvbGxQcm9ncmVzcyIsInNldFNjcm9sbFByb2dyZXNzIiwibGFzdFByb2dyZXNzIiwic2V0TGFzdFByb2dyZXNzIiwiY29udGVudHNIZWlnaHQiLCJzZXRDb250ZW50c0hlaWdodCIsIndpbmRvd0hlaWdodCIsInNldFdpbmRvd0hlaWdodCIsInNjcm9sbFkiLCJzZXRTY3JvbGxZIiwiQW5pbWF0aW9uIiwic3RhcnRWYWx1ZSIsInRhcmdldFZhbHVlIiwiZHVyYXRpb24iLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJpbml0Iiwid2FycCIsImRpZmYiLCJNYXRoIiwiYWJzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzY3JvbGxYIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbmNlbFNjcm9sbCIsInBhc3NpdmUiLCJzdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJlc2l6ZSIsImRvY3VtZW50IiwiaGFuZGxlU2Nyb2xsIiwibm9ybWFsaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImhhbmRsZUNsaWNrQnRuIiwidGFyZ2V0UHJvZ3Jlc3MiLCJzdGFydFByb2dyZXNzIiwiaXNSZXZlcnNlIiwiZWFzaW5nIiwic3RlcCIsInZhbCIsIm1heCIsIm1pbiIsIm1hcCIsIl8iLCJ0b0ZpeGVkIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHLENB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QUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBTUQsT0FiRCxDQUZKLGVBaUJFO0FBQUksZUFBTyxFQUFHO0FBQUEsaUJBQU02QyxjQUFjLENBQUMsQ0FBRCxDQUFwQjtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7O0dBekx1QjNDLGE7O01BQUFBLGEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2Nyb2xsL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL0FuaW1hdGlvbic7XG5cbmxldCBjb2xvcnMgPSBbXG4gICcjRTBGMkYxJyxcbiAgJyNCMkRGREInLFxuICAnIzgwQ0JDNCcsXG4gICcjNERCNkFDJyxcbiAgJyMyNkE2OUEnLFxuICAnIzAwOTY4OCcsXG4gICcjMDA4OTdCJyxcbiAgJyMwMDc5NkInLFxuICAnIzAwNjk1QycsXG4gICcjMDA0RDQwJyxcbiAgJyNFMEYyRjEnXG5dO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtcblxuICAubGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHsgMTAwICogY29sb3JzLmxlbmd0aCB9dmg7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnMCcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICR7KCgpID0+IHtcbiAgICAgIGxldCBzdHlsZXMgPSAnJztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3R5bGVzICs9IGBcbiAgICAgICAgICBsaTpudGgtY2hpbGQoJHsgaSArIDEgfSkge1xuICAgICAgICAgICAgaGVpZ2h0OiAkeyAxMDAgLyBjb2xvcnMubGVuZ3RoIH0lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHsgY29sb3JzW2ldIH07XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7IGkgPCA3IHx8IDkgPCBpID8gJyMwMDAnIDogJyNmZmYnIH07XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICckeyBpID09PSAxMCA/IDAgOiBpIH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc2AkeyBzdHlsZXMgfWA7XG4gICAgfSkoKX1cbiAgfVxuXG4gIC5kZWJ1ZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuICB9XG5cbiAgLmJ0bnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcblxuICAgICAgKyBsaSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbFdyYXBwZXIoKSB7XG4gIGNvbnN0IFsgZGlyZWN0aW9uLCBzZXREaXJlY3Rpb24gXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgWyBwcm9ncmVzcywgc2V0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgbGFzdFByb2dyZXNzLCBzZXRMYXN0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGNvbnRlbnRzSGVpZ2h0LCBzZXRDb250ZW50c0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgd2luZG93SGVpZ2h0LCBzZXRXaW5kb3dIZWlnaHQgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFksIHNldFNjcm9sbFkgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGFuaW1hdGlvbiwgc2V0QW5pbWF0aW9uIF0gPSB1c2VTdGF0ZShuZXcgQW5pbWF0aW9uKHtcbiAgICBzdGFydFZhbHVlOiAwLFxuICAgIHRhcmdldFZhbHVlOiAwLFxuICAgIGR1cmF0aW9uOiAxXG4gIH0pKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICBpbml0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJwKCk7XG4gIH0sIFtkaXJlY3Rpb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRpZmYgPSBsYXN0UHJvZ3Jlc3MgLSBwcm9ncmVzcztcblxuICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbigndXAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAuOTkpIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCdkb3duJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2FycCgpO1xuICAgIHNldExhc3RQcm9ncmVzcyhwcm9ncmVzcyk7XG4gIH0sIFtwcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzY3JvbGxQcm9ncmVzcyAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkgKiBzY3JvbGxQcm9ncmVzcyk7XG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3MobnVsbCk7XG4gIH0sIFtzY3JvbGxQcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSB7XG4gICAgICBzZXRQcm9ncmVzcyhzY3JvbGxZIC8gKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSk7XG4gICAgfVxuICB9LCBbc2Nyb2xsWV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgY2FuY2VsU2Nyb2xsKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2FuY2VsU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxTY3JvbGwoKSB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIH1cbiAgfSwgW2FuaW1hdGlvbl0pO1xuXG4gIGZ1bmN0aW9uIGluaXQoKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FycCgpOiB2b2lkIHtcbiAgICBpZiAoMSA8PSBwcm9ncmVzcyAmJiBkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKDApKTtcbiAgICB9IGVsc2UgaWYgKHByb2dyZXNzIDw9IDAgJiYgZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpOiB2b2lkIHtcbiAgICBzZXRDb250ZW50c0hlaWdodChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuY2xpZW50SGVpZ2h0KTtcbiAgICBzZXRXaW5kb3dIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBzZXRTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrQnRuKHRhcmdldFByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgY29uc3QgaXNSZXZlcnNlID0gTWF0aC5hYnModGFyZ2V0UHJvZ3Jlc3MgLSBzdGFydFByb2dyZXNzKSA+IC41O1xuICAgIGNvbnN0IGRpZmYgPSB0YXJnZXRQcm9ncmVzcyAtIHN0YXJ0UHJvZ3Jlc3M7XG5cbiAgICBzZXRBbmltYXRpb24oXG4gICAgICBuZXcgQW5pbWF0aW9uKHtcbiAgICAgICAgc3RhcnRWYWx1ZTogMCxcbiAgICAgICAgdGFyZ2V0VmFsdWU6IHRhcmdldFByb2dyZXNzLFxuICAgICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxuICAgICAgICBzdGVwOiBpc1JldmVyc2UgPyAodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkaWZmIDwgMCA/IDEgOiAtMTtcblxuICAgICAgICAgIHZhbCA9IHN0YXJ0UHJvZ3Jlc3MgKyBkaXJlY3Rpb24gKiAoKDEgLSBNYXRoLmFicyhkaWZmKSkgKiB2YWwpO1xuXG4gICAgICAgICAgaWYgKHZhbCA8IDApIHtcbiAgICAgICAgICAgIHZhbCA9IDEgKyB2YWw7XG4gICAgICAgICAgfSBlbHNlIGlmICgxIDwgdmFsKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwgLSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSh2YWwpKTtcbiAgICAgICAgfSA6ICh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHZhbCA9IHN0YXJ0UHJvZ3Jlc3MgKyBkaWZmICogdmFsO1xuXG4gICAgICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heCguMDAwMiwgTWF0aC5taW4odmFsLCAuOTk5OSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9eyAhIWRpcmVjdGlvbiA/ICcnIDogJ3RyYW5zcGFyZW50JyB9PlxuICAgICAgPG9sIGNsYXNzTmFtZT1cImxpc3RcIj4ge1xuICAgICAgICBjb2xvcnMubWFwKChfLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9eyBpIH0gLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfSA8L29sPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWJ1Z1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPnsgKHByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpIH08L3A+XG4gICAgICAgICAgPHA+eyBkaXJlY3Rpb24gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJidG5zXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcnMubWFwKChfLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gaSAvIChhcnIubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17IGkgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGlja0J0bihwcm9ncmVzcykgfVxuICAgICAgICAgICAgICA+eyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgfTwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPGxpIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGlja0J0bigxKSB9PjEwMDwvbGk+XG4gICAgICA8L29sPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/scroll/index.tsx\n");

/***/ })

})