webpackHotUpdate_N_E("pages/touchend",{

/***/ "./src/pages/touchend/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/touchend/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/touchend/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"touchend__Wrapper\",\n  componentId: \"sc-1nymc90-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState3[0],\n      setLastProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scrollProgress = _useState4[0],\n      setScrollProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight && windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    setTimeout(function () {\n      window.scrollTo(window.scrollX, 500);\n      document.dispatchEvent(new Event('touchend'));\n      document.body.style.touchAction = 'none';\n    }, 1000);\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: scrollY\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 170,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 171,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 172,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 169,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 160,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"OA9+d1/2NnUyj6JNh4X5Zphv6sQ=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvdWNoZW5kL2luZGV4LnRzeD9mMjZlIl0sIm5hbWVzIjpbImNvbG9ycyIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJsZW5ndGgiLCJzdHlsZXMiLCJpIiwiY3NzIiwiU2Nyb2xsV3JhcHBlciIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImxhc3RQcm9ncmVzcyIsInNldExhc3RQcm9ncmVzcyIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJjb250ZW50c0hlaWdodCIsInNldENvbnRlbnRzSGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJ1c2VFZmZlY3QiLCJpbml0IiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwicGFzc2l2ZSIsImRvY3VtZW50IiwiaGFuZGxlU2Nyb2xsIiwic2V0VGltZW91dCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImJvZHkiLCJzdHlsZSIsInRvdWNoQWN0aW9uIiwibm9ybWFsaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsInZhbCIsIm1heCIsIm1pbiIsIm1hcCIsIl8iLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBSUEsTUFBTSxHQUFHLENBQ1gsU0FEVyxFQUVYLFNBRlcsRUFHWCxTQUhXLEVBSVgsU0FKVyxFQUtYLFNBTFcsRUFNWCxTQU5XLEVBT1gsU0FQVyxFQVFYLFNBUlcsRUFTWCxTQVRXLEVBVVgsU0FWVyxFQVdYLFNBWFcsQ0FBYjtBQWNBLElBQU1DLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FB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aEIsQ0FBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLE9BQUQ7QUFBUyxhQUFTLEVBQUcsQ0FBQyxDQUFDckMsU0FBRixHQUFjLEVBQWQsR0FBbUIsYUFBeEM7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsc0JBQ0VWLE1BQU0sQ0FBQ2tELEdBQVAsQ0FBVyxVQUFDQyxDQUFELEVBQUk3QyxDQUFKLEVBQVU7QUFDbkIsNEJBQ0UsK0VBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUdELE9BSkQsQ0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUEsb0JBQUtnQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUFLLENBQUNWLFFBQVEsR0FBRyxHQUFaLEVBQWlCd0MsT0FBakIsQ0FBeUIsQ0FBekI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxvQkFBSzFDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBdEd1QkYsYTs7TUFBQUEsYSIsImZpbGUiOiIuL3NyYy9wYWdlcy90b3VjaGVuZC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9BbmltYXRpb24nO1xuXG5sZXQgY29sb3JzID0gW1xuICAnI0UwRjJGMScsXG4gICcjQjJERkRCJyxcbiAgJyM4MENCQzQnLFxuICAnIzREQjZBQycsXG4gICcjMjZBNjlBJyxcbiAgJyMwMDk2ODgnLFxuICAnIzAwODk3QicsXG4gICcjMDA3OTZCJyxcbiAgJyMwMDY5NUMnLFxuICAnIzAwNEQ0MCcsXG4gICcjRTBGMkYxJ1xuXTtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgLmxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR7IDEwMCAqIGNvbG9ycy5sZW5ndGggfXZoO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJzAnICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAkeygoKSA9PiB7XG4gICAgICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0eWxlcyArPSBgXG4gICAgICAgICAgbGk6bnRoLWNoaWxkKCR7IGkgKyAxIH0pIHtcbiAgICAgICAgICAgIGhlaWdodDogJHsgMTAwIC8gY29sb3JzLmxlbmd0aCB9JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7IGNvbG9yc1tpXSB9O1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkeyBpIDwgNyB8fCA5IDwgaSA/ICcjMDAwJyA6ICcjZmZmJyB9O1xuICAgICAgICAgICAgICBjb250ZW50OiAnJHsgaSA9PT0gMTAgPyAwIDogaSB9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NgJHsgc3R5bGVzIH1gO1xuICAgIH0pKCl9XG4gIH1cblxuICAuZGVidWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyByaWdodDogMDtcbiAgICB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsV3JhcHBlcigpIHtcbiAgY29uc3QgWyBkaXJlY3Rpb24sIHNldERpcmVjdGlvbiBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIHByb2dyZXNzLCBzZXRQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgbGFzdFByb2dyZXNzLCBzZXRMYXN0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzcyBdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFsgY29udGVudHNIZWlnaHQsIHNldENvbnRlbnRzSGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyB3aW5kb3dIZWlnaHQsIHNldFdpbmRvd0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsWSwgc2V0U2Nyb2xsWSBdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgaW5pdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9LCBbZGlyZWN0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaWZmID0gbGFzdFByb2dyZXNzIC0gcHJvZ3Jlc3M7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldExhc3RQcm9ncmVzcyhwcm9ncmVzcyk7XG4gIH0sIFtwcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzY3JvbGxQcm9ncmVzcyAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkgKiBzY3JvbGxQcm9ncmVzcyk7XG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3MobnVsbCk7XG4gIH0sIFtzY3JvbGxQcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnRzSGVpZ2h0ICYmIHdpbmRvd0hlaWdodCkge1xuICAgICAgc2V0UHJvZ3Jlc3Moc2Nyb2xsWSAvIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkpO1xuICAgIH1cbiAgfSwgW3Njcm9sbFldKTtcblxuICBmdW5jdGlvbiBpbml0KCk6IHZvaWQge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIDUwMCk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndG91Y2hlbmQnKSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgIH0sIDEwMDApO1xuXG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpOiB2b2lkIHtcbiAgICBzZXRDb250ZW50c0hlaWdodChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuY2xpZW50SGVpZ2h0KTtcbiAgICBzZXRXaW5kb3dIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBzZXRTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4wMDAyLCBNYXRoLm1pbih2YWwsIC45OTk5KSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17ICEhZGlyZWN0aW9uID8gJycgOiAndHJhbnNwYXJlbnQnIH0+XG4gICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdFwiPiB7XG4gICAgICAgIGNvbG9ycy5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17IGkgfSAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9IDwvb2w+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYnVnXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+eyBzY3JvbGxZIH08L3A+XG4gICAgICAgICAgPHA+eyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgfTwvcD5cbiAgICAgICAgICA8cD57IGRpcmVjdGlvbiB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/touchend/index.tsx\n");

/***/ })

})