webpackHotUpdate_N_E("pages/scroll",{

/***/ "./src/pages/scroll/index.tsx":
/*!************************************!*\
  !*** ./src/pages/scroll/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/scroll/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"scroll__Wrapper\",\n  componentId: \"sc-1eo5722-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState3[0],\n      setLastProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scrollProgress = _useState4[0],\n      setScrollProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight && windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      // animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {// animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    console.log(lastProgress, progress, direction);\n\n    if (1 <= progress && direction === 'down') {\n      console.log('!');\n      setScrollProgress(normalize(0));\n    } else if (progress <= 0 && direction === 'up') {\n      console.log('?');\n      var targetProgress = normalize(1);\n      var startProgress = progress;\n      var isReverse = Math.abs(targetProgress - startProgress) > .5;\n      var diff = targetProgress - startProgress;\n      setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n        startValue: 0,\n        targetValue: targetProgress,\n        duration: 800,\n        easing: 'easeInOut',\n        step: isReverse ? function (val) {\n          var direction = diff < 0 ? 1 : -1;\n          val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n          if (val < 0) {\n            val = 1 + val;\n          } else if (1 < val) {\n            val = val - 1;\n          }\n\n          setScrollProgress(normalize(val));\n        } : function (val) {\n          val = startProgress + diff * val;\n          setScrollProgress(normalize(val));\n        }\n      }));\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    console.log(window.scrollY);\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 284,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 281,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 290,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 291,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 289,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 288,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [colors.map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 304,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 311,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 294,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 280,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"PJZWKy0WlVzKQosMgonB7CSXiUs=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Njcm9sbC9pbmRleC50c3g/MzliNiJdLCJuYW1lcyI6WyJjb2xvcnMiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwibGVuZ3RoIiwic3R5bGVzIiwiaSIsImNzcyIsIlNjcm9sbFdyYXBwZXIiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJsYXN0UHJvZ3Jlc3MiLCJzZXRMYXN0UHJvZ3Jlc3MiLCJzY3JvbGxQcm9ncmVzcyIsInNldFNjcm9sbFByb2dyZXNzIiwiY29udGVudHNIZWlnaHQiLCJzZXRDb250ZW50c0hlaWdodCIsIndpbmRvd0hlaWdodCIsInNldFdpbmRvd0hlaWdodCIsInNjcm9sbFkiLCJzZXRTY3JvbGxZIiwiQW5pbWF0aW9uIiwic3RhcnRWYWx1ZSIsInRhcmdldFZhbHVlIiwiZHVyYXRpb24iLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJpbml0Iiwid2FycCIsImRpZmYiLCJNYXRoIiwiYWJzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzY3JvbGxYIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbmNlbFNjcm9sbCIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwiZG9jdW1lbnQiLCJoYW5kbGVTY3JvbGwiLCJub3JtYWxpemUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0UHJvZ3Jlc3MiLCJzdGFydFByb2dyZXNzIiwiaXNSZXZlcnNlIiwiZWFzaW5nIiwic3RlcCIsInZhbCIsImdldEVsZW1lbnRCeUlkIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoYW5kbGVDbGlja0J0biIsIm1heCIsIm1pbiIsIm1hcCIsIl8iLCJ0b0ZpeGVkIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFB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QUFDQSxRQUFRLEdBQUcsR0FBWixFQUFpQm1ELE9BQWpCLENBQXlCLENBQXpCO0FBSEgsV0FDUXpELENBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU1ELE9BYkQsQ0FGSixlQWlCRTtBQUFJLGVBQU8sRUFBRztBQUFBLGlCQUFNb0QsY0FBYyxDQUFDLENBQUQsQ0FBcEI7QUFBQSxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NEOztHQTdOdUJsRCxhOztNQUFBQSxhIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Njcm9sbC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9BbmltYXRpb24nO1xuXG5sZXQgY29sb3JzID0gW1xuICAnI0UwRjJGMScsXG4gICcjQjJERkRCJyxcbiAgJyM4MENCQzQnLFxuICAnIzREQjZBQycsXG4gICcjMjZBNjlBJyxcbiAgJyMwMDk2ODgnLFxuICAnIzAwODk3QicsXG4gICcjMDA3OTZCJyxcbiAgJyMwMDY5NUMnLFxuICAnIzAwNEQ0MCcsXG4gICcjRTBGMkYxJ1xuXTtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgLmxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR7IDEwMCAqIGNvbG9ycy5sZW5ndGggfXZoO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJzAnICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAkeygoKSA9PiB7XG4gICAgICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0eWxlcyArPSBgXG4gICAgICAgICAgbGk6bnRoLWNoaWxkKCR7IGkgKyAxIH0pIHtcbiAgICAgICAgICAgIGhlaWdodDogJHsgMTAwIC8gY29sb3JzLmxlbmd0aCB9JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7IGNvbG9yc1tpXSB9O1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkeyBpIDwgNyB8fCA5IDwgaSA/ICcjMDAwJyA6ICcjZmZmJyB9O1xuICAgICAgICAgICAgICBjb250ZW50OiAnJHsgaSA9PT0gMTAgPyAwIDogaSB9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NgJHsgc3R5bGVzIH1gO1xuICAgIH0pKCl9XG4gIH1cblxuICAuZGVidWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyByaWdodDogMDtcbiAgICB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcbiAgfVxuXG4gIC5idG5zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgICAgICsgbGkge1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxXcmFwcGVyKCkge1xuICBjb25zdCBbIGRpcmVjdGlvbiwgc2V0RGlyZWN0aW9uIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgcHJvZ3Jlc3MsIHNldFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBsYXN0UHJvZ3Jlc3MsIHNldExhc3RQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsUHJvZ3Jlc3MsIHNldFNjcm9sbFByb2dyZXNzIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgWyBjb250ZW50c0hlaWdodCwgc2V0Q29udGVudHNIZWlnaHQgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHdpbmRvd0hlaWdodCwgc2V0V2luZG93SGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBzY3JvbGxZLCBzZXRTY3JvbGxZIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBhbmltYXRpb24sIHNldEFuaW1hdGlvbiBdID0gdXNlU3RhdGUobmV3IEFuaW1hdGlvbih7XG4gICAgc3RhcnRWYWx1ZTogMCxcbiAgICB0YXJnZXRWYWx1ZTogMCxcbiAgICBkdXJhdGlvbjogMVxuICB9KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgaW5pdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FycCgpO1xuICB9LCBbZGlyZWN0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaWZmID0gbGFzdFByb2dyZXNzIC0gcHJvZ3Jlc3M7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdhcnAoKTtcbiAgICBzZXRMYXN0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICB9LCBbcHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2Nyb2xsUHJvZ3Jlc3MgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpICogc2Nyb2xsUHJvZ3Jlc3MpO1xuICAgIHNldFNjcm9sbFByb2dyZXNzKG51bGwpO1xuICB9LCBbc2Nyb2xsUHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZW50c0hlaWdodCAmJiB3aW5kb3dIZWlnaHQpIHtcbiAgICAgIHNldFByb2dyZXNzKHNjcm9sbFkgLyAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpKTtcbiAgICB9XG4gIH0sIFtzY3JvbGxZXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBhbmltYXRpb24uc3RvcCgpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbFNjcm9sbCgpIHtcbiAgICAgIC8vIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgfVxuICB9LCBbYW5pbWF0aW9uXSk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgwKSk7XG4gIH1cblxuICBmdW5jdGlvbiB3YXJwKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGxhc3RQcm9ncmVzcywgcHJvZ3Jlc3MsIGRpcmVjdGlvbik7XG5cbiAgICBpZiAoMSA8PSBwcm9ncmVzcyAmJiBkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgY29uc29sZS5sb2coJyEnKTtcbiAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgwKSk7XG4gICAgfSBlbHNlIGlmIChwcm9ncmVzcyA8PSAwICYmIGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgY29uc29sZS5sb2coJz8nKTtcblxuICAgICAgY29uc3QgdGFyZ2V0UHJvZ3Jlc3MgPSBub3JtYWxpemUoMSk7XG4gICAgICBjb25zdCBzdGFydFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICBjb25zdCBpc1JldmVyc2UgPSBNYXRoLmFicyh0YXJnZXRQcm9ncmVzcyAtIHN0YXJ0UHJvZ3Jlc3MpID4gLjU7XG4gICAgICBjb25zdCBkaWZmID0gdGFyZ2V0UHJvZ3Jlc3MgLSBzdGFydFByb2dyZXNzO1xuXG4gICAgICBzZXRBbmltYXRpb24oXG4gICAgICAgIG5ldyBBbmltYXRpb24oe1xuICAgICAgICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgICAgICAgdGFyZ2V0VmFsdWU6IHRhcmdldFByb2dyZXNzLFxuICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcbiAgICAgICAgICBzdGVwOiBpc1JldmVyc2UgPyAodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRpZmYgPCAwID8gMSA6IC0xO1xuXG4gICAgICAgICAgICB2YWwgPSBzdGFydFByb2dyZXNzICsgZGlyZWN0aW9uICogKCgxIC0gTWF0aC5hYnMoZGlmZikpICogdmFsKTtcblxuICAgICAgICAgICAgaWYgKHZhbCA8IDApIHtcbiAgICAgICAgICAgICAgdmFsID0gMSArIHZhbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoMSA8IHZhbCkge1xuICAgICAgICAgICAgICB2YWwgPSB2YWwgLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUodmFsKSk7XG4gICAgICAgICAgfSA6ICh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgdmFsID0gc3RhcnRQcm9ncmVzcyArIGRpZmYgKiB2YWw7XG5cbiAgICAgICAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSh2YWwpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCk6IHZvaWQge1xuICAgIHNldENvbnRlbnRzSGVpZ2h0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5jbGllbnRIZWlnaHQpO1xuICAgIHNldFdpbmRvd0hlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKTtcbiAgICBzZXRTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrQnRuKHRhcmdldFByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgY29uc3QgaXNSZXZlcnNlID0gTWF0aC5hYnModGFyZ2V0UHJvZ3Jlc3MgLSBzdGFydFByb2dyZXNzKSA+IC41O1xuICAgIGNvbnN0IGRpZmYgPSB0YXJnZXRQcm9ncmVzcyAtIHN0YXJ0UHJvZ3Jlc3M7XG5cbiAgICBzZXRBbmltYXRpb24oXG4gICAgICBuZXcgQW5pbWF0aW9uKHtcbiAgICAgICAgc3RhcnRWYWx1ZTogMCxcbiAgICAgICAgdGFyZ2V0VmFsdWU6IHRhcmdldFByb2dyZXNzLFxuICAgICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxuICAgICAgICBzdGVwOiBpc1JldmVyc2UgPyAodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkaWZmIDwgMCA/IDEgOiAtMTtcblxuICAgICAgICAgIHZhbCA9IHN0YXJ0UHJvZ3Jlc3MgKyBkaXJlY3Rpb24gKiAoKDEgLSBNYXRoLmFicyhkaWZmKSkgKiB2YWwpO1xuXG4gICAgICAgICAgaWYgKHZhbCA8IDApIHtcbiAgICAgICAgICAgIHZhbCA9IDEgKyB2YWw7XG4gICAgICAgICAgfSBlbHNlIGlmICgxIDwgdmFsKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwgLSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSh2YWwpKTtcbiAgICAgICAgfSA6ICh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHZhbCA9IHN0YXJ0UHJvZ3Jlc3MgKyBkaWZmICogdmFsO1xuXG4gICAgICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heCguMDAwMiwgTWF0aC5taW4odmFsLCAuOTk5OSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9eyAhIWRpcmVjdGlvbiA/ICcnIDogJ3RyYW5zcGFyZW50JyB9PlxuICAgICAgPG9sIGNsYXNzTmFtZT1cImxpc3RcIj4ge1xuICAgICAgICBjb2xvcnMubWFwKChfLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9eyBpIH0gLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfSA8L29sPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWJ1Z1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPnsgKHByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpIH08L3A+XG4gICAgICAgICAgPHA+eyBkaXJlY3Rpb24gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJidG5zXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcnMubWFwKChfLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gaSAvIChhcnIubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17IGkgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGlja0J0bihwcm9ncmVzcykgfVxuICAgICAgICAgICAgICA+eyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgfTwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPGxpIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGlja0J0bigxKSB9PjEwMDwvbGk+XG4gICAgICA8L29sPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/scroll/index.tsx\n");

/***/ })

})