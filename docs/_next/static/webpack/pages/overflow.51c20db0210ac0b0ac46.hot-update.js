webpackHotUpdate_N_E("pages/overflow",{

/***/ "./src/pages/overflow/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/overflow/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/overflow/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"overflow__Wrapper\",\n  componentId: \"sc-6syl96-0\"\n})([\"position:fixed;top:0;bottom:0;left:0;right:0;transition:opacity .2s ease-in-out;overflow:scroll;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState3[0],\n      setLastProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scrollProgress = _useState4[0],\n      setScrollProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var wrapperInnerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    wrapperRef.current.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight && windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    wrapperRef.current.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    wrapperRef.current.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    wrapperRef.current.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      wrapperRef.current.removeEventListener('mousedown', cancelScroll);\n      wrapperRef.current.removeEventListener('wheel', cancelScroll);\n      wrapperRef.current.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    if (1 <= progress && direction === 'down') {\n      setScrollProgress(normalize(0));\n    } else if (progress <= 0 && direction === 'up') {\n      setScrollProgress(normalize(1));\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(wrapperInnerRef.current.clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(wrapperRef.current.scrollTop);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    onScroll: handleScroll,\n    ref: wrapperRef,\n    id: \"wrapper\",\n    className: !!direction ? '' : 'transparent',\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      ref: wrapperInnerRef,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n        className: \"list\",\n        children: [\" \", colors.map(function (_, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 253,\n            columnNumber: 15\n          }, _this);\n        }), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 250,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"debug\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: scrollY\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 259,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: (progress * 100).toFixed(2)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 260,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: direction\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 261,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 258,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 257,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n        className: \"btns\",\n        children: [colors.map(function (_, i, arr) {\n          if (i === arr.length - 1) {\n            return;\n          }\n\n          var progress = i / (arr.length - 1);\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            onClick: function onClick() {\n              return handleClickBtn(progress);\n            },\n            children: (progress * 100).toFixed(2)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 274,\n            columnNumber: 17\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(1);\n          },\n          children: \"100\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 281,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 264,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 249,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 243,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"EE+nQhxHamPSBgBNNpXN8xKY6v4=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL292ZXJmbG93L2luZGV4LnRzeD8wODA4Il0sIm5hbWVzIjpbImNvbG9ycyIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJsZW5ndGgiLCJzdHlsZXMiLCJpIiwiY3NzIiwiU2Nyb2xsV3JhcHBlciIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImxhc3RQcm9ncmVzcyIsInNldExhc3RQcm9ncmVzcyIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJjb250ZW50c0hlaWdodCIsInNldENvbnRlbnRzSGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJBbmltYXRpb24iLCJzdGFydFZhbHVlIiwidGFyZ2V0VmFsdWUiLCJkdXJhdGlvbiIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsIndyYXBwZXJSZWYiLCJ1c2VSZWYiLCJ3cmFwcGVySW5uZXJSZWYiLCJ1c2VFZmZlY3QiLCJpbml0IiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJ3YXJwIiwiY3VycmVudCIsInNjcm9sbFRvIiwid2luZG93Iiwic2Nyb2xsWCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW5jZWxTY3JvbGwiLCJwYXNzaXZlIiwic3RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSZXNpemUiLCJub3JtYWxpemUiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsImhhbmRsZUNsaWNrQnRuIiwidGFyZ2V0UHJvZ3Jlc3MiLCJzdGFydFByb2dyZXNzIiwiaXNSZXZlcnNlIiwiZWFzaW5nIiwic3RlcCIsInZhbCIsIm1heCIsIm1pbiIsIm1hcCIsIl8iLCJ0b0ZpeGVkIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FB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STVELENBQUMsS0FBSzRELEdBQUcsQ0FBQzlELE1BQUosR0FBYSxDQUF2QixFQUEwQjtBQUN4QjtBQUNEOztBQUVELGNBQU1RLFFBQVEsR0FBR04sQ0FBQyxJQUFJNEQsR0FBRyxDQUFDOUQsTUFBSixHQUFhLENBQWpCLENBQWxCO0FBRUEsOEJBQ0U7QUFFRSxtQkFBTyxFQUFHO0FBQUEscUJBQU1rRCxjQUFjLENBQUMxQyxRQUFELENBQXBCO0FBQUEsYUFGWjtBQUFBLHNCQUdHLENBQUNBLFFBQVEsR0FBRyxHQUFaLEVBQWlCcUQsT0FBakIsQ0FBeUIsQ0FBekI7QUFISCxhQUNRM0QsQ0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBTUQsU0FiRCxDQUZKLGVBaUJFO0FBQUksaUJBQU8sRUFBRztBQUFBLG1CQUFNZ0QsY0FBYyxDQUFDLENBQUQsQ0FBcEI7QUFBQSxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0Q0Q7O0dBN0x1QjlDLGE7O01BQUFBLGEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvb3ZlcmZsb3cvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9BbmltYXRpb24nO1xuXG5sZXQgY29sb3JzID0gW1xuICAnI0UwRjJGMScsXG4gICcjQjJERkRCJyxcbiAgJyM4MENCQzQnLFxuICAnIzREQjZBQycsXG4gICcjMjZBNjlBJyxcbiAgJyMwMDk2ODgnLFxuICAnIzAwODk3QicsXG4gICcjMDA3OTZCJyxcbiAgJyMwMDY5NUMnLFxuICAnIzAwNEQ0MCcsXG4gICcjRTBGMkYxJ1xuXTtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwOyBib3R0b206IDA7XG4gIGxlZnQ6IDA7IHJpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAubGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHsgMTAwICogY29sb3JzLmxlbmd0aCB9dmg7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnMCcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICR7KCgpID0+IHtcbiAgICAgIGxldCBzdHlsZXMgPSAnJztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3R5bGVzICs9IGBcbiAgICAgICAgICBsaTpudGgtY2hpbGQoJHsgaSArIDEgfSkge1xuICAgICAgICAgICAgaGVpZ2h0OiAkeyAxMDAgLyBjb2xvcnMubGVuZ3RoIH0lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHsgY29sb3JzW2ldIH07XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7IGkgPCA3IHx8IDkgPCBpID8gJyMwMDAnIDogJyNmZmYnIH07XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICckeyBpID09PSAxMCA/IDAgOiBpIH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc2AkeyBzdHlsZXMgfWA7XG4gICAgfSkoKX1cbiAgfVxuXG4gIC5kZWJ1ZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuICB9XG5cbiAgLmJ0bnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcblxuICAgICAgKyBsaSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbFdyYXBwZXIoKSB7XG4gIGNvbnN0IFsgZGlyZWN0aW9uLCBzZXREaXJlY3Rpb24gXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgWyBwcm9ncmVzcywgc2V0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGxhc3RQcm9ncmVzcywgc2V0TGFzdFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBzY3JvbGxQcm9ncmVzcywgc2V0U2Nyb2xsUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbIGNvbnRlbnRzSGVpZ2h0LCBzZXRDb250ZW50c0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgd2luZG93SGVpZ2h0LCBzZXRXaW5kb3dIZWlnaHQgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFksIHNldFNjcm9sbFkgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGFuaW1hdGlvbiwgc2V0QW5pbWF0aW9uIF0gPSB1c2VTdGF0ZShuZXcgQW5pbWF0aW9uKHtcbiAgICBzdGFydFZhbHVlOiAwLFxuICAgIHRhcmdldFZhbHVlOiAwLFxuICAgIGR1cmF0aW9uOiAxXG4gIH0pKTtcbiAgY29uc3Qgd3JhcHBlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgd3JhcHBlcklubmVyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIGluaXQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSwgW2RpcmVjdGlvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGlmZiA9IGxhc3RQcm9ncmVzcyAtIHByb2dyZXNzO1xuXG4gICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAuOTkpIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCdkb3duJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpcmVjdGlvbigndXAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YXJwKCk7XG4gICAgc2V0TGFzdFByb2dyZXNzKHByb2dyZXNzKTtcbiAgfSwgW3Byb2dyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHNjcm9sbFByb2dyZXNzICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdyYXBwZXJSZWYuY3VycmVudC5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSAqIHNjcm9sbFByb2dyZXNzKTtcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhudWxsKTtcbiAgfSwgW3Njcm9sbFByb2dyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGVudHNIZWlnaHQgJiYgd2luZG93SGVpZ2h0KSB7XG4gICAgICBzZXRQcm9ncmVzcyhzY3JvbGxZIC8gKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSk7XG4gICAgfVxuICB9LCBbc2Nyb2xsWV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd3JhcHBlclJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3cmFwcGVyUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgd3JhcHBlclJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgIHdyYXBwZXJSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd3JhcHBlclJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgY2FuY2VsU2Nyb2xsKTtcbiAgICAgIHdyYXBwZXJSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2FuY2VsU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxTY3JvbGwoKSB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIH1cbiAgfSwgW2FuaW1hdGlvbl0pO1xuXG4gIGZ1bmN0aW9uIGluaXQoKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdhcnAoKTogdm9pZCB7XG4gICAgaWYgKDEgPD0gcHJvZ3Jlc3MgJiYgZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgwKSk7XG4gICAgfSBlbHNlIGlmIChwcm9ncmVzcyA8PSAwICYmIGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKDEpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKTogdm9pZCB7XG4gICAgc2V0Q29udGVudHNIZWlnaHQod3JhcHBlcklubmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcbiAgICBzZXRXaW5kb3dIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBzZXRTY3JvbGxZKHdyYXBwZXJSZWYuY3VycmVudC5zY3JvbGxUb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tCdG4odGFyZ2V0UHJvZ3Jlc3M6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICBjb25zdCBpc1JldmVyc2UgPSBNYXRoLmFicyh0YXJnZXRQcm9ncmVzcyAtIHN0YXJ0UHJvZ3Jlc3MpID4gLjU7XG4gICAgY29uc3QgZGlmZiA9IHRhcmdldFByb2dyZXNzIC0gc3RhcnRQcm9ncmVzcztcblxuICAgIHNldEFuaW1hdGlvbihcbiAgICAgIG5ldyBBbmltYXRpb24oe1xuICAgICAgICBzdGFydFZhbHVlOiAwLFxuICAgICAgICB0YXJnZXRWYWx1ZTogdGFyZ2V0UHJvZ3Jlc3MsXG4gICAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dCcsXG4gICAgICAgIHN0ZXA6IGlzUmV2ZXJzZSA/ICh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRpZmYgPCAwID8gMSA6IC0xO1xuXG4gICAgICAgICAgdmFsID0gc3RhcnRQcm9ncmVzcyArIGRpcmVjdGlvbiAqICgoMSAtIE1hdGguYWJzKGRpZmYpKSAqIHZhbCk7XG5cbiAgICAgICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICAgICAgdmFsID0gMSArIHZhbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKDEgPCB2YWwpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbCAtIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKHZhbCkpO1xuICAgICAgICB9IDogKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdmFsID0gc3RhcnRQcm9ncmVzcyArIGRpZmYgKiB2YWw7XG5cbiAgICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUodmFsKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4wMDAyLCBNYXRoLm1pbih2YWwsIC45OTk5KSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyXG4gICAgICBvblNjcm9sbD17IGhhbmRsZVNjcm9sbCB9XG4gICAgICByZWY9eyB3cmFwcGVyUmVmIH1cbiAgICAgIGlkPVwid3JhcHBlclwiXG4gICAgICBjbGFzc05hbWU9eyAhIWRpcmVjdGlvbiA/ICcnIDogJ3RyYW5zcGFyZW50JyB9XG4gICAgPlxuICAgICAgPGRpdiByZWY9eyB3cmFwcGVySW5uZXJSZWYgfT5cbiAgICAgICAgPG9sIGNsYXNzTmFtZT1cImxpc3RcIj4ge1xuICAgICAgICAgIGNvbG9ycy5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9eyBpIH0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSA8L29sPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYnVnXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPnsgc2Nyb2xsWSB9PC9wPlxuICAgICAgICAgICAgPHA+eyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgfTwvcD5cbiAgICAgICAgICAgIDxwPnsgZGlyZWN0aW9uIH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnRuc1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9ycy5tYXAoKF8sIGksIGFycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGkgLyAoYXJyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBrZXk9eyBpIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGlja0J0bihwcm9ncmVzcykgfVxuICAgICAgICAgICAgICAgID57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2xpY2tCdG4oMSkgfT4xMDA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgPC9kaXY+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/overflow/index.tsx\n");

/***/ })

})