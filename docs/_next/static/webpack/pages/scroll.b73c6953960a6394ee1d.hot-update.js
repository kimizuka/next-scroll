webpackHotUpdate_N_E("pages/scroll",{

/***/ "./src/pages/scroll/index.tsx":
/*!************************************!*\
  !*** ./src/pages/scroll/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/scroll/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"scroll__Wrapper\",\n  componentId: \"sc-1eo5722-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scrollProgress = _useState3[0],\n      setScrollProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState4[0],\n      setLastProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastWarpTime = _useState9[0],\n      setLastWarpTime = _useState9[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    console.log(lastWarpTime);\n\n    if (1 <= progress && direction === 'down') {\n      setScrollProgress(normalize(0));\n      setLastWarpTime(Date.now());\n    } else if (progress <= 0 && direction === 'up') {\n      setScrollProgress(normalize(1));\n      setLastWarpTime(Date.now());\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 253,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 250,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 259,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 260,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 258,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 257,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [colors.map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 273,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 280,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 263,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 249,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"VnqoaWNw7PGrh1PuiLaHgcbO1D8=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Njcm9sbC9pbmRleC50c3g/MzliNiJdLCJuYW1lcyI6WyJjb2xvcnMiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwibGVuZ3RoIiwic3R5bGVzIiwiaSIsImNzcyIsIlNjcm9sbFdyYXBwZXIiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJzY3JvbGxQcm9ncmVzcyIsInNldFNjcm9sbFByb2dyZXNzIiwibGFzdFByb2dyZXNzIiwic2V0TGFzdFByb2dyZXNzIiwiY29udGVudHNIZWlnaHQiLCJzZXRDb250ZW50c0hlaWdodCIsIndpbmRvd0hlaWdodCIsInNldFdpbmRvd0hlaWdodCIsInNjcm9sbFkiLCJzZXRTY3JvbGxZIiwiQW5pbWF0aW9uIiwic3RhcnRWYWx1ZSIsInRhcmdldFZhbHVlIiwiZHVyYXRpb24iLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJsYXN0V2FycFRpbWUiLCJzZXRMYXN0V2FycFRpbWUiLCJ1c2VFZmZlY3QiLCJpbml0Iiwid2FycCIsImRpZmYiLCJNYXRoIiwiYWJzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzY3JvbGxYIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbmNlbFNjcm9sbCIsInBhc3NpdmUiLCJzdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJlc2l6ZSIsImRvY3VtZW50IiwiaGFuZGxlU2Nyb2xsIiwibm9ybWFsaXplIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJub3ciLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiaGFuZGxlQ2xpY2tCdG4iLCJ0YXJnZXRQcm9ncmVzcyIsInN0YXJ0UHJvZ3Jlc3MiLCJpc1JldmVyc2UiLCJlYXNpbmciLCJzdGVwIiwidmFsIiwibWF4IiwibWluIiwibWFwIiwiXyIsInRvRml4ZWQiLCJhcnIiXSwi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QUFLK0QsR0FBRyxDQUFDakUsTUFBSixHQUFhLENBQXZCLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUQsWUFBTVEsUUFBUSxHQUFHTixDQUFDLElBQUkrRCxHQUFHLENBQUNqRSxNQUFKLEdBQWEsQ0FBakIsQ0FBbEI7QUFFQSw0QkFDRTtBQUVFLGlCQUFPLEVBQUc7QUFBQSxtQkFBTXFELGNBQWMsQ0FBQzdDLFFBQUQsQ0FBcEI7QUFBQSxXQUZaO0FBQUEsb0JBR0csQ0FBQ0EsUUFBUSxHQUFHLEdBQVosRUFBaUJ3RCxPQUFqQixDQUF5QixDQUF6QjtBQUhILFdBQ1E5RCxDQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFNRCxPQWJELENBRkosZUFpQkU7QUFBSSxlQUFPLEVBQUc7QUFBQSxpQkFBTW1ELGNBQWMsQ0FBQyxDQUFELENBQXBCO0FBQUEsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9DRDs7R0E5THVCakQsYTs7TUFBQUEsYSIsImZpbGUiOiIuL3NyYy9wYWdlcy9zY3JvbGwvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEFuaW1hdGlvbiBmcm9tICcuLi8uLi9hc3NldHMvanMvQW5pbWF0aW9uJztcblxubGV0IGNvbG9ycyA9IFtcbiAgJyNFMEYyRjEnLFxuICAnI0IyREZEQicsXG4gICcjODBDQkM0JyxcbiAgJyM0REI2QUMnLFxuICAnIzI2QTY5QScsXG4gICcjMDA5Njg4JyxcbiAgJyMwMDg5N0InLFxuICAnIzAwNzk2QicsXG4gICcjMDA2OTVDJyxcbiAgJyMwMDRENDAnLFxuICAnI0UwRjJGMSdcbl07XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xuXG4gIC5saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAkeyAxMDAgKiBjb2xvcnMubGVuZ3RoIH12aDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcwJyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHsoKCkgPT4ge1xuICAgICAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBzdHlsZXMgKz0gYFxuICAgICAgICAgIGxpOm50aC1jaGlsZCgkeyBpICsgMSB9KSB7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7IDEwMCAvIGNvbG9ycy5sZW5ndGggfSU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyBjb2xvcnNbaV0gfTtcblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb2xvcjogJHsgaSA8IDcgfHwgOSA8IGkgPyAnIzAwMCcgOiAnI2ZmZicgfTtcbiAgICAgICAgICAgICAgY29udGVudDogJyR7IGkgPT09IDEwID8gMCA6IGkgfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzYCR7IHN0eWxlcyB9YDtcbiAgICB9KSgpfVxuICB9XG5cbiAgLmRlYnVnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDsgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDgwcHg7IGhlaWdodDogODBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG4gIH1cblxuICAuYnRucyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDsgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuXG4gICAgICArIGxpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsV3JhcHBlcigpIHtcbiAgY29uc3QgWyBkaXJlY3Rpb24sIHNldERpcmVjdGlvbiBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIHByb2dyZXNzLCBzZXRQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsUHJvZ3Jlc3MsIHNldFNjcm9sbFByb2dyZXNzIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgWyBsYXN0UHJvZ3Jlc3MsIHNldExhc3RQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgY29udGVudHNIZWlnaHQsIHNldENvbnRlbnRzSGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyB3aW5kb3dIZWlnaHQsIHNldFdpbmRvd0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsWSwgc2V0U2Nyb2xsWSBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgYW5pbWF0aW9uLCBzZXRBbmltYXRpb24gXSA9IHVzZVN0YXRlKG5ldyBBbmltYXRpb24oe1xuICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgdGFyZ2V0VmFsdWU6IDAsXG4gICAgZHVyYXRpb246IDFcbiAgfSkpO1xuICBjb25zdCBbIGxhc3RXYXJwVGltZSwgc2V0TGFzdFdhcnBUaW1lIF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICBpbml0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJwKCk7XG4gIH0sIFtkaXJlY3Rpb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRpZmYgPSBsYXN0UHJvZ3Jlc3MgLSBwcm9ncmVzcztcblxuICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbigndXAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAuOTkpIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCdkb3duJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2FycCgpO1xuICAgIHNldExhc3RQcm9ncmVzcyhwcm9ncmVzcyk7XG4gIH0sIFtwcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzY3JvbGxQcm9ncmVzcyAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkgKiBzY3JvbGxQcm9ncmVzcyk7XG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3MobnVsbCk7XG4gIH0sIFtzY3JvbGxQcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSB7XG4gICAgICBzZXRQcm9ncmVzcyhzY3JvbGxZIC8gKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSk7XG4gICAgfVxuICB9LCBbc2Nyb2xsWV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgY2FuY2VsU2Nyb2xsKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2FuY2VsU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxTY3JvbGwoKSB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIH1cbiAgfSwgW2FuaW1hdGlvbl0pO1xuXG4gIGZ1bmN0aW9uIGluaXQoKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FycCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhsYXN0V2FycFRpbWUpO1xuXG4gICAgaWYgKDEgPD0gcHJvZ3Jlc3MgJiYgZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgwKSk7XG4gICAgICBzZXRMYXN0V2FycFRpbWUoRGF0ZS5ub3coKSk7XG4gICAgfSBlbHNlIGlmIChwcm9ncmVzcyA8PSAwICYmIGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKDEpKTtcbiAgICAgIHNldExhc3RXYXJwVGltZShEYXRlLm5vdygpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKTogdm9pZCB7XG4gICAgc2V0Q29udGVudHNIZWlnaHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmNsaWVudEhlaWdodCk7XG4gICAgc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja0J0bih0YXJnZXRQcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgIGNvbnN0IGlzUmV2ZXJzZSA9IE1hdGguYWJzKHRhcmdldFByb2dyZXNzIC0gc3RhcnRQcm9ncmVzcykgPiAuNTtcbiAgICBjb25zdCBkaWZmID0gdGFyZ2V0UHJvZ3Jlc3MgLSBzdGFydFByb2dyZXNzO1xuXG4gICAgc2V0QW5pbWF0aW9uKFxuICAgICAgbmV3IEFuaW1hdGlvbih7XG4gICAgICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgICAgIHRhcmdldFZhbHVlOiB0YXJnZXRQcm9ncmVzcyxcbiAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcbiAgICAgICAgc3RlcDogaXNSZXZlcnNlID8gKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZGlmZiA8IDAgPyAxIDogLTE7XG5cbiAgICAgICAgICB2YWwgPSBzdGFydFByb2dyZXNzICsgZGlyZWN0aW9uICogKCgxIC0gTWF0aC5hYnMoZGlmZikpICogdmFsKTtcblxuICAgICAgICAgIGlmICh2YWwgPCAwKSB7XG4gICAgICAgICAgICB2YWwgPSAxICsgdmFsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoMSA8IHZhbCkge1xuICAgICAgICAgICAgdmFsID0gdmFsIC0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUodmFsKSk7XG4gICAgICAgIH0gOiAodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICB2YWwgPSBzdGFydFByb2dyZXNzICsgZGlmZiAqIHZhbDtcblxuICAgICAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLjAwMDIsIE1hdGgubWluKHZhbCwgLjk5OTkpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPXsgISFkaXJlY3Rpb24gPyAnJyA6ICd0cmFuc3BhcmVudCcgfT5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0XCI+IHtcbiAgICAgICAgY29sb3JzLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsgaSB9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH0gPC9vbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVidWdcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9wPlxuICAgICAgICAgIDxwPnsgZGlyZWN0aW9uIH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8b2wgY2xhc3NOYW1lPVwiYnRuc1wiPlxuICAgICAgICB7XG4gICAgICAgICAgY29sb3JzLm1hcCgoXywgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGkgLyAoYXJyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9eyBpIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2xpY2tCdG4ocHJvZ3Jlc3MpIH1cbiAgICAgICAgICAgICAgPnsgKHByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpIH08L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2xpY2tCdG4oMSkgfT4xMDA8L2xpPlxuICAgICAgPC9vbD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/scroll/index.tsx\n");

/***/ })

})