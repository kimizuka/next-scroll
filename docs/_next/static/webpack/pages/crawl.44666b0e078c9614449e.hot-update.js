webpackHotUpdate_N_E("pages/crawl",{

/***/ "./src/pages/crawl/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/crawl/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/crawl/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar length = 9;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"crawl__Wrapper\",\n  componentId: \"sc-1q8gd8t-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;color:rgba(0,0,255,.1);font-size:50vh;font-weight:bold;background:#0277BD;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}.crawl{position:fixed;top:50%;left:50%;margin:auto;max-width:600px;max-height:300px;width:100%;background:url(/crawl/img.png) center top no-repeat;background-size:cover;transform:translate(-50%,-50%);&:after{display:block;padding-top:50%;content:'';}\", \"}\"], 100 * length, function () {\n  var styles = '';\n\n  for (var i = 0; i < length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / length, \"%;\\n\\n            &:before {\\n              content: '\").concat(i === length - 1 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}(), function () {\n  var styles = '';\n\n  for (var i = 0; i < length; ++i) {\n    styles += \"\\n          &[data-index='\".concat(i, \"'] {\\n            background-position: center \").concat(100 / length * i, \"%;\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollProgress = _useState3[0],\n      setScrollProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState4[0],\n      setLastProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    if (1 <= progress && direction === 'down') {\n      window.scrollTo(window.scrollX, 1);\n    } else if (progress <= 0 && direction === 'up') {\n      window.scrollTo(window.scrollX, contentsHeight - windowHeight - 1);\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", new Array(length + 1).fill(null).map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 262,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 259,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 268,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 269,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 267,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 266,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [new Array(length).fill(null).map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 282,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 289,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 272,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"data-index\": 0 | length * progress,\n      className: \"crawl\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 291,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 258,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"67TQg13/oVz+gUfpSdOD5ucq/yI=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NyYXdsL2luZGV4LnRzeD82ZWU1Il0sIm5hbWVzIjpbImxlbmd0aCIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJzdHlsZXMiLCJpIiwiY3NzIiwiU2Nyb2xsV3JhcHBlciIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJsYXN0UHJvZ3Jlc3MiLCJzZXRMYXN0UHJvZ3Jlc3MiLCJjb250ZW50c0hlaWdodCIsInNldENvbnRlbnRzSGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJBbmltYXRpb24iLCJzdGFydFZhbHVlIiwidGFyZ2V0VmFsdWUiLCJkdXJhdGlvbiIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsInVzZUVmZmVjdCIsImluaXQiLCJ3YXJwIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FuY2VsU2Nyb2xsIiwicGFzc2l2ZSIsInN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwiZG9jdW1lbnQiLCJoYW5kbGVTY3JvbGwiLCJub3JtYWxpemUiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiaGFuZGxlQ2xpY2tCdG4iLCJ0YXJnZXRQcm9ncmVzcyIsInN0YXJ0UHJvZ3Jlc3MiLCJpc1JldmVyc2UiLCJlYXNpbmciLCJzdGVwIiwidmFsIiwibWF4IiwibWluIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsInRvRml4ZWQiLCJhcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdB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QUQsQ0FBcEI7QUFBQSxXQUZaO0FBQUEsb0JBR0csQ0FBQ0EsUUFBUSxHQUFHLEdBQVosRUFBaUJvRCxPQUFqQixDQUF5QixDQUF6QjtBQUhILFdBQ1ExRCxDQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFNRCxPQWJELENBRkosZUFpQkU7QUFBSSxlQUFPLEVBQUc7QUFBQSxpQkFBTTZDLGNBQWMsQ0FBQyxDQUFELENBQXBCO0FBQUEsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQWlDRTtBQUNFLG9CQUFhLElBQUlsRCxNQUFNLEdBQUdXLFFBRDVCO0FBRUUsZUFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdDRDs7R0F4THVCSixhOztNQUFBQSxhIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NyYXdsL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL0FuaW1hdGlvbic7XG5cbmxldCBsZW5ndGggPSA5O1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtcblxuICAubGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHsgMTAwICogbGVuZ3RoIH12aDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIC4xKTtcbiAgICAgIGZvbnQtc2l6ZTogNTB2aDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYmFja2dyb3VuZDogIzAyNzdCRDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcwJyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHsoKCkgPT4ge1xuICAgICAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0eWxlcyArPSBgXG4gICAgICAgICAgbGk6bnRoLWNoaWxkKCR7IGkgKyAxIH0pIHtcbiAgICAgICAgICAgIGhlaWdodDogJHsgMTAwIC8gbGVuZ3RoIH0lO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICckeyBpID09PSBsZW5ndGggLSAxID8gMCA6IGkgfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzYCR7IHN0eWxlcyB9YDtcbiAgICB9KSgpfVxuICB9XG5cbiAgLmRlYnVnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDsgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDgwcHg7IGhlaWdodDogODBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG4gIH1cblxuICAuYnRucyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDsgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuXG4gICAgICArIGxpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jcmF3bCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlOyBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogNjAwcHg7IG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgvY3Jhd2wvaW1nLnBuZykgY2VudGVyIHRvcCBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nLXRvcDogNTAlO1xuICAgICAgY29udGVudDogJyc7XG4gICAgfVxuXG4gICAgJHsoKCkgPT4ge1xuICAgICAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0eWxlcyArPSBgXG4gICAgICAgICAgJltkYXRhLWluZGV4PSckeyBpIH0nXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgJHsgMTAwIC8gKGxlbmd0aCkgKiBpIH0lO1xuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc2AkeyBzdHlsZXMgfWA7XG4gICAgfSkoKX1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsV3JhcHBlcigpIHtcbiAgY29uc3QgWyBkaXJlY3Rpb24sIHNldERpcmVjdGlvbiBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIHByb2dyZXNzLCBzZXRQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsUHJvZ3Jlc3MsIHNldFNjcm9sbFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBsYXN0UHJvZ3Jlc3MsIHNldExhc3RQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgY29udGVudHNIZWlnaHQsIHNldENvbnRlbnRzSGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyB3aW5kb3dIZWlnaHQsIHNldFdpbmRvd0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsWSwgc2V0U2Nyb2xsWSBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgYW5pbWF0aW9uLCBzZXRBbmltYXRpb24gXSA9IHVzZVN0YXRlKG5ldyBBbmltYXRpb24oe1xuICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgdGFyZ2V0VmFsdWU6IDAsXG4gICAgZHVyYXRpb246IDFcbiAgfSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIGluaXQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcnAoKTtcbiAgfSwgW2RpcmVjdGlvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGlmZiA9IGxhc3RQcm9ncmVzcyAtIHByb2dyZXNzO1xuXG4gICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAuOTkpIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCdkb3duJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpcmVjdGlvbigndXAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YXJwKCk7XG4gICAgc2V0TGFzdFByb2dyZXNzKHByb2dyZXNzKTtcbiAgfSwgW3Byb2dyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkgKiBzY3JvbGxQcm9ncmVzcyk7XG4gIH0sIFtzY3JvbGxQcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSB7XG4gICAgICBzZXRQcm9ncmVzcyhzY3JvbGxZIC8gKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSk7XG4gICAgfVxuICB9LCBbc2Nyb2xsWV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgY2FuY2VsU2Nyb2xsKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2FuY2VsU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxTY3JvbGwoKSB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIH1cbiAgfSwgW2FuaW1hdGlvbl0pO1xuXG4gIGZ1bmN0aW9uIGluaXQoKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FycCgpOiB2b2lkIHtcbiAgICBpZiAoMSA8PSBwcm9ncmVzcyAmJiBkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCAxKTtcbiAgICB9IGVsc2UgaWYgKHByb2dyZXNzIDw9IDAgJiYgZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0IC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCk6IHZvaWQge1xuICAgIHNldENvbnRlbnRzSGVpZ2h0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5jbGllbnRIZWlnaHQpO1xuICAgIHNldFdpbmRvd0hlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIHNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tCdG4odGFyZ2V0UHJvZ3Jlc3M6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICBjb25zdCBpc1JldmVyc2UgPSBNYXRoLmFicyh0YXJnZXRQcm9ncmVzcyAtIHN0YXJ0UHJvZ3Jlc3MpID4gLjU7XG4gICAgY29uc3QgZGlmZiA9IHRhcmdldFByb2dyZXNzIC0gc3RhcnRQcm9ncmVzcztcblxuICAgIHNldEFuaW1hdGlvbihcbiAgICAgIG5ldyBBbmltYXRpb24oe1xuICAgICAgICBzdGFydFZhbHVlOiAwLFxuICAgICAgICB0YXJnZXRWYWx1ZTogdGFyZ2V0UHJvZ3Jlc3MsXG4gICAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dCcsXG4gICAgICAgIHN0ZXA6IGlzUmV2ZXJzZSA/ICh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRpZmYgPCAwID8gMSA6IC0xO1xuXG4gICAgICAgICAgdmFsID0gc3RhcnRQcm9ncmVzcyArIGRpcmVjdGlvbiAqICgoMSAtIE1hdGguYWJzKGRpZmYpKSAqIHZhbCk7XG5cbiAgICAgICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICAgICAgdmFsID0gMSArIHZhbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKDEgPCB2YWwpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbCAtIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKHZhbCkpO1xuICAgICAgICB9IDogKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdmFsID0gc3RhcnRQcm9ncmVzcyArIGRpZmYgKiB2YWw7XG5cbiAgICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUodmFsKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4wMDAyLCBNYXRoLm1pbih2YWwsIC45OTk5KSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17ICEhZGlyZWN0aW9uID8gJycgOiAndHJhbnNwYXJlbnQnIH0+XG4gICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdFwiPiB7XG4gICAgICAgIChuZXcgQXJyYXkobGVuZ3RoICsgMSkuZmlsbChudWxsKSkubWFwKChfLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9eyBpIH0gLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfSA8L29sPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWJ1Z1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPnsgKHByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpIH08L3A+XG4gICAgICAgICAgPHA+eyBkaXJlY3Rpb24gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJidG5zXCI+XG4gICAgICAgIHtcbiAgICAgICAgICAobmV3IEFycmF5KGxlbmd0aCApLmZpbGwobnVsbCkpLm1hcCgoXywgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGkgLyAoYXJyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9eyBpIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2xpY2tCdG4ocHJvZ3Jlc3MpIH1cbiAgICAgICAgICAgICAgPnsgKHByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpIH08L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2xpY2tCdG4oMSkgfT4xMDA8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxkaXZcbiAgICAgICAgZGF0YS1pbmRleD17IDAgfCBsZW5ndGggKiBwcm9ncmVzcyB9XG4gICAgICAgIGNsYXNzTmFtZT1cImNyYXdsXCJcbiAgICAgIC8+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/crawl/index.tsx\n");

/***/ })

})