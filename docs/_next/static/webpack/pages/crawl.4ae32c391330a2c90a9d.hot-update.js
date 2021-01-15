webpackHotUpdate_N_E("pages/crawl",{

/***/ "./src/pages/crawl/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/crawl/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/crawl/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar length = 9;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"crawl__Wrapper\",\n  componentId: \"sc-1q8gd8t-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;color:rgba(0,0,255,.1);font-size:50vh;font-weight:bold;background:#0277BD;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}.crawl{position:fixed;top:50%;left:50%;margin:auto;max-width:600px;max-height:300px;width:100%;background:url(/crawl/img.png) center top no-repeat;background-size:cover;transform:translate(-50%,-50%);&:after{display:block;padding-top:50%;content:'';}\", \"}\"], 100 * length, function () {\n  var styles = '';\n\n  for (var i = 0; i < length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / length, \"%;\\n\\n            &:before {\\n              content: '\").concat(i === length ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}(), function () {\n  var styles = '';\n\n  for (var i = 0; i < length; ++i) {\n    styles += \"\\n          &[data-index='\".concat(i, \"'] {\\n            background-position: center \").concat(100 / (length - 1) * i, \"%;\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollProgress = _useState3[0],\n      setScrollProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState4[0],\n      setLastProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    if (1 <= progress && direction === 'down') {\n      window.scrollTo(window.scrollX, 1);\n    } else if (progress <= 0 && direction === 'up') {\n      window.scrollTo(window.scrollX, contentsHeight - windowHeight - 1);\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", new Array(length + 1).fill(null).map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 262,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 259,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 268,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 269,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 267,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 266,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [new Array(length).fill(null).map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 282,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 289,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 272,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"data-index\": 0 | length * progress,\n      className: \"crawl\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 291,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 258,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"67TQg13/oVz+gUfpSdOD5ucq/yI=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NyYXdsL2luZGV4LnRzeD82ZWU1Il0sIm5hbWVzIjpbImxlbmd0aCIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJzdHlsZXMiLCJpIiwiY3NzIiwiU2Nyb2xsV3JhcHBlciIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJsYXN0UHJvZ3Jlc3MiLCJzZXRMYXN0UHJvZ3Jlc3MiLCJjb250ZW50c0hlaWdodCIsInNldENvbnRlbnRzSGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJBbmltYXRpb24iLCJzdGFydFZhbHVlIiwidGFyZ2V0VmFsdWUiLCJkdXJhdGlvbiIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsInVzZUVmZmVjdCIsImluaXQiLCJ3YXJwIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FuY2VsU2Nyb2xsIiwicGFzc2l2ZSIsInN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwiZG9jdW1lbnQiLCJoYW5kbGVTY3JvbGwiLCJub3JtYWxpemUiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiaGFuZGxlQ2xpY2tCdG4iLCJ0YXJnZXRQcm9ncmVzcyIsInN0YXJ0UHJvZ3Jlc3MiLCJpc1JldmVyc2UiLCJlYXNpbmciLCJzdGVwIiwidmFsIiwibWF4IiwibWluIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsInRvRml4ZWQiLCJhcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUcsQ0FBYjtBQUVBLElBQU1DLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxNEJBTUUsTUFBTUgsTUFOUixFQXdCTixZQUFNO0FBQ1AsTUFBSUksTUFBTSxHQUFHLEVBQWI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxNQUFwQixFQUE0QixFQUFFSyxDQUE5QixFQUFpQztBQUMvQkQsVUFBTSx1Q0FDWUMsQ0FBQyxHQUFHLENBRGhCLHNDQUVTLE1BQU1MLE1BRmYsbUVBS2FLLENBQUMsS0FBS0wsTUFBTixHQUFlLENBQWYsR0FBbUJLLENBTGhDLDZDQUFOO0FBU0Q7O0FBRUQsU0FBT0MsNkRBQVAsV0FBY0YsTUFBZDtBQUNELENBaEJDLEVBeEJPLEVBMEZOLFlBQU07QUFDUCxNQUFJQSxNQUFNLEdBQUcsRUFBYjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLE1BQXBCLEVBQTRCLEVBQUVLLENBQTlCLEVBQWlDO0FBQy9CRCxVQUFNLHdDQUNhQyxDQURiLDJEQUU2QixPQUFPTCxNQUFNLEdBQUcsQ0FBaEIsSUFBcUJLLENBRmxELDhCQUFOO0FBS0Q7O0FBRUQsU0FBT0MsNkRBQVAsV0FBY0YsTUFBZDtBQUNELENBWkMsRUExRk8sQ0FBYjtLQUFNSCxPO0FBMEdTLFNBQVNNLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxFQUFELENBRE47QUFBQSxNQUM5QkMsU0FEOEI7QUFBQSxNQUNuQkMsWUFEbUI7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsQ0FBRCxDQUZKO0FBQUEsTUFFOUJHLFFBRjhCO0FBQUEsTUFFcEJDLFdBRm9COztBQUFBLG1CQUdRSixzREFBUSxDQUFDLENBQUQsQ0FIaEI7QUFBQSxNQUc5QkssY0FIOEI7QUFBQSxNQUdkQyxpQkFIYzs7QUFBQSxtQkFJSU4sc0RBQVEsQ0FBQyxDQUFELENBSlo7QUFBQSxNQUk5Qk8sWUFKOEI7QUFBQSxNQUloQkMsZUFKZ0I7O0FBQUEsbUJBS1FSLHNEQUFRLENBQUMsQ0FBRCxDQUxoQjtBQUFBLE1BSzlCUyxjQUw4QjtBQUFBLE1BS2RDLGlCQUxjOztBQUFBLG1CQU1JVixzREFBUSxDQUFDLENBQUQsQ0FOWjtBQUFBLE1BTTlCVyxZQU44QjtBQUFBLE1BTWhCQyxlQU5nQjs7QUFBQSxtQkFPTlosc0RBQVEsQ0FBQyxDQUFELENBUEY7QUFBQSxNQU85QmEsT0FQOEI7QUFBQSxNQU9yQkMsVUFQcUI7O0FBQUEsbUJBUUZkLHNEQUFRLENBQUMsSUFBSWUsNERBQUosQ0FBYztBQUN6REMsY0FBVSxFQUFFLENBRDZDO0FBRXpEQyxlQUFXLEVBQUUsQ0FGNEM7QUFHekRDLFlBQVEsRUFBRTtBQUgrQyxHQUFkLENBQUQsQ0FSTjtBQUFBLE1BUTlCQyxTQVI4QjtBQUFBLE1BUW5CQyxZQVJtQjs7QUFjdENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ3BCLFNBQUwsRUFBZ0I7QUFDZHFCLFVBQUk7QUFFSjtBQUNEOztBQUVEQyxRQUFJO0FBQ0wsR0FSUSxFQVFOLENBQUN0QixTQUFELENBUk0sQ0FBVDtBQVVBb0IseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUcsSUFBSSxHQUFHakIsWUFBWSxHQUFHSixRQUE1Qjs7QUFFQSxRQUFJcUIsSUFBSSxHQUFHLENBQVgsRUFBYztBQUNaLFVBQUlDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixJQUFULElBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCdEIsb0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxPQUZELE1BRU87QUFDTEEsb0JBQVksQ0FBQyxNQUFELENBQVo7QUFDRDtBQUNGLEtBTkQsTUFNTztBQUNMLFVBQUl1QixJQUFJLENBQUNDLEdBQUwsQ0FBU0YsSUFBVCxJQUFpQixHQUFyQixFQUEwQjtBQUN4QnRCLG9CQUFZLENBQUMsTUFBRCxDQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLG9CQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRjs7QUFFRHFCLFFBQUk7QUFDSmYsbUJBQWUsQ0FBQ0wsUUFBRCxDQUFmO0FBQ0QsR0FuQlEsRUFtQk4sQ0FBQ0EsUUFBRCxDQW5CTSxDQUFUO0FBcUJBa0IseURBQVMsQ0FBQyxZQUFNO0FBQ2RNLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkQsTUFBTSxDQUFDRSxPQUF2QixFQUFnQyxDQUFDcEIsY0FBYyxHQUFHRSxZQUFsQixJQUFrQ04sY0FBbEU7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsY0FBRCxDQUZNLENBQVQ7QUFJQWdCLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlaLGNBQWMsR0FBR0UsWUFBckIsRUFBbUM7QUFDakNQLGlCQUFXLENBQUNTLE9BQU8sSUFBSUosY0FBYyxHQUFHRSxZQUFyQixDQUFSLENBQVg7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDRSxPQUFELENBSk0sQ0FBVDtBQU1BUSx5REFBUyxDQUFDLFlBQU07QUFDZE0sVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ0MsWUFBckMsRUFBbUQ7QUFDakRDLGFBQU8sRUFBRTtBQUR3QyxLQUFuRDtBQUdBTCxVQUFNLENBQUNHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDQyxZQUFqQyxFQUErQztBQUM3Q0MsYUFBTyxFQUFFO0FBRG9DLEtBQS9DO0FBR0FMLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0NDLFlBQXRDLEVBQW9EO0FBQ2xEQyxhQUFPLEVBQUU7QUFEeUMsS0FBcEQ7QUFJQSxXQUFPLFlBQU07QUFDWGIsZUFBUyxDQUFDYyxJQUFWO0FBQ0FOLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsV0FBM0IsRUFBd0NILFlBQXhDO0FBQ0FKLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0NILFlBQXBDO0FBQ0FKLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsWUFBM0IsRUFBeUNILFlBQXpDO0FBQ0QsS0FMRDs7QUFPQSxhQUFTQSxZQUFULEdBQXdCO0FBQ3RCWixlQUFTLENBQUNjLElBQVY7QUFDRDtBQUNGLEdBckJRLEVBcUJOLENBQUNkLFNBQUQsQ0FyQk0sQ0FBVDs7QUF1QkEsV0FBU0csSUFBVCxHQUFzQjtBQUNwQkssVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0ssWUFBbEMsRUFBZ0Q7QUFDOUNILGFBQU8sRUFBRTtBQURxQyxLQUFoRDtBQUlBSSxZQUFRLENBQUNOLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DTyxZQUFwQyxFQUFrRDtBQUNoREwsYUFBTyxFQUFFO0FBRHVDLEtBQWxEO0FBSUFHLGdCQUFZO0FBQ1o3QixxQkFBaUIsQ0FBQ2dDLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FBakI7QUFDRDs7QUFFRCxXQUFTZixJQUFULEdBQXNCO0FBQ3BCLFFBQUksS0FBS3BCLFFBQUwsSUFBaUJGLFNBQVMsS0FBSyxNQUFuQyxFQUEyQztBQUN6QzBCLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkQsTUFBTSxDQUFDRSxPQUF2QixFQUFnQyxDQUFoQztBQUNELEtBRkQsTUFFTyxJQUFJMUIsUUFBUSxJQUFJLENBQVosSUFBaUJGLFNBQVMsS0FBSyxJQUFuQyxFQUF5QztBQUM5QzBCLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkQsTUFBTSxDQUFDRSxPQUF2QixFQUFnQ3BCLGNBQWMsR0FBR0UsWUFBakIsR0FBZ0MsQ0FBaEU7QUFDRDtBQUNGOztBQUVELFdBQVN3QixZQUFULEdBQThCO0FBQzVCekIscUJBQWlCLENBQUMwQixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLFlBQWhDLENBQWpCO0FBQ0E1QixtQkFBZSxDQUFDZSxNQUFNLENBQUNjLFdBQVIsQ0FBZjtBQUNEOztBQUVELFdBQVNKLFlBQVQsR0FBOEI7QUFDNUJ2QixjQUFVLENBQUNhLE1BQU0sQ0FBQ2QsT0FBUixDQUFWO0FBQ0Q7O0FBRUQsV0FBUzZCLGNBQVQsQ0FBd0JDLGNBQXhCLEVBQXNEO0FBQ3BELFFBQU1DLGFBQWEsR0FBR3pDLFFBQXRCO0FBQ0EsUUFBTTBDLFNBQVMsR0FBR3BCLElBQUksQ0FBQ0MsR0FBTCxDQUFTaUIsY0FBYyxHQUFHQyxhQUExQixJQUEyQyxFQUE3RDtBQUNBLFFBQU1wQixJQUFJLEdBQUdtQixjQUFjLEdBQUdDLGFBQTlCO0FBRUF4QixnQkFBWSxDQUNWLElBQUlMLDREQUFKLENBQWM7QUFDWkMsZ0JBQVUsRUFBRSxDQURBO0FBRVpDLGlCQUFXLEVBQUUwQixjQUZEO0FBR1p6QixjQUFRLEVBQUUsR0FIRTtBQUlaNEIsWUFBTSxFQUFFLFdBSkk7QUFLWkMsVUFBSSxFQUFFRixTQUFTLEdBQUcsVUFBQ0csR0FBRCxFQUFpQjtBQUNqQyxZQUFNL0MsU0FBUyxHQUFHdUIsSUFBSSxHQUFHLENBQVAsR0FBVyxDQUFYLEdBQWUsQ0FBQyxDQUFsQztBQUVBd0IsV0FBRyxHQUFHSixhQUFhLEdBQUczQyxTQUFTLElBQUksQ0FBQyxJQUFJd0IsSUFBSSxDQUFDQyxHQUFMLENBQVNGLElBQVQsQ0FBTCxJQUF1QndCLEdBQTNCLENBQS9COztBQUVBLFlBQUlBLEdBQUcsR0FBRyxDQUFWLEVBQWE7QUFDWEEsYUFBRyxHQUFHLElBQUlBLEdBQVY7QUFDRCxTQUZELE1BRU8sSUFBSSxJQUFJQSxHQUFSLEVBQWE7QUFDbEJBLGFBQUcsR0FBR0EsR0FBRyxHQUFHLENBQVo7QUFDRDs7QUFFRDFDLHlCQUFpQixDQUFDZ0MsU0FBUyxDQUFDVSxHQUFELENBQVYsQ0FBakI7QUFDRCxPQVpjLEdBWVgsVUFBQ0EsR0FBRCxFQUFpQjtBQUNuQkEsV0FBRyxHQUFHSixhQUFhLEdBQUdwQixJQUFJLEdBQUd3QixHQUE3QjtBQUVBMUMseUJBQWlCLENBQUNnQyxTQUFTLENBQUNVLEdBQUQsQ0FBVixDQUFqQjtBQUNEO0FBckJXLEtBQWQsQ0FEVSxDQUFaO0FBeUJEOztBQUVELFdBQVNWLFNBQVQsQ0FBbUJVLEdBQW5CLEVBQXdDO0FBQ3RDLFdBQU92QixJQUFJLENBQUN3QixHQUFMLENBQVMsS0FBVCxFQUFnQnhCLElBQUksQ0FBQ3lCLEdBQUwsQ0FBU0YsR0FBVCxFQUFjLEtBQWQsQ0FBaEIsQ0FBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLE9BQUQ7QUFBUyxhQUFTLEVBQUcsQ0FBQyxDQUFDL0MsU0FBRixHQUFjLEVBQWQsR0FBbUIsYUFBeEM7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUEsc0JBQ0csSUFBSWtELEtBQUosQ0FBVTNELE1BQU0sR0FBRyxDQUFuQixFQUFzQjRELElBQXRCLENBQTJCLElBQTNCLENBQUQsQ0FBbUNDLEdBQW5DLENBQXVDLFVBQUNDLENBQUQsRUFBSXpELENBQUosRUFBVTtBQUMvQyw0QkFDRSwrRUFBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBR0QsT0FKRCxDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUU7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDZCQUNFO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBSyxDQUFDTSxRQUFRLEdBQUcsR0FBWixFQUFpQm9ELE9BQWpCLENBQXlCLENBQXpCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQUt0RDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBY0U7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLGlCQUVLLElBQUlrRCxLQUFKLENBQVUzRCxNQUFWLEVBQW1CNEQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBRCxDQUFnQ0MsR0FBaEMsQ0FBb0MsVUFBQ0MsQ0FBRCxFQUFJekQsQ0FBSixFQUFPMkQsR0FBUCxFQUFlO0FBQ2pELFlBQUkzRCxDQUFDLEtBQUsyRCxHQUFHLENBQUNoRSxNQUFKLEdBQWEsQ0FBdkIsRUFBMEI7QUFDeEI7QUFDRDs7QUFFRCxZQUFNVyxRQUFRLEdBQUdOLENBQUMsSUFBSTJELEdBQUcsQ0FBQ2hFLE1BQUosR0FBYSxDQUFqQixDQUFsQjtBQUVBLDRCQUNFO0FBRUUsaUJBQU8sRUFBRztBQUFBLG1CQUFNa0QsY0FBYyxDQUFDdkMsUUFBRCxDQUFwQjtBQUFBLFdBRlo7QUFBQSxvQkFHRyxDQUFDQSxRQUFRLEdBQUcsR0FBWixFQUFpQm9ELE9BQWpCLENBQXlCLENBQXpCO0FBSEgsV0FDUTFELENBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU1ELE9BYkQsQ0FGSixlQWlCRTtBQUFJLGVBQU8sRUFBRztBQUFBLGlCQUFNNkMsY0FBYyxDQUFDLENBQUQsQ0FBcEI7QUFBQSxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLGVBaUNFO0FBQ0Usb0JBQWEsSUFBSWxELE1BQU0sR0FBR1csUUFENUI7QUFFRSxlQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0NEOztHQXhMdUJKLGE7O01BQUFBLGEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvY3Jhd2wvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEFuaW1hdGlvbiBmcm9tICcuLi8uLi9hc3NldHMvanMvQW5pbWF0aW9uJztcblxubGV0IGxlbmd0aCA9IDk7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xuXG4gIC5saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAkeyAxMDAgKiBsZW5ndGggfXZoO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgLjEpO1xuICAgICAgZm9udC1zaXplOiA1MHZoO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDI3N0JEO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJzAnICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAkeygoKSA9PiB7XG4gICAgICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3R5bGVzICs9IGBcbiAgICAgICAgICBsaTpudGgtY2hpbGQoJHsgaSArIDEgfSkge1xuICAgICAgICAgICAgaGVpZ2h0OiAkeyAxMDAgLyBsZW5ndGggfSU7XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyR7IGkgPT09IGxlbmd0aCA/IDAgOiBpIH0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc2AkeyBzdHlsZXMgfWA7XG4gICAgfSkoKX1cbiAgfVxuXG4gIC5kZWJ1ZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuICB9XG5cbiAgLmJ0bnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA0NHB4OyBoZWlnaHQ6IDQ0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcblxuICAgICAgKyBsaSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY3Jhd2wge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTsgbGVmdDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwMHB4OyBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2NyYXdsL2ltZy5wbmcpIGNlbnRlciB0b3Agbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZy10b3A6IDUwJTtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cblxuICAgICR7KCgpID0+IHtcbiAgICAgIGxldCBzdHlsZXMgPSAnJztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICBzdHlsZXMgKz0gYFxuICAgICAgICAgICZbZGF0YS1pbmRleD0nJHsgaSB9J10ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICR7IDEwMCAvIChsZW5ndGggLSAxKSAqIGkgfSU7XG4gICAgICAgICAgfVxuICAgICAgICBgO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzYCR7IHN0eWxlcyB9YDtcbiAgICB9KSgpfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxXcmFwcGVyKCkge1xuICBjb25zdCBbIGRpcmVjdGlvbiwgc2V0RGlyZWN0aW9uIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgcHJvZ3Jlc3MsIHNldFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBzY3JvbGxQcm9ncmVzcywgc2V0U2Nyb2xsUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGxhc3RQcm9ncmVzcywgc2V0TGFzdFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBjb250ZW50c0hlaWdodCwgc2V0Q29udGVudHNIZWlnaHQgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHdpbmRvd0hlaWdodCwgc2V0V2luZG93SGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBzY3JvbGxZLCBzZXRTY3JvbGxZIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBhbmltYXRpb24sIHNldEFuaW1hdGlvbiBdID0gdXNlU3RhdGUobmV3IEFuaW1hdGlvbih7XG4gICAgc3RhcnRWYWx1ZTogMCxcbiAgICB0YXJnZXRWYWx1ZTogMCxcbiAgICBkdXJhdGlvbjogMVxuICB9KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgaW5pdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FycCgpO1xuICB9LCBbZGlyZWN0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaWZmID0gbGFzdFByb2dyZXNzIC0gcHJvZ3Jlc3M7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdhcnAoKTtcbiAgICBzZXRMYXN0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICB9LCBbcHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSAqIHNjcm9sbFByb2dyZXNzKTtcbiAgfSwgW3Njcm9sbFByb2dyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpIHtcbiAgICAgIHNldFByb2dyZXNzKHNjcm9sbFkgLyAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpKTtcbiAgICB9XG4gIH0sIFtzY3JvbGxZXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbFNjcm9sbCgpIHtcbiAgICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgfVxuICB9LCBbYW5pbWF0aW9uXSk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSgwKSk7XG4gIH1cblxuICBmdW5jdGlvbiB3YXJwKCk6IHZvaWQge1xuICAgIGlmICgxIDw9IHByb2dyZXNzICYmIGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIDEpO1xuICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPD0gMCAmJiBkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQgLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKTogdm9pZCB7XG4gICAgc2V0Q29udGVudHNIZWlnaHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmNsaWVudEhlaWdodCk7XG4gICAgc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja0J0bih0YXJnZXRQcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgIGNvbnN0IGlzUmV2ZXJzZSA9IE1hdGguYWJzKHRhcmdldFByb2dyZXNzIC0gc3RhcnRQcm9ncmVzcykgPiAuNTtcbiAgICBjb25zdCBkaWZmID0gdGFyZ2V0UHJvZ3Jlc3MgLSBzdGFydFByb2dyZXNzO1xuXG4gICAgc2V0QW5pbWF0aW9uKFxuICAgICAgbmV3IEFuaW1hdGlvbih7XG4gICAgICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgICAgIHRhcmdldFZhbHVlOiB0YXJnZXRQcm9ncmVzcyxcbiAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcbiAgICAgICAgc3RlcDogaXNSZXZlcnNlID8gKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZGlmZiA8IDAgPyAxIDogLTE7XG5cbiAgICAgICAgICB2YWwgPSBzdGFydFByb2dyZXNzICsgZGlyZWN0aW9uICogKCgxIC0gTWF0aC5hYnMoZGlmZikpICogdmFsKTtcblxuICAgICAgICAgIGlmICh2YWwgPCAwKSB7XG4gICAgICAgICAgICB2YWwgPSAxICsgdmFsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoMSA8IHZhbCkge1xuICAgICAgICAgICAgdmFsID0gdmFsIC0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUodmFsKSk7XG4gICAgICAgIH0gOiAodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICB2YWwgPSBzdGFydFByb2dyZXNzICsgZGlmZiAqIHZhbDtcblxuICAgICAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLjAwMDIsIE1hdGgubWluKHZhbCwgLjk5OTkpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPXsgISFkaXJlY3Rpb24gPyAnJyA6ICd0cmFuc3BhcmVudCcgfT5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0XCI+IHtcbiAgICAgICAgKG5ldyBBcnJheShsZW5ndGggKyAxKS5maWxsKG51bGwpKS5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17IGkgfSAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9IDwvb2w+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYnVnXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+eyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgfTwvcD5cbiAgICAgICAgICA8cD57IGRpcmVjdGlvbiB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG9sIGNsYXNzTmFtZT1cImJ0bnNcIj5cbiAgICAgICAge1xuICAgICAgICAgIChuZXcgQXJyYXkobGVuZ3RoICkuZmlsbChudWxsKSkubWFwKChfLCBpLCBhcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gaSAvIChhcnIubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17IGkgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGlja0J0bihwcm9ncmVzcykgfVxuICAgICAgICAgICAgICA+eyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgfTwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPGxpIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGlja0J0bigxKSB9PjEwMDwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPGRpdlxuICAgICAgICBkYXRhLWluZGV4PXsgMCB8IGxlbmd0aCAqIHByb2dyZXNzIH1cbiAgICAgICAgY2xhc3NOYW1lPVwiY3Jhd2xcIlxuICAgICAgLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/crawl/index.tsx\n");

/***/ })

})