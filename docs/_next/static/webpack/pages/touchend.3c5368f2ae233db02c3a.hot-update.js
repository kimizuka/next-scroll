webpackHotUpdate_N_E("pages/touchend",{

/***/ "./src/pages/touchend/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/touchend/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/touchend/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"touchend__Wrapper\",\n  componentId: \"sc-1nymc90-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState3[0],\n      setLastProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      scrollProgress = _useState4[0],\n      setScrollProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (typeof scrollProgress !== 'number') {\n      return;\n    }\n\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n    setScrollProgress(null);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight && windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    setTimeout(function () {\n      window.scrollTo(window.scrollX, 500);\n      document.dispatchEvent(new Event('touchend'));\n      document.body.style.touchAction = 'none';\n      document.body.style.position = 'fixed';\n    }, 1000);\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 165,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: scrollY\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 171,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 172,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 173,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 170,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 161,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"OA9+d1/2NnUyj6JNh4X5Zphv6sQ=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvdWNoZW5kL2luZGV4LnRzeD9mMjZlIl0sIm5hbWVzIjpbImNvbG9ycyIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJsZW5ndGgiLCJzdHlsZXMiLCJpIiwiY3NzIiwiU2Nyb2xsV3JhcHBlciIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImxhc3RQcm9ncmVzcyIsInNldExhc3RQcm9ncmVzcyIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJjb250ZW50c0hlaWdodCIsInNldENvbnRlbnRzSGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJ1c2VFZmZlY3QiLCJpbml0IiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwicGFzc2l2ZSIsImRvY3VtZW50IiwiaGFuZGxlU2Nyb2xsIiwic2V0VGltZW91dCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImJvZHkiLCJzdHlsZSIsInRvdWNoQWN0aW9uIiwicG9zaXRpb24iLCJub3JtYWxpemUiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwidmFsIiwibWF4IiwibWluIiwibWFwIiwiXyIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFJQSxNQUFNLEdBQUcsQ0FDWCxTQURXLEVBRVgsU0FGVyxFQUdYLFNBSFcsRUFJWCxTQUpXLEVBS1gsU0FMVyxFQU1YLFNBTlcsRUFPWCxTQVBXLEVBUVgsU0FSVyxFQVNYLFNBVFcsRUFVWCxTQVZXLEVBV1gsU0FYVyxDQUFiO0FBY0EsSUFBTUMsT0FBTyxHQUFHQyx5REFB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QUNzQixHQUFMLENBQVMsS0FBVCxFQUFnQnRCLElBQUksQ0FBQ3VCLEdBQUwsQ0FBU0YsR0FBVCxFQUFjLEtBQWQsQ0FBaEIsQ0FBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLE9BQUQ7QUFBUyxhQUFTLEVBQUcsQ0FBQyxDQUFDdEMsU0FBRixHQUFjLEVBQWQsR0FBbUIsYUFBeEM7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsc0JBQ0VWLE1BQU0sQ0FBQ21ELEdBQVAsQ0FBVyxVQUFDQyxDQUFELEVBQUk5QyxDQUFKLEVBQVU7QUFDbkIsNEJBQ0UsK0VBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUdELE9BSkQsQ0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUEsb0JBQUtnQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUFLLENBQUNWLFFBQVEsR0FBRyxHQUFaLEVBQWlCeUMsT0FBakIsQ0FBeUIsQ0FBekI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxvQkFBSzNDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBdkd1QkYsYTs7TUFBQUEsYSIsImZpbGUiOiIuL3NyYy9wYWdlcy90b3VjaGVuZC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9BbmltYXRpb24nO1xuXG5sZXQgY29sb3JzID0gW1xuICAnI0UwRjJGMScsXG4gICcjQjJERkRCJyxcbiAgJyM4MENCQzQnLFxuICAnIzREQjZBQycsXG4gICcjMjZBNjlBJyxcbiAgJyMwMDk2ODgnLFxuICAnIzAwODk3QicsXG4gICcjMDA3OTZCJyxcbiAgJyMwMDY5NUMnLFxuICAnIzAwNEQ0MCcsXG4gICcjRTBGMkYxJ1xuXTtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgLmxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR7IDEwMCAqIGNvbG9ycy5sZW5ndGggfXZoO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJzAnICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAkeygoKSA9PiB7XG4gICAgICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0eWxlcyArPSBgXG4gICAgICAgICAgbGk6bnRoLWNoaWxkKCR7IGkgKyAxIH0pIHtcbiAgICAgICAgICAgIGhlaWdodDogJHsgMTAwIC8gY29sb3JzLmxlbmd0aCB9JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7IGNvbG9yc1tpXSB9O1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkeyBpIDwgNyB8fCA5IDwgaSA/ICcjMDAwJyA6ICcjZmZmJyB9O1xuICAgICAgICAgICAgICBjb250ZW50OiAnJHsgaSA9PT0gMTAgPyAwIDogaSB9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NgJHsgc3R5bGVzIH1gO1xuICAgIH0pKCl9XG4gIH1cblxuICAuZGVidWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyByaWdodDogMDtcbiAgICB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsV3JhcHBlcigpIHtcbiAgY29uc3QgWyBkaXJlY3Rpb24sIHNldERpcmVjdGlvbiBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIHByb2dyZXNzLCBzZXRQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgbGFzdFByb2dyZXNzLCBzZXRMYXN0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzcyBdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFsgY29udGVudHNIZWlnaHQsIHNldENvbnRlbnRzSGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyB3aW5kb3dIZWlnaHQsIHNldFdpbmRvd0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsWSwgc2V0U2Nyb2xsWSBdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgaW5pdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9LCBbZGlyZWN0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaWZmID0gbGFzdFByb2dyZXNzIC0gcHJvZ3Jlc3M7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldExhc3RQcm9ncmVzcyhwcm9ncmVzcyk7XG4gIH0sIFtwcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzY3JvbGxQcm9ncmVzcyAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkgKiBzY3JvbGxQcm9ncmVzcyk7XG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3MobnVsbCk7XG4gIH0sIFtzY3JvbGxQcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnRzSGVpZ2h0ICYmIHdpbmRvd0hlaWdodCkge1xuICAgICAgc2V0UHJvZ3Jlc3Moc2Nyb2xsWSAvIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkpO1xuICAgIH1cbiAgfSwgW3Njcm9sbFldKTtcblxuICBmdW5jdGlvbiBpbml0KCk6IHZvaWQge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIDUwMCk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndG91Y2hlbmQnKSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfSwgMTAwMCk7XG5cbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCk6IHZvaWQge1xuICAgIHNldENvbnRlbnRzSGVpZ2h0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5jbGllbnRIZWlnaHQpO1xuICAgIHNldFdpbmRvd0hlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIHNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLjAwMDIsIE1hdGgubWluKHZhbCwgLjk5OTkpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPXsgISFkaXJlY3Rpb24gPyAnJyA6ICd0cmFuc3BhcmVudCcgfT5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0XCI+IHtcbiAgICAgICAgY29sb3JzLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsgaSB9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH0gPC9vbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVidWdcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD57IHNjcm9sbFkgfTwvcD5cbiAgICAgICAgICA8cD57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9wPlxuICAgICAgICAgIDxwPnsgZGlyZWN0aW9uIH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/touchend/index.tsx\n");

/***/ })

})