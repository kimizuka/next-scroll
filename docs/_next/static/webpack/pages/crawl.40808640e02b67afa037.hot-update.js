webpackHotUpdate_N_E("pages/crawl",{

/***/ "./src/pages/crawl/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/crawl/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/crawl/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar colors = ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#E0F2F1'];\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"crawl__Wrapper\",\n  componentId: \"sc-1q8gd8t-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:bold;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}.crawl{position:fixed;top:0;bottom:0;left:0;right:0;margin:auto;max-width:600px;max-height:300px;width:100%;background:url(/crawl/img.png) center top no-repeat;background-size:cover;&:after{display:block;padding-top:50%;content:'';}}\"], 100 * colors.length, function () {\n  var styles = '';\n\n  for (var i = 0; i < colors.length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / colors.length, \"%;\\n            background: \").concat(colors[i], \";\\n\\n            &:before {\\n              color: \").concat(i < 7 || 9 < i ? '#000' : '#fff', \";\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollProgress = _useState3[0],\n      setScrollProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState4[0],\n      setLastProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    if (1 <= progress && direction === 'down') {\n      window.scrollTo(window.scrollX, 1);\n    } else if (progress <= 0 && direction === 'up') {\n      window.scrollTo(window.scrollX, contentsHeight - windowHeight - 1);\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", colors.map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 260,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 257,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 266,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 267,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 265,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 264,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [colors.map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 280,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 287,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 270,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"data-index\": progress,\n      className: \"crawl\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 289,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 256,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"67TQg13/oVz+gUfpSdOD5ucq/yI=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NyYXdsL2luZGV4LnRzeD82ZWU1Il0sIm5hbWVzIjpbImNvbG9ycyIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJsZW5ndGgiLCJzdHlsZXMiLCJpIiwiY3NzIiwiU2Nyb2xsV3JhcHBlciIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJsYXN0UHJvZ3Jlc3MiLCJzZXRMYXN0UHJvZ3Jlc3MiLCJjb250ZW50c0hlaWdodCIsInNldENvbnRlbnRzSGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJBbmltYXRpb24iLCJzdGFydFZhbHVlIiwidGFyZ2V0VmFsdWUiLCJkdXJhdGlvbiIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsInVzZUVmZmVjdCIsImluaXQiLCJ3YXJwIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FuY2VsU2Nyb2xsIiwicGFzc2l2ZSIsInN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwiZG9jdW1lbnQiLCJoYW5kbGVTY3JvbGwiLCJub3JtYWxpemUiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiaGFuZGxlQ2xpY2tCdG4iLCJ0YXJnZXRQcm9ncmVzcyIsInN0YXJ0UHJvZ3Jlc3MiLCJpc1JldmVyc2UiLCJlYXNpbmciLCJzdGVwIiwidmFsIiwibWF4IiwibWluIiwibWFwIiwiXyIsInRvRml4ZWQiLCJhcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUcsQ0FD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QWJELENBRkosZUFpQkU7QUFBSSxlQUFPLEVBQUc7QUFBQSxpQkFBTTZDLGNBQWMsQ0FBQyxDQUFELENBQXBCO0FBQUEsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQWlDRTtBQUNFLG9CQUFhdkMsUUFEZjtBQUVFLGVBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3Q0Q7O0dBeEx1QkosYTs7TUFBQUEsYSIsImZpbGUiOiIuL3NyYy9wYWdlcy9jcmF3bC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9BbmltYXRpb24nO1xuXG5sZXQgY29sb3JzID0gW1xuICAnI0UwRjJGMScsXG4gICcjQjJERkRCJyxcbiAgJyM4MENCQzQnLFxuICAnIzREQjZBQycsXG4gICcjMjZBNjlBJyxcbiAgJyMwMDk2ODgnLFxuICAnIzAwODk3QicsXG4gICcjMDA3OTZCJyxcbiAgJyMwMDY5NUMnLFxuICAnIzAwNEQ0MCcsXG4gICcjRTBGMkYxJ1xuXTtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgLmxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR7IDEwMCAqIGNvbG9ycy5sZW5ndGggfXZoO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJzAnICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAkeygoKSA9PiB7XG4gICAgICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0eWxlcyArPSBgXG4gICAgICAgICAgbGk6bnRoLWNoaWxkKCR7IGkgKyAxIH0pIHtcbiAgICAgICAgICAgIGhlaWdodDogJHsgMTAwIC8gY29sb3JzLmxlbmd0aCB9JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7IGNvbG9yc1tpXSB9O1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkeyBpIDwgNyB8fCA5IDwgaSA/ICcjMDAwJyA6ICcjZmZmJyB9O1xuICAgICAgICAgICAgICBjb250ZW50OiAnJHsgaSA9PT0gMTAgPyAwIDogaSB9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NgJHsgc3R5bGVzIH1gO1xuICAgIH0pKCl9XG4gIH1cblxuICAuZGVidWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyByaWdodDogMDtcbiAgICB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcbiAgfVxuXG4gIC5idG5zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgICAgICsgbGkge1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNyYXdsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyBib3R0b206IDA7XG4gICAgbGVmdDogMDsgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogNjAwcHg7IG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgvY3Jhd2wvaW1nLnBuZykgY2VudGVyIHRvcCBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nLXRvcDogNTAlO1xuICAgICAgY29udGVudDogJyc7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxXcmFwcGVyKCkge1xuICBjb25zdCBbIGRpcmVjdGlvbiwgc2V0RGlyZWN0aW9uIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgcHJvZ3Jlc3MsIHNldFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBzY3JvbGxQcm9ncmVzcywgc2V0U2Nyb2xsUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGxhc3RQcm9ncmVzcywgc2V0TGFzdFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBjb250ZW50c0hlaWdodCwgc2V0Q29udGVudHNIZWlnaHQgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHdpbmRvd0hlaWdodCwgc2V0V2luZG93SGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBzY3JvbGxZLCBzZXRTY3JvbGxZIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBhbmltYXRpb24sIHNldEFuaW1hdGlvbiBdID0gdXNlU3RhdGUobmV3IEFuaW1hdGlvbih7XG4gICAgc3RhcnRWYWx1ZTogMCxcbiAgICB0YXJnZXRWYWx1ZTogMCxcbiAgICBkdXJhdGlvbjogMVxuICB9KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgaW5pdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FycCgpO1xuICB9LCBbZGlyZWN0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaWZmID0gbGFzdFByb2dyZXNzIC0gcHJvZ3Jlc3M7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdhcnAoKTtcbiAgICBzZXRMYXN0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICB9LCBbcHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSAqIHNjcm9sbFByb2dyZXNzKTtcbiAgfSwgW3Njcm9sbFByb2dyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpIHtcbiAgICAgIHNldFByb2dyZXNzKHNjcm9sbFkgLyAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpKTtcbiAgICB9XG4gIH0sIFtzY3JvbGxZXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbFNjcm9sbCgpIHtcbiAgICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgfVxuICB9LCBbYW5pbWF0aW9uXSk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgwKSk7XG4gIH1cblxuICBmdW5jdGlvbiB3YXJwKCk6IHZvaWQge1xuICAgIGlmICgxIDw9IHByb2dyZXNzICYmIGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIDEpO1xuICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPD0gMCAmJiBkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQgLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKTogdm9pZCB7XG4gICAgc2V0Q29udGVudHNIZWlnaHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmNsaWVudEhlaWdodCk7XG4gICAgc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja0J0bih0YXJnZXRQcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgIGNvbnN0IGlzUmV2ZXJzZSA9IE1hdGguYWJzKHRhcmdldFByb2dyZXNzIC0gc3RhcnRQcm9ncmVzcykgPiAuNTtcbiAgICBjb25zdCBkaWZmID0gdGFyZ2V0UHJvZ3Jlc3MgLSBzdGFydFByb2dyZXNzO1xuXG4gICAgc2V0QW5pbWF0aW9uKFxuICAgICAgbmV3IEFuaW1hdGlvbih7XG4gICAgICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgICAgIHRhcmdldFZhbHVlOiB0YXJnZXRQcm9ncmVzcyxcbiAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcbiAgICAgICAgc3RlcDogaXNSZXZlcnNlID8gKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZGlmZiA8IDAgPyAxIDogLTE7XG5cbiAgICAgICAgICB2YWwgPSBzdGFydFByb2dyZXNzICsgZGlyZWN0aW9uICogKCgxIC0gTWF0aC5hYnMoZGlmZikpICogdmFsKTtcblxuICAgICAgICAgIGlmICh2YWwgPCAwKSB7XG4gICAgICAgICAgICB2YWwgPSAxICsgdmFsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoMSA8IHZhbCkge1xuICAgICAgICAgICAgdmFsID0gdmFsIC0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUodmFsKSk7XG4gICAgICAgIH0gOiAodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICB2YWwgPSBzdGFydFByb2dyZXNzICsgZGlmZiAqIHZhbDtcblxuICAgICAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLjAwMDIsIE1hdGgubWluKHZhbCwgLjk5OTkpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPXsgISFkaXJlY3Rpb24gPyAnJyA6ICd0cmFuc3BhcmVudCcgfT5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0XCI+IHtcbiAgICAgICAgY29sb3JzLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsgaSB9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH0gPC9vbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVidWdcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9wPlxuICAgICAgICAgIDxwPnsgZGlyZWN0aW9uIH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8b2wgY2xhc3NOYW1lPVwiYnRuc1wiPlxuICAgICAgICB7XG4gICAgICAgICAgY29sb3JzLm1hcCgoXywgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGkgLyAoYXJyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9eyBpIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2xpY2tCdG4ocHJvZ3Jlc3MpIH1cbiAgICAgICAgICAgICAgPnsgKHByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpIH08L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2xpY2tCdG4oMSkgfT4xMDA8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxkaXZcbiAgICAgICAgZGF0YS1pbmRleD17IHByb2dyZXNzIH1cbiAgICAgICAgY2xhc3NOYW1lPVwiY3Jhd2xcIlxuICAgICAgLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/crawl/index.tsx\n");

/***/ })

})