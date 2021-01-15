webpackHotUpdate_N_E("pages/crawl",{

/***/ "./src/pages/crawl/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/crawl/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/crawl/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar length = 9;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"crawl__Wrapper\",\n  componentId: \"sc-1q8gd8t-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;color:rgba(0,0,255,.1);font-size:50vh;font-weight:bold;background:#0277BD;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}.crawl{position:fixed;top:50%;left:50%;margin:auto;max-width:600px;max-height:300px;width:100%;background:url(/crawl/img.png) center top no-repeat;background-size:cover;transform:translate(-50%,-50%);&:after{display:block;padding-top:50%;content:'';}\", \"}\"], 100 * length, function () {\n  var styles = '';\n\n  for (var i = 0; i < length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / length, \"%;\\n\\n            &:before {\\n              content: '\").concat(i === length ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}(), function () {\n  var styles = '';\n\n  for (var i = 0; i < length - 1; ++i) {\n    styles += \"\\n          &[data-index='\".concat(i, \"'] {\\n            background-position: center \").concat(100 / (length - 2) * i, \"%;\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollProgress = _useState3[0],\n      setScrollProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState4[0],\n      setLastProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    if (1 <= progress && direction === 'down') {\n      window.scrollTo(window.scrollX, 1);\n    } else if (progress <= 0 && direction === 'up') {\n      window.scrollTo(window.scrollX, contentsHeight - windowHeight - 1);\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", new Array(length + 1).fill(null).map(function (_, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 262,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 259,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 268,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 269,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 267,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 266,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [new Array(length).fill(null).map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 282,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 289,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 272,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"data-index\": 0 | length * progress,\n      className: \"crawl\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 291,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 258,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"67TQg13/oVz+gUfpSdOD5ucq/yI=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NyYXdsL2luZGV4LnRzeD82ZWU1Il0sIm5hbWVzIjpbImxlbmd0aCIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJzdHlsZXMiLCJpIiwiY3NzIiwiU2Nyb2xsV3JhcHBlciIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJsYXN0UHJvZ3Jlc3MiLCJzZXRMYXN0UHJvZ3Jlc3MiLCJjb250ZW50c0hlaWdodCIsInNldENvbnRlbnRzSGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJBbmltYXRpb24iLCJzdGFydFZhbHVlIiwidGFyZ2V0VmFsdWUiLCJkdXJhdGlvbiIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsInVzZUVmZmVjdCIsImluaXQiLCJ3YXJwIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FuY2VsU2Nyb2xsIiwicGFzc2l2ZSIsInN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwiZG9jdW1lbnQiLCJoYW5kbGVTY3JvbGwiLCJub3JtYWxpemUiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiaGFuZGxlQ2xpY2tCdG4iLCJ0YXJnZXRQcm9ncmVzcyIsInN0YXJ0UHJvZ3Jlc3MiLCJpc1JldmVyc2UiLCJlYXNpbmciLCJzdGVwIiwidmFsIiwibWF4IiwibWluIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsInRvRml4ZWQiLCJhcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdB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Q0FBQ3ZDLFFBQUQsQ0FBcEI7QUFBQSxXQUZaO0FBQUEsb0JBR0csQ0FBQ0EsUUFBUSxHQUFHLEdBQVosRUFBaUJvRCxPQUFqQixDQUF5QixDQUF6QjtBQUhILFdBQ1ExRCxDQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFNRCxPQWJELENBRkosZUFpQkU7QUFBSSxlQUFPLEVBQUc7QUFBQSxpQkFBTTZDLGNBQWMsQ0FBQyxDQUFELENBQXBCO0FBQUEsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQWlDRTtBQUNFLG9CQUFhLElBQUlsRCxNQUFNLEdBQUdXLFFBRDVCO0FBRUUsZUFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdDRDs7R0F4THVCSixhOztNQUFBQSxhIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NyYXdsL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL0FuaW1hdGlvbic7XG5cbmxldCBsZW5ndGggPSA5O1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtcblxuICAubGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHsgMTAwICogbGVuZ3RoIH12aDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIC4xKTtcbiAgICAgIGZvbnQtc2l6ZTogNTB2aDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYmFja2dyb3VuZDogIzAyNzdCRDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcwJyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHsoKCkgPT4ge1xuICAgICAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0eWxlcyArPSBgXG4gICAgICAgICAgbGk6bnRoLWNoaWxkKCR7IGkgKyAxIH0pIHtcbiAgICAgICAgICAgIGhlaWdodDogJHsgMTAwIC8gbGVuZ3RoIH0lO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICckeyBpID09PSBsZW5ndGggPyAwIDogaSB9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NgJHsgc3R5bGVzIH1gO1xuICAgIH0pKCl9XG4gIH1cblxuICAuZGVidWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyByaWdodDogMDtcbiAgICB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcbiAgfVxuXG4gIC5idG5zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgICAgICsgbGkge1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNyYXdsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA2MDBweDsgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC9jcmF3bC9pbWcucG5nKSBjZW50ZXIgdG9wIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctdG9wOiA1MCU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG5cbiAgICAkeygoKSA9PiB7XG4gICAgICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgICAgIHN0eWxlcyArPSBgXG4gICAgICAgICAgJltkYXRhLWluZGV4PSckeyBpIH0nXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgJHsgMTAwIC8gKGxlbmd0aCAtIDIpICogaSB9JTtcbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NgJHsgc3R5bGVzIH1gO1xuICAgIH0pKCl9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbFdyYXBwZXIoKSB7XG4gIGNvbnN0IFsgZGlyZWN0aW9uLCBzZXREaXJlY3Rpb24gXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgWyBwcm9ncmVzcywgc2V0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgbGFzdFByb2dyZXNzLCBzZXRMYXN0UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGNvbnRlbnRzSGVpZ2h0LCBzZXRDb250ZW50c0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgd2luZG93SGVpZ2h0LCBzZXRXaW5kb3dIZWlnaHQgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIHNjcm9sbFksIHNldFNjcm9sbFkgXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIGFuaW1hdGlvbiwgc2V0QW5pbWF0aW9uIF0gPSB1c2VTdGF0ZShuZXcgQW5pbWF0aW9uKHtcbiAgICBzdGFydFZhbHVlOiAwLFxuICAgIHRhcmdldFZhbHVlOiAwLFxuICAgIGR1cmF0aW9uOiAxXG4gIH0pKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICBpbml0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJwKCk7XG4gIH0sIFtkaXJlY3Rpb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRpZmYgPSBsYXN0UHJvZ3Jlc3MgLSBwcm9ncmVzcztcblxuICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gLjk5KSB7XG4gICAgICAgIHNldERpcmVjdGlvbigndXAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAuOTkpIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCdkb3duJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2FycCgpO1xuICAgIHNldExhc3RQcm9ncmVzcyhwcm9ncmVzcyk7XG4gIH0sIFtwcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCAoY29udGVudHNIZWlnaHQgLSB3aW5kb3dIZWlnaHQpICogc2Nyb2xsUHJvZ3Jlc3MpO1xuICB9LCBbc2Nyb2xsUHJvZ3Jlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkge1xuICAgICAgc2V0UHJvZ3Jlc3Moc2Nyb2xsWSAvIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkpO1xuICAgIH1cbiAgfSwgW3Njcm9sbFldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FuY2VsU2Nyb2xsKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGNhbmNlbFNjcm9sbCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNhbmNlbFNjcm9sbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsU2Nyb2xsKCkge1xuICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICB9XG4gIH0sIFthbmltYXRpb25dKTtcblxuICBmdW5jdGlvbiBpbml0KCk6IHZvaWQge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdhcnAoKTogdm9pZCB7XG4gICAgaWYgKDEgPD0gcHJvZ3Jlc3MgJiYgZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cuc2Nyb2xsWCwgMSk7XG4gICAgfSBlbHNlIGlmIChwcm9ncmVzcyA8PSAwICYmIGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCBjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpOiB2b2lkIHtcbiAgICBzZXRDb250ZW50c0hlaWdodChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuY2xpZW50SGVpZ2h0KTtcbiAgICBzZXRXaW5kb3dIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBzZXRTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrQnRuKHRhcmdldFByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgY29uc3QgaXNSZXZlcnNlID0gTWF0aC5hYnModGFyZ2V0UHJvZ3Jlc3MgLSBzdGFydFByb2dyZXNzKSA+IC41O1xuICAgIGNvbnN0IGRpZmYgPSB0YXJnZXRQcm9ncmVzcyAtIHN0YXJ0UHJvZ3Jlc3M7XG5cbiAgICBzZXRBbmltYXRpb24oXG4gICAgICBuZXcgQW5pbWF0aW9uKHtcbiAgICAgICAgc3RhcnRWYWx1ZTogMCxcbiAgICAgICAgdGFyZ2V0VmFsdWU6IHRhcmdldFByb2dyZXNzLFxuICAgICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxuICAgICAgICBzdGVwOiBpc1JldmVyc2UgPyAodmFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkaWZmIDwgMCA/IDEgOiAtMTtcblxuICAgICAgICAgIHZhbCA9IHN0YXJ0UHJvZ3Jlc3MgKyBkaXJlY3Rpb24gKiAoKDEgLSBNYXRoLmFicyhkaWZmKSkgKiB2YWwpO1xuXG4gICAgICAgICAgaWYgKHZhbCA8IDApIHtcbiAgICAgICAgICAgIHZhbCA9IDEgKyB2YWw7XG4gICAgICAgICAgfSBlbHNlIGlmICgxIDwgdmFsKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwgLSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFNjcm9sbFByb2dyZXNzKG5vcm1hbGl6ZSh2YWwpKTtcbiAgICAgICAgfSA6ICh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHZhbCA9IHN0YXJ0UHJvZ3Jlc3MgKyBkaWZmICogdmFsO1xuXG4gICAgICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heCguMDAwMiwgTWF0aC5taW4odmFsLCAuOTk5OSkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9eyAhIWRpcmVjdGlvbiA/ICcnIDogJ3RyYW5zcGFyZW50JyB9PlxuICAgICAgPG9sIGNsYXNzTmFtZT1cImxpc3RcIj4ge1xuICAgICAgICAobmV3IEFycmF5KGxlbmd0aCArIDEpLmZpbGwobnVsbCkpLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsgaSB9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH0gPC9vbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVidWdcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9wPlxuICAgICAgICAgIDxwPnsgZGlyZWN0aW9uIH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8b2wgY2xhc3NOYW1lPVwiYnRuc1wiPlxuICAgICAgICB7XG4gICAgICAgICAgKG5ldyBBcnJheShsZW5ndGggKS5maWxsKG51bGwpKS5tYXAoKF8sIGksIGFycikgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpIC8gKGFyci5sZW5ndGggLSAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXsgaSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IGhhbmRsZUNsaWNrQnRuKHByb2dyZXNzKSB9XG4gICAgICAgICAgICAgID57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8bGkgb25DbGljaz17ICgpID0+IGhhbmRsZUNsaWNrQnRuKDEpIH0+MTAwPC9saT5cbiAgICAgIDwvb2w+XG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtaW5kZXg9eyAwIHwgbGVuZ3RoICogcHJvZ3Jlc3MgfVxuICAgICAgICBjbGFzc05hbWU9XCJjcmF3bFwiXG4gICAgICAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/crawl/index.tsx\n");

/***/ })

})