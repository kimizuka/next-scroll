webpackHotUpdate_N_E("pages/scroll",{

/***/ "./src/pages/scroll/index.tsx":
/*!************************************!*\
  !*** ./src/pages/scroll/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/scroll/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"scroll__Wrapper\",\n  componentId: \"sc-1eo5722-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState3[0],\n      setLastProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scrollProgress = _useState4[0],\n      setScrollProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      console.log(lastProgress, progress);\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    console.log(lastProgress, progress, direction);\n\n    if (1 <= progress && direction === 'down') {\n      console.log('!');\n      setScrollProgress(normalize(0));\n    } else if (progress <= 0 && direction === 'up') {\n      console.log('?');\n      setScrollProgress(normalize(1));\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 253,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 250,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 259,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 260,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 258,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 257,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [colors.map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 273,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 280,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 263,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 249,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"PJZWKy0WlVzKQosMgonB7CSXiUs=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Njcm9sbC9pbmRleC50c3g/MzliNiJdLCJuYW1lcyI6WyJjb2xvcnMiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwibGVuZ3RoIiwic3R5bGVzIiwiaSIsImNzcyIsIlNjcm9sbFdyYXBwZXIiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInNldERpcmVjdGlvbiIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJsYXN0UHJvZ3Jlc3MiLCJzZXRMYXN0UHJvZ3Jlc3MiLCJzY3JvbGxQcm9ncmVzcyIsInNldFNjcm9sbFByb2dyZXNzIiwiY29udGVudHNIZWlnaHQiLCJzZXRDb250ZW50c0hlaWdodCIsIndpbmRvd0hlaWdodCIsInNldFdpbmRvd0hlaWdodCIsInNjcm9sbFkiLCJzZXRTY3JvbGxZIiwiQW5pbWF0aW9uIiwic3RhcnRWYWx1ZSIsInRhcmdldFZhbHVlIiwiZHVyYXRpb24iLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJpbml0Iiwid2FycCIsImRpZmYiLCJNYXRoIiwiYWJzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzY3JvbGxYIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW5jZWxTY3JvbGwiLCJwYXNzaXZlIiwic3RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSZXNpemUiLCJkb2N1bWVudCIsImhhbmRsZVNjcm9sbCIsIm5vcm1hbGl6ZSIsImdldEVsZW1lbnRCeUlkIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoYW5kbGVDbGlja0J0biIsInRhcmdldFByb2dyZXNzIiwic3RhcnRQcm9ncmVzcyIsImlzUmV2ZXJzZSIsImVhc2luZyIsInN0ZXAiLCJ2YWwiLCJtYXgiLCJtaW4iLCJtYXAiLCJfIiwidG9GaXhlZCIsImFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElB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LENBQUMsSUFBSTJELEdBQUcsQ0FBQzdELE1BQUosR0FBYSxDQUFqQixDQUFsQjtBQUVBLDRCQUNFO0FBRUUsaUJBQU8sRUFBRztBQUFBLG1CQUFNaUQsY0FBYyxDQUFDekMsUUFBRCxDQUFwQjtBQUFBLFdBRlo7QUFBQSxvQkFHRyxDQUFDQSxRQUFRLEdBQUcsR0FBWixFQUFpQm9ELE9BQWpCLENBQXlCLENBQXpCO0FBSEgsV0FDUTFELENBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU1ELE9BYkQsQ0FGSixlQWlCRTtBQUFJLGVBQU8sRUFBRztBQUFBLGlCQUFNK0MsY0FBYyxDQUFDLENBQUQsQ0FBcEI7QUFBQSxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NEOztHQTlMdUI3QyxhOztNQUFBQSxhIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Njcm9sbC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9BbmltYXRpb24nO1xuXG5sZXQgY29sb3JzID0gW1xuICAnI0UwRjJGMScsXG4gICcjQjJERkRCJyxcbiAgJyM4MENCQzQnLFxuICAnIzREQjZBQycsXG4gICcjMjZBNjlBJyxcbiAgJyMwMDk2ODgnLFxuICAnIzAwODk3QicsXG4gICcjMDA3OTZCJyxcbiAgJyMwMDY5NUMnLFxuICAnIzAwNEQ0MCcsXG4gICcjRTBGMkYxJ1xuXTtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgLmxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR7IDEwMCAqIGNvbG9ycy5sZW5ndGggfXZoO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJzAnICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAkeygoKSA9PiB7XG4gICAgICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0eWxlcyArPSBgXG4gICAgICAgICAgbGk6bnRoLWNoaWxkKCR7IGkgKyAxIH0pIHtcbiAgICAgICAgICAgIGhlaWdodDogJHsgMTAwIC8gY29sb3JzLmxlbmd0aCB9JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7IGNvbG9yc1tpXSB9O1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkeyBpIDwgNyB8fCA5IDwgaSA/ICcjMDAwJyA6ICcjZmZmJyB9O1xuICAgICAgICAgICAgICBjb250ZW50OiAnJHsgaSA9PT0gMTAgPyAwIDogaSB9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NgJHsgc3R5bGVzIH1gO1xuICAgIH0pKCl9XG4gIH1cblxuICAuZGVidWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyByaWdodDogMDtcbiAgICB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcbiAgfVxuXG4gIC5idG5zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgICAgICsgbGkge1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxXcmFwcGVyKCkge1xuICBjb25zdCBbIGRpcmVjdGlvbiwgc2V0RGlyZWN0aW9uIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgcHJvZ3Jlc3MsIHNldFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBsYXN0UHJvZ3Jlc3MsIHNldExhc3RQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsUHJvZ3Jlc3MsIHNldFNjcm9sbFByb2dyZXNzIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgWyBjb250ZW50c0hlaWdodCwgc2V0Q29udGVudHNIZWlnaHQgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHdpbmRvd0hlaWdodCwgc2V0V2luZG93SGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBzY3JvbGxZLCBzZXRTY3JvbGxZIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBhbmltYXRpb24sIHNldEFuaW1hdGlvbiBdID0gdXNlU3RhdGUobmV3IEFuaW1hdGlvbih7XG4gICAgc3RhcnRWYWx1ZTogMCxcbiAgICB0YXJnZXRWYWx1ZTogMCxcbiAgICBkdXJhdGlvbjogMVxuICB9KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgaW5pdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FycCgpO1xuICB9LCBbZGlyZWN0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaWZmID0gbGFzdFByb2dyZXNzIC0gcHJvZ3Jlc3M7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdhcnAoKTtcbiAgICBzZXRMYXN0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICB9LCBbcHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2Nyb2xsUHJvZ3Jlc3MgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpICogc2Nyb2xsUHJvZ3Jlc3MpO1xuICAgIHNldFNjcm9sbFByb2dyZXNzKG51bGwpO1xuICB9LCBbc2Nyb2xsUHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkge1xuICAgICAgY29uc29sZS5sb2cobGFzdFByb2dyZXNzLCBwcm9ncmVzcyk7XG4gICAgICBzZXRQcm9ncmVzcyhzY3JvbGxZIC8gKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSk7XG4gICAgfVxuICB9LCBbc2Nyb2xsWV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgY2FuY2VsU2Nyb2xsKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2FuY2VsU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxTY3JvbGwoKSB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIH1cbiAgfSwgW2FuaW1hdGlvbl0pO1xuXG4gIGZ1bmN0aW9uIGluaXQoKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FycCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhsYXN0UHJvZ3Jlc3MsIHByb2dyZXNzLCBkaXJlY3Rpb24pO1xuXG4gICAgaWYgKDEgPD0gcHJvZ3Jlc3MgJiYgZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCchJyk7XG4gICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMCkpO1xuICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPD0gMCAmJiBkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCc/Jyk7XG4gICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpOiB2b2lkIHtcbiAgICBzZXRDb250ZW50c0hlaWdodChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuY2xpZW50SGVpZ2h0KTtcbiAgICBzZXRXaW5kb3dIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBzZXRTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrQnRuKHRhcmdldFByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgY29uc3QgaXNSZXZlcnNlID0gTWF0aC5hYnModGFyZ2V0UHJvZ3Jlc3MgLSBzdGFydFByb2dyZXNzKSA+IC41O1xuICAgIGNvbnN0IGRpZmYgPSB0YXJnZXRQcm9ncmVzcyAtIHN0YXJ0UHJvZ3Jlc3M7XG5cbiAgICBzZXRBbmltYXRpb24oXG4gICAgICBuZXcgQW5pbWF0aW9uKHtcbiAgICAgICAgc3RhcnRWYWx1ZTogMCxcbiAgICAgICAgdGFyZ2V0VmFsdWU6IHRhcmdldFByb2dyZXNzLFxuICAgICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxuICAgICAgICBzdGVwOiBpc1JldmVyc2UgPyAodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkaWZmIDwgMCA/IDEgOiAtMTtcblxuICAgICAgICAgIHZhbCA9IHN0YXJ0UHJvZ3Jlc3MgKyBkaXJlY3Rpb24gKiAoKDEgLSBNYXRoLmFicyhkaWZmKSkgKiB2YWwpO1xuXG4gICAgICAgICAgaWYgKHZhbCA8IDApIHtcbiAgICAgICAgICAgIHZhbCA9IDEgKyB2YWw7XG4gICAgICAgICAgfSBlbHNlIGlmICgxIDwgdmFsKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwgLSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSh2YWwpKTtcbiAgICAgICAgfSA6ICh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHZhbCA9IHN0YXJ0UHJvZ3Jlc3MgKyBkaWZmICogdmFsO1xuXG4gICAgICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heCguMDAwMiwgTWF0aC5taW4odmFsLCAuOTk5OSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9eyAhIWRpcmVjdGlvbiA/ICcnIDogJ3RyYW5zcGFyZW50JyB9PlxuICAgICAgPG9sIGNsYXNzTmFtZT1cImxpc3RcIj4ge1xuICAgICAgICBjb2xvcnMubWFwKChfLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9eyBpIH0gLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfSA8L29sPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWJ1Z1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPnsgKHByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpIH08L3A+XG4gICAgICAgICAgPHA+eyBkaXJlY3Rpb24gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJidG5zXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcnMubWFwKChfLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gaSAvIChhcnIubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17IGkgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGlja0J0bihwcm9ncmVzcykgfVxuICAgICAgICAgICAgICA+eyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgfTwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPGxpIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGlja0J0bigxKSB9PjEwMDwvbGk+XG4gICAgICA8L29sPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/scroll/index.tsx\n");

/***/ })

})