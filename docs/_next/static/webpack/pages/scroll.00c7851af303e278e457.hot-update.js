webpackHotUpdate_N_E("pages/scroll",{

/***/ "./src/pages/scroll/index.tsx":
/*!************************************!*\
  !*** ./src/pages/scroll/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/scroll/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"scroll__Wrapper\",\n  componentId: \"sc-1eo5722-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scrollProgress = _useState3[0],\n      setScrollProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState4[0],\n      setLastProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    console.log(direction);\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n    console.log(lastProgress, progress);\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    if (1 <= progress && direction === 'down') {\n      setScrollProgress(normalize(0));\n    } else if (progress <= 0 && direction === 'up') {\n      setScrollProgress(normalize(100));\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 252,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 249,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 258,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 259,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 257,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 256,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [colors.map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 272,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 279,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 262,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 248,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"qZ9Oxqc7+RaP7sAykFvZ9nSiSx0=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Njcm9sbC9pbmRleC50c3g/MzliNiJdLCJuYW1lcyI6WyJjb2xvcnMiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwibGVuZ3RoIiwic3R5bGVzIiwiaSIsImNzcyIsIlNjcm9sbFdyYXBwZXIiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJzY3JvbGxQcm9ncmVzcyIsInNldFNjcm9sbFByb2dyZXNzIiwibGFzdFByb2dyZXNzIiwic2V0TGFzdFByb2dyZXNzIiwiY29udGVudHNIZWlnaHQiLCJzZXRDb250ZW50c0hlaWdodCIsIndpbmRvd0hlaWdodCIsInNldFdpbmRvd0hlaWdodCIsInNjcm9sbFkiLCJzZXRTY3JvbGxZIiwiQW5pbWF0aW9uIiwic3RhcnRWYWx1ZSIsInRhcmdldFZhbHVlIiwiZHVyYXRpb24iLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJpbml0IiwiY29uc29sZSIsImxvZyIsIndhcnAiLCJkaWZmIiwiTWF0aCIsImFicyIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW5jZWxTY3JvbGwiLCJwYXNzaXZlIiwic3RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSZXNpemUiLCJkb2N1bWVudCIsImhhbmRsZVNjcm9sbCIsIm5vcm1hbGl6ZSIsImdldEVsZW1lbnRCeUlkIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoYW5kbGVDbGlja0J0biIsInRhcmdldFByb2dyZXNzIiwic3RhcnRQcm9ncmVzcyIsImlzUmV2ZXJzZSIsImVhc2luZyIsInN0ZXAiLCJ2YWwiLCJtYXgiLCJtaW4iLCJtYXAiLCJfIiwidG9GaXhlZCIsImFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElB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LENBQUN6QyxRQUFELENBQXBCO0FBQUEsV0FGWjtBQUFBLG9CQUdHLENBQUNBLFFBQVEsR0FBRyxHQUFaLEVBQWlCb0QsT0FBakIsQ0FBeUIsQ0FBekI7QUFISCxXQUNRMUQsQ0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBTUQsT0FiRCxDQUZKLGVBaUJFO0FBQUksZUFBTyxFQUFHO0FBQUEsaUJBQU0rQyxjQUFjLENBQUMsQ0FBRCxDQUFwQjtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7O0dBN0x1QjdDLGE7O01BQUFBLGEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2Nyb2xsL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL0FuaW1hdGlvbic7XG5cbmxldCBjb2xvcnMgPSBbXG4gICcjRTBGMkYxJyxcbiAgJyNCMkRGREInLFxuICAnIzgwQ0JDNCcsXG4gICcjNERCNkFDJyxcbiAgJyMyNkE2OUEnLFxuICAnIzAwOTY4OCcsXG4gICcjMDA4OTdCJyxcbiAgJyMwMDc5NkInLFxuICAnIzAwNjk1QycsXG4gICcjMDA0RDQwJyxcbiAgJyNFMEYyRjEnXG5dO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtcblxuICAubGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHsgMTAwICogY29sb3JzLmxlbmd0aCB9dmg7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnMCcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICR7KCgpID0+IHtcbiAgICAgIGxldCBzdHlsZXMgPSAnJztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3R5bGVzICs9IGBcbiAgICAgICAgICBsaTpudGgtY2hpbGQoJHsgaSArIDEgfSkge1xuICAgICAgICAgICAgaGVpZ2h0OiAkeyAxMDAgLyBjb2xvcnMubGVuZ3RoIH0lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHsgY29sb3JzW2ldIH07XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7IGkgPCA3IHx8IDkgPCBpID8gJyMwMDAnIDogJyNmZmYnIH07XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICckeyBpID09PSAxMCA/IDAgOiBpIH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc2AkeyBzdHlsZXMgfWA7XG4gICAgfSkoKX1cbiAgfVxuXG4gIC5kZWJ1ZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuICB9XG5cbiAgLmJ0bnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcblxuICAgICAgKyBsaSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbFdyYXBwZXIoKSB7XG4gIGNvbnN0IFsgZGlyZWN0aW9uLCBzZXREaXJlY3Rpb24gXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbIHByb2dyZXNzLCBzZXRQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsUHJvZ3Jlc3MsIHNldFNjcm9sbFByb2dyZXNzIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgWyBsYXN0UHJvZ3Jlc3MsIHNldExhc3RQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgY29udGVudHNIZWlnaHQsIHNldENvbnRlbnRzSGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyB3aW5kb3dIZWlnaHQsIHNldFdpbmRvd0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsWSwgc2V0U2Nyb2xsWSBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgYW5pbWF0aW9uLCBzZXRBbmltYXRpb24gXSA9IHVzZVN0YXRlKG5ldyBBbmltYXRpb24oe1xuICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgdGFyZ2V0VmFsdWU6IDAsXG4gICAgZHVyYXRpb246IDFcbiAgfSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIGluaXQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGRpcmVjdGlvbik7XG5cbiAgICB3YXJwKCk7XG4gIH0sIFtkaXJlY3Rpb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRpZmYgPSBsYXN0UHJvZ3Jlc3MgLSBwcm9ncmVzcztcblxuICAgIGNvbnNvbGUubG9nKGxhc3RQcm9ncmVzcywgcHJvZ3Jlc3MpO1xuXG4gICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAuOTkpIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCdkb3duJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpcmVjdGlvbigndXAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YXJwKCk7XG4gICAgc2V0TGFzdFByb2dyZXNzKHByb2dyZXNzKTtcbiAgfSwgW3Byb2dyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHNjcm9sbFByb2dyZXNzICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSAqIHNjcm9sbFByb2dyZXNzKTtcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhudWxsKTtcbiAgfSwgW3Njcm9sbFByb2dyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpIHtcbiAgICAgIHNldFByb2dyZXNzKHNjcm9sbFkgLyAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpKTtcbiAgICB9XG4gIH0sIFtzY3JvbGxZXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbFNjcm9sbCgpIHtcbiAgICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgfVxuICB9LCBbYW5pbWF0aW9uXSk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgwKSk7XG4gIH1cblxuICBmdW5jdGlvbiB3YXJwKCk6IHZvaWQge1xuICAgIGlmICgxIDw9IHByb2dyZXNzICYmIGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMCkpO1xuICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPD0gMCAmJiBkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgxMDApKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKTogdm9pZCB7XG4gICAgc2V0Q29udGVudHNIZWlnaHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmNsaWVudEhlaWdodCk7XG4gICAgc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja0J0bih0YXJnZXRQcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgIGNvbnN0IGlzUmV2ZXJzZSA9IE1hdGguYWJzKHRhcmdldFByb2dyZXNzIC0gc3RhcnRQcm9ncmVzcykgPiAuNTtcbiAgICBjb25zdCBkaWZmID0gdGFyZ2V0UHJvZ3Jlc3MgLSBzdGFydFByb2dyZXNzO1xuXG4gICAgc2V0QW5pbWF0aW9uKFxuICAgICAgbmV3IEFuaW1hdGlvbih7XG4gICAgICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgICAgIHRhcmdldFZhbHVlOiB0YXJnZXRQcm9ncmVzcyxcbiAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcbiAgICAgICAgc3RlcDogaXNSZXZlcnNlID8gKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZGlmZiA8IDAgPyAxIDogLTE7XG5cbiAgICAgICAgICB2YWwgPSBzdGFydFByb2dyZXNzICsgZGlyZWN0aW9uICogKCgxIC0gTWF0aC5hYnMoZGlmZikpICogdmFsKTtcblxuICAgICAgICAgIGlmICh2YWwgPCAwKSB7XG4gICAgICAgICAgICB2YWwgPSAxICsgdmFsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoMSA8IHZhbCkge1xuICAgICAgICAgICAgdmFsID0gdmFsIC0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUodmFsKSk7XG4gICAgICAgIH0gOiAodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICB2YWwgPSBzdGFydFByb2dyZXNzICsgZGlmZiAqIHZhbDtcblxuICAgICAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLjAwMDIsIE1hdGgubWluKHZhbCwgLjk5OTkpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPXsgISFkaXJlY3Rpb24gPyAnJyA6ICd0cmFuc3BhcmVudCcgfT5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0XCI+IHtcbiAgICAgICAgY29sb3JzLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsgaSB9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH0gPC9vbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVidWdcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9wPlxuICAgICAgICAgIDxwPnsgZGlyZWN0aW9uIH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8b2wgY2xhc3NOYW1lPVwiYnRuc1wiPlxuICAgICAgICB7XG4gICAgICAgICAgY29sb3JzLm1hcCgoXywgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGkgLyAoYXJyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9eyBpIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2xpY2tCdG4ocHJvZ3Jlc3MpIH1cbiAgICAgICAgICAgICAgPnsgKHByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpIH08L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2xpY2tCdG4oMSkgfT4xMDA8L2xpPlxuICAgICAgPC9vbD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/scroll/index.tsx\n");

/***/ })

})