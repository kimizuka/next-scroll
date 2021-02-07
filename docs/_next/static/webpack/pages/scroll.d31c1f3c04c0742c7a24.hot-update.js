webpackHotUpdate_N_E("pages/scroll",{

/***/ "./src/pages/scroll/index.tsx":
/*!************************************!*\
  !*** ./src/pages/scroll/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/scroll/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"scroll__Wrapper\",\n  componentId: \"sc-1eo5722-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scrollProgress = _useState3[0],\n      setScrollProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState4[0],\n      setLastProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastWarpTime = _useState9[0],\n      setLastWarpTime = _useState9[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(lastWarpTime - Date.now() < 100);\n\n    if (lastWarpTime - Date.now() < 100) {\n      return;\n    }\n\n    if (1 <= progress && direction === 'down') {\n      setScrollProgress(normalize(0));\n    } else if (progress <= 0 && direction === 'up') {\n      setScrollProgress(normalize(1));\n    }\n  }, [lastWarpTime]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    if (1 <= progress && direction === 'down') {\n      setLastWarpTime(Date.now());\n    } else if (progress <= 0 && direction === 'up') {\n      setLastWarpTime(Date.now());\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 262,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 259,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 268,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 269,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 267,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 266,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [colors.map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 282,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 289,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 272,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 258,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"hMeXOVRkS8b7qwskpKjLvyTCa2c=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Njcm9sbC9pbmRleC50c3g/MzliNiJdLCJuYW1lcyI6WyJjb2xvcnMiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwibGVuZ3RoIiwic3R5bGVzIiwiaSIsImNzcyIsIlNjcm9sbFdyYXBwZXIiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJzY3JvbGxQcm9ncmVzcyIsInNldFNjcm9sbFByb2dyZXNzIiwibGFzdFByb2dyZXNzIiwic2V0TGFzdFByb2dyZXNzIiwiY29udGVudHNIZWlnaHQiLCJzZXRDb250ZW50c0hlaWdodCIsIndpbmRvd0hlaWdodCIsInNldFdpbmRvd0hlaWdodCIsInNjcm9sbFkiLCJzZXRTY3JvbGxZIiwiQW5pbWF0aW9uIiwic3RhcnRWYWx1ZSIsInRhcmdldFZhbHVlIiwiZHVyYXRpb24iLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJsYXN0V2FycFRpbWUiLCJzZXRMYXN0V2FycFRpbWUiLCJ1c2VFZmZlY3QiLCJpbml0Iiwid2FycCIsImRpZmYiLCJNYXRoIiwiYWJzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzY3JvbGxYIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbmNlbFNjcm9sbCIsInBhc3NpdmUiLCJzdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwibm93Iiwibm9ybWFsaXplIiwiaGFuZGxlUmVzaXplIiwiZG9jdW1lbnQiLCJoYW5kbGVTY3JvbGwiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiaGFuZGxlQ2xpY2tCdG4iLCJ0YXJnZXRQcm9ncmVzcyIsInN0YXJ0UHJvZ3Jlc3MiLCJpc1JldmVyc2UiLCJlYXNpbmciLCJzdGVwIiwidmFsIiwibWF4IiwibWluIiwibWFwIiwiXyIsInRvRml4ZWQiLCJhcnIiXSwi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QUNNLFFBQVEsR0FBRyxHQUFaLEVBQWlCd0QsT0FBakIsQ0FBeUIsQ0FBekI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBSzFEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFjRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsaUJBRUlWLE1BQU0sQ0FBQ2tFLEdBQVAsQ0FBVyxVQUFDQyxDQUFELEVBQUk3RCxDQUFKLEVBQU8rRCxHQUFQLEVBQWU7QUFDeEIsWUFBSS9ELENBQUMsS0FBSytELEdBQUcsQ0FBQ2pFLE1BQUosR0FBYSxDQUF2QixFQUEwQjtBQUN4QjtBQUNEOztBQUVELFlBQU1RLFFBQVEsR0FBR04sQ0FBQyxJQUFJK0QsR0FBRyxDQUFDakUsTUFBSixHQUFhLENBQWpCLENBQWxCO0FBRUEsNEJBQ0U7QUFFRSxpQkFBTyxFQUFHO0FBQUEsbUJBQU1xRCxjQUFjLENBQUM3QyxRQUFELENBQXBCO0FBQUEsV0FGWjtBQUFBLG9CQUdHLENBQUNBLFFBQVEsR0FBRyxHQUFaLEVBQWlCd0QsT0FBakIsQ0FBeUIsQ0FBekI7QUFISCxXQUNROUQsQ0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBTUQsT0FiRCxDQUZKLGVBaUJFO0FBQUksZUFBTyxFQUFHO0FBQUEsaUJBQU1tRCxjQUFjLENBQUMsQ0FBRCxDQUFwQjtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7O0dBdk11QmpELGE7O01BQUFBLGEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2Nyb2xsL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL0FuaW1hdGlvbic7XG5cbmxldCBjb2xvcnMgPSBbXG4gICcjRTBGMkYxJyxcbiAgJyNCMkRGREInLFxuICAnIzgwQ0JDNCcsXG4gICcjNERCNkFDJyxcbiAgJyMyNkE2OUEnLFxuICAnIzAwOTY4OCcsXG4gICcjMDA4OTdCJyxcbiAgJyMwMDc5NkInLFxuICAnIzAwNjk1QycsXG4gICcjMDA0RDQwJyxcbiAgJyNFMEYyRjEnXG5dO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtcblxuICAubGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHsgMTAwICogY29sb3JzLmxlbmd0aCB9dmg7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnMCcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICR7KCgpID0+IHtcbiAgICAgIGxldCBzdHlsZXMgPSAnJztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3R5bGVzICs9IGBcbiAgICAgICAgICBsaTpudGgtY2hpbGQoJHsgaSArIDEgfSkge1xuICAgICAgICAgICAgaGVpZ2h0OiAkeyAxMDAgLyBjb2xvcnMubGVuZ3RoIH0lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHsgY29sb3JzW2ldIH07XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7IGkgPCA3IHx8IDkgPCBpID8gJyMwMDAnIDogJyNmZmYnIH07XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICckeyBpID09PSAxMCA/IDAgOiBpIH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc2AkeyBzdHlsZXMgfWA7XG4gICAgfSkoKX1cbiAgfVxuXG4gIC5kZWJ1ZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuICB9XG5cbiAgLmJ0bnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcblxuICAgICAgKyBsaSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbFdyYXBwZXIoKSB7XG4gIGNvbnN0IFsgZGlyZWN0aW9uLCBzZXREaXJlY3Rpb24gXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgWyBwcm9ncmVzcywgc2V0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzcyBdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFsgbGFzdFByb2dyZXNzLCBzZXRMYXN0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGNvbnRlbnRzSGVpZ2h0LCBzZXRDb250ZW50c0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgd2luZG93SGVpZ2h0LCBzZXRXaW5kb3dIZWlnaHQgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFksIHNldFNjcm9sbFkgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGFuaW1hdGlvbiwgc2V0QW5pbWF0aW9uIF0gPSB1c2VTdGF0ZShuZXcgQW5pbWF0aW9uKHtcbiAgICBzdGFydFZhbHVlOiAwLFxuICAgIHRhcmdldFZhbHVlOiAwLFxuICAgIGR1cmF0aW9uOiAxXG4gIH0pKTtcbiAgY29uc3QgWyBsYXN0V2FycFRpbWUsIHNldExhc3RXYXJwVGltZSBdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgaW5pdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FycCgpO1xuICB9LCBbZGlyZWN0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaWZmID0gbGFzdFByb2dyZXNzIC0gcHJvZ3Jlc3M7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdhcnAoKTtcbiAgICBzZXRMYXN0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICB9LCBbcHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2Nyb2xsUHJvZ3Jlc3MgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpICogc2Nyb2xsUHJvZ3Jlc3MpO1xuICAgIHNldFNjcm9sbFByb2dyZXNzKG51bGwpO1xuICB9LCBbc2Nyb2xsUHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkge1xuICAgICAgc2V0UHJvZ3Jlc3Moc2Nyb2xsWSAvIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkpO1xuICAgIH1cbiAgfSwgW3Njcm9sbFldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FuY2VsU2Nyb2xsKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGNhbmNlbFNjcm9sbCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNhbmNlbFNjcm9sbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsU2Nyb2xsKCkge1xuICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICB9XG4gIH0sIFthbmltYXRpb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGxhc3RXYXJwVGltZSAtIERhdGUubm93KCkgPCAxMDApO1xuICAgIGlmIChsYXN0V2FycFRpbWUgLSBEYXRlLm5vdygpIDwgMTAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKDEgPD0gcHJvZ3Jlc3MgJiYgZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgwKSk7XG4gICAgfSBlbHNlIGlmIChwcm9ncmVzcyA8PSAwICYmIGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKDEpKTtcbiAgICB9XG4gIH0sIFtsYXN0V2FycFRpbWVdKTtcblxuICBmdW5jdGlvbiBpbml0KCk6IHZvaWQge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdhcnAoKTogdm9pZCB7XG4gICAgaWYgKDEgPD0gcHJvZ3Jlc3MgJiYgZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHNldExhc3RXYXJwVGltZShEYXRlLm5vdygpKTtcbiAgICB9IGVsc2UgaWYgKHByb2dyZXNzIDw9IDAgJiYgZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICBzZXRMYXN0V2FycFRpbWUoRGF0ZS5ub3coKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCk6IHZvaWQge1xuICAgIHNldENvbnRlbnRzSGVpZ2h0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5jbGllbnRIZWlnaHQpO1xuICAgIHNldFdpbmRvd0hlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIHNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tCdG4odGFyZ2V0UHJvZ3Jlc3M6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICBjb25zdCBpc1JldmVyc2UgPSBNYXRoLmFicyh0YXJnZXRQcm9ncmVzcyAtIHN0YXJ0UHJvZ3Jlc3MpID4gLjU7XG4gICAgY29uc3QgZGlmZiA9IHRhcmdldFByb2dyZXNzIC0gc3RhcnRQcm9ncmVzcztcblxuICAgIHNldEFuaW1hdGlvbihcbiAgICAgIG5ldyBBbmltYXRpb24oe1xuICAgICAgICBzdGFydFZhbHVlOiAwLFxuICAgICAgICB0YXJnZXRWYWx1ZTogdGFyZ2V0UHJvZ3Jlc3MsXG4gICAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dCcsXG4gICAgICAgIHN0ZXA6IGlzUmV2ZXJzZSA/ICh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRpZmYgPCAwID8gMSA6IC0xO1xuXG4gICAgICAgICAgdmFsID0gc3RhcnRQcm9ncmVzcyArIGRpcmVjdGlvbiAqICgoMSAtIE1hdGguYWJzKGRpZmYpKSAqIHZhbCk7XG5cbiAgICAgICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICAgICAgdmFsID0gMSArIHZhbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKDEgPCB2YWwpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbCAtIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKHZhbCkpO1xuICAgICAgICB9IDogKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdmFsID0gc3RhcnRQcm9ncmVzcyArIGRpZmYgKiB2YWw7XG5cbiAgICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUodmFsKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4wMDAyLCBNYXRoLm1pbih2YWwsIC45OTk5KSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17ICEhZGlyZWN0aW9uID8gJycgOiAndHJhbnNwYXJlbnQnIH0+XG4gICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdFwiPiB7XG4gICAgICAgIGNvbG9ycy5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17IGkgfSAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9IDwvb2w+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYnVnXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+eyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgfTwvcD5cbiAgICAgICAgICA8cD57IGRpcmVjdGlvbiB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG9sIGNsYXNzTmFtZT1cImJ0bnNcIj5cbiAgICAgICAge1xuICAgICAgICAgIGNvbG9ycy5tYXAoKF8sIGksIGFycikgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpIC8gKGFyci5sZW5ndGggLSAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXsgaSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IGhhbmRsZUNsaWNrQnRuKHByb2dyZXNzKSB9XG4gICAgICAgICAgICAgID57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8bGkgb25DbGljaz17ICgpID0+IGhhbmRsZUNsaWNrQnRuKDEpIH0+MTAwPC9saT5cbiAgICAgIDwvb2w+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/scroll/index.tsx\n");

/***/ })

})