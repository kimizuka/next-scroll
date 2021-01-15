webpackHotUpdate_N_E("pages/crawl",{

/***/ "./src/pages/crawl/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/crawl/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/Animation */ \"./src/assets/js/Animation.ts\");\n\n\nvar _jsxFileName = \"/Users/ki_230/Git/next-scroll/src/pages/crawl/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar length = 8;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"crawl__Wrapper\",\n  componentId: \"sc-1q8gd8t-0\"\n})([\"position:relative;transition:opacity .2s ease-in-out;.list{position:relative;height:\", \"vh;li{display:flex;align-items:center;justify-content:center;color:rgba(0,0,255,.1);font-size:50vh;font-weight:bold;background:#0277BD;&:last-child{&:before{content:'0' !important;}}}\", \"}.debug{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;width:80px;height:80px;color:#fff;font-size:10px;background:rgba(0,0,0,.4);}.btns{position:fixed;top:0;left:0;font-size:10px;li{display:flex;align-items:center;justify-content:center;width:44px;height:44px;cursor:pointer;background:rgba(0,0,0,.4);+ li{margin-top:2px;}}}.crawl{position:fixed;top:50%;left:50%;margin:auto;max-width:600px;max-height:300px;width:100%;background:url(/crawl/img.png) center top no-repeat;background-size:cover;transform:translate(-50%,-50%);&:after{display:block;padding-top:50%;content:'';}\", \"}\"], 100 * length, function () {\n  var styles = '';\n\n  for (var i = 0; i < length; ++i) {\n    styles += \"\\n          li:nth-child(\".concat(i + 1, \") {\\n            height: \").concat(100 / length, \"%;\\n\\n            &:before {\\n              content: '\").concat(i === 10 ? 0 : i, \"';\\n            }\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}(), function () {\n  var styles = '';\n\n  for (var i = 0; i < length; ++i) {\n    styles += \"\\n          &[data-index='\".concat(i, \"'] {\\n            background-position: center \").concat(100 / length * i, \"%;\\n          }\\n        \");\n  }\n\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], styles);\n}());\n_c = Wrapper;\nfunction ScrollWrapper() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      direction = _useState[0],\n      setDirection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState2[0],\n      setProgress = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollProgress = _useState3[0],\n      setScrollProgress = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lastProgress = _useState4[0],\n      setLastProgress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contentsHeight = _useState5[0],\n      setContentsHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      windowHeight = _useState6[0],\n      setWindowHeight = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollY = _useState7[0],\n      setScrollY = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    startValue: 0,\n    targetValue: 0,\n    duration: 1\n  })),\n      animation = _useState8[0],\n      setAnimation = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!direction) {\n      init();\n      return;\n    }\n\n    warp();\n  }, [direction]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var diff = lastProgress - progress;\n\n    if (diff < 0) {\n      if (Math.abs(diff) > .99) {\n        setDirection('up');\n      } else {\n        setDirection('down');\n      }\n    } else {\n      if (Math.abs(diff) > .99) {\n        setDirection('down');\n      } else {\n        setDirection('up');\n      }\n    }\n\n    warp();\n    setLastProgress(progress);\n  }, [progress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.scrollTo(window.scrollX, (contentsHeight - windowHeight) * scrollProgress);\n  }, [scrollProgress]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (contentsHeight - windowHeight) {\n      setProgress(scrollY / (contentsHeight - windowHeight));\n    }\n  }, [scrollY]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('mousedown', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('wheel', cancelScroll, {\n      passive: false\n    });\n    window.addEventListener('touchstart', cancelScroll, {\n      passive: false\n    });\n    return function () {\n      animation.stop();\n      window.removeEventListener('mousedown', cancelScroll);\n      window.removeEventListener('wheel', cancelScroll);\n      window.removeEventListener('touchstart', cancelScroll);\n    };\n\n    function cancelScroll() {\n      animation.stop();\n    }\n  }, [animation]);\n\n  function init() {\n    window.addEventListener('resize', handleResize, {\n      passive: true\n    });\n    document.addEventListener('scroll', handleScroll, {\n      passive: true\n    });\n    handleResize();\n    setScrollProgress(normalize(0));\n  }\n\n  function warp() {\n    if (1 <= progress && direction === 'down') {\n      window.scrollTo(window.scrollX, 1);\n    } else if (progress <= 0 && direction === 'up') {\n      window.scrollTo(window.scrollX, contentsHeight - windowHeight - 1);\n    }\n  }\n\n  function handleResize() {\n    setContentsHeight(document.getElementById('app').clientHeight);\n    setWindowHeight(window.innerHeight);\n  }\n\n  function handleScroll() {\n    setScrollY(window.scrollY);\n  }\n\n  function handleClickBtn(targetProgress) {\n    var startProgress = progress;\n    var isReverse = Math.abs(targetProgress - startProgress) > .5;\n    var diff = targetProgress - startProgress;\n    setAnimation(new _assets_js_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      startValue: 0,\n      targetValue: targetProgress,\n      duration: 800,\n      easing: 'easeInOut',\n      step: isReverse ? function (val) {\n        var direction = diff < 0 ? 1 : -1;\n        val = startProgress + direction * ((1 - Math.abs(diff)) * val);\n\n        if (val < 0) {\n          val = 1 + val;\n        } else if (1 < val) {\n          val = val - 1;\n        }\n\n        setScrollProgress(normalize(val));\n      } : function (val) {\n        val = startProgress + diff * val;\n        setScrollProgress(normalize(val));\n      }\n    }));\n  }\n\n  function normalize(val) {\n    return Math.max(.0002, Math.min(val, .9999));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n    className: !!direction ? '' : 'transparent',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list\",\n      children: [\" \", new Array(length).fill(null).map(function (_, i) {\n        console.log(i);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 263,\n          columnNumber: 13\n        }, _this);\n      }), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 259,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"debug\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: (progress * 100).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 269,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: direction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 270,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 268,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 267,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"btns\",\n      children: [new Array(length).fill(null).map(function (_, i, arr) {\n        if (i === arr.length - 1) {\n          return;\n        }\n\n        var progress = i / (arr.length - 1);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          onClick: function onClick() {\n            return handleClickBtn(progress);\n          },\n          children: (progress * 100).toFixed(2)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 283,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        onClick: function onClick() {\n          return handleClickBtn(1);\n        },\n        children: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 290,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 273,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"data-index\": 0 | (length - 1) * progress,\n      className: \"crawl\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 292,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 258,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ScrollWrapper, \"67TQg13/oVz+gUfpSdOD5ucq/yI=\");\n\n_c2 = ScrollWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"ScrollWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NyYXdsL2luZGV4LnRzeD82ZWU1Il0sIm5hbWVzIjpbImxlbmd0aCIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJzdHlsZXMiLCJpIiwiY3NzIiwiU2Nyb2xsV3JhcHBlciIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJsYXN0UHJvZ3Jlc3MiLCJzZXRMYXN0UHJvZ3Jlc3MiLCJjb250ZW50c0hlaWdodCIsInNldENvbnRlbnRzSGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0Iiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJBbmltYXRpb24iLCJzdGFydFZhbHVlIiwidGFyZ2V0VmFsdWUiLCJkdXJhdGlvbiIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsInVzZUVmZmVjdCIsImluaXQiLCJ3YXJwIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FuY2VsU2Nyb2xsIiwicGFzc2l2ZSIsInN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwiZG9jdW1lbnQiLCJoYW5kbGVTY3JvbGwiLCJub3JtYWxpemUiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiaGFuZGxlQ2xpY2tCdG4iLCJ0YXJnZXRQcm9ncmVzcyIsInN0YXJ0UHJvZ3Jlc3MiLCJpc1JldmVyc2UiLCJlYXNpbmciLCJzdGVwIiwidmFsIiwibWF4IiwibWluIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImNvbnNvbGUiLCJsb2ciLCJ0b0ZpeGVkIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FB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QUEsbUJBQU1rRCxjQUFjLENBQUN2QyxRQUFELENBQXBCO0FBQUEsV0FGWjtBQUFBLG9CQUdHLENBQUNBLFFBQVEsR0FBRyxHQUFaLEVBQWlCc0QsT0FBakIsQ0FBeUIsQ0FBekI7QUFISCxXQUNRNUQsQ0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBTUQsT0FiRCxDQUZKLGVBaUJFO0FBQUksZUFBTyxFQUFHO0FBQUEsaUJBQU02QyxjQUFjLENBQUMsQ0FBRCxDQUFwQjtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFrQ0U7QUFDRSxvQkFBYSxJQUFJLENBQUNsRCxNQUFNLEdBQUcsQ0FBVixJQUFlVyxRQURsQztBQUVFLGVBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5Q0Q7O0dBekx1QkosYTs7TUFBQUEsYSIsImZpbGUiOiIuL3NyYy9wYWdlcy9jcmF3bC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9BbmltYXRpb24nO1xuXG5sZXQgbGVuZ3RoID0gODtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgLmxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR7IDEwMCAqIGxlbmd0aCB9dmg7XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAuMSk7XG4gICAgICBmb250LXNpemU6IDUwdmg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGJhY2tncm91bmQ6ICMwMjc3QkQ7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnMCcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICR7KCgpID0+IHtcbiAgICAgIGxldCBzdHlsZXMgPSAnJztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICBzdHlsZXMgKz0gYFxuICAgICAgICAgIGxpOm50aC1jaGlsZCgkeyBpICsgMSB9KSB7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7IDEwMCAvIGxlbmd0aCB9JTtcblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJHsgaSA9PT0gMTAgPyAwIDogaSB9JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NgJHsgc3R5bGVzIH1gO1xuICAgIH0pKCl9XG4gIH1cblxuICAuZGVidWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyByaWdodDogMDtcbiAgICB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcbiAgfVxuXG4gIC5idG5zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwOyBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgICAgICsgbGkge1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNyYXdsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA2MDBweDsgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC9jcmF3bC9pbWcucG5nKSBjZW50ZXIgdG9wIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctdG9wOiA1MCU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG5cbiAgICAkeygoKSA9PiB7XG4gICAgICBsZXQgc3R5bGVzID0gJyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3R5bGVzICs9IGBcbiAgICAgICAgICAmW2RhdGEtaW5kZXg9JyR7IGkgfSddIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAkeyAxMDAgLyBsZW5ndGggKiBpIH0lO1xuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc2AkeyBzdHlsZXMgfWA7XG4gICAgfSkoKX1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsV3JhcHBlcigpIHtcbiAgY29uc3QgWyBkaXJlY3Rpb24sIHNldERpcmVjdGlvbiBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIHByb2dyZXNzLCBzZXRQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsUHJvZ3Jlc3MsIHNldFNjcm9sbFByb2dyZXNzIF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBsYXN0UHJvZ3Jlc3MsIHNldExhc3RQcm9ncmVzcyBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgY29udGVudHNIZWlnaHQsIHNldENvbnRlbnRzSGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyB3aW5kb3dIZWlnaHQsIHNldFdpbmRvd0hlaWdodCBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgc2Nyb2xsWSwgc2V0U2Nyb2xsWSBdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgYW5pbWF0aW9uLCBzZXRBbmltYXRpb24gXSA9IHVzZVN0YXRlKG5ldyBBbmltYXRpb24oe1xuICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgdGFyZ2V0VmFsdWU6IDAsXG4gICAgZHVyYXRpb246IDFcbiAgfSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIGluaXQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcnAoKTtcbiAgfSwgW2RpcmVjdGlvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGlmZiA9IGxhc3RQcm9ncmVzcyAtIHByb2dyZXNzO1xuXG4gICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAuOTkpIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCd1cCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlyZWN0aW9uKCdkb3duJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IC45OSkge1xuICAgICAgICBzZXREaXJlY3Rpb24oJ2Rvd24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpcmVjdGlvbigndXAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YXJwKCk7XG4gICAgc2V0TGFzdFByb2dyZXNzKHByb2dyZXNzKTtcbiAgfSwgW3Byb2dyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIChjb250ZW50c0hlaWdodCAtIHdpbmRvd0hlaWdodCkgKiBzY3JvbGxQcm9ncmVzcyk7XG4gIH0sIFtzY3JvbGxQcm9ncmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSB7XG4gICAgICBzZXRQcm9ncmVzcyhzY3JvbGxZIC8gKGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0KSk7XG4gICAgfVxuICB9LCBbc2Nyb2xsWV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgY2FuY2VsU2Nyb2xsKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2FuY2VsU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxTY3JvbGwoKSB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIH1cbiAgfSwgW2FuaW1hdGlvbl0pO1xuXG4gIGZ1bmN0aW9uIGluaXQoKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUoMCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FycCgpOiB2b2lkIHtcbiAgICBpZiAoMSA8PSBwcm9ncmVzcyAmJiBkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCAxKTtcbiAgICB9IGVsc2UgaWYgKHByb2dyZXNzIDw9IDAgJiYgZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIGNvbnRlbnRzSGVpZ2h0IC0gd2luZG93SGVpZ2h0IC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCk6IHZvaWQge1xuICAgIHNldENvbnRlbnRzSGVpZ2h0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5jbGllbnRIZWlnaHQpO1xuICAgIHNldFdpbmRvd0hlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIHNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tCdG4odGFyZ2V0UHJvZ3Jlc3M6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0UHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICBjb25zdCBpc1JldmVyc2UgPSBNYXRoLmFicyh0YXJnZXRQcm9ncmVzcyAtIHN0YXJ0UHJvZ3Jlc3MpID4gLjU7XG4gICAgY29uc3QgZGlmZiA9IHRhcmdldFByb2dyZXNzIC0gc3RhcnRQcm9ncmVzcztcblxuICAgIHNldEFuaW1hdGlvbihcbiAgICAgIG5ldyBBbmltYXRpb24oe1xuICAgICAgICBzdGFydFZhbHVlOiAwLFxuICAgICAgICB0YXJnZXRWYWx1ZTogdGFyZ2V0UHJvZ3Jlc3MsXG4gICAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dCcsXG4gICAgICAgIHN0ZXA6IGlzUmV2ZXJzZSA/ICh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRpZmYgPCAwID8gMSA6IC0xO1xuXG4gICAgICAgICAgdmFsID0gc3RhcnRQcm9ncmVzcyArIGRpcmVjdGlvbiAqICgoMSAtIE1hdGguYWJzKGRpZmYpKSAqIHZhbCk7XG5cbiAgICAgICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICAgICAgdmFsID0gMSArIHZhbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKDEgPCB2YWwpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbCAtIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3Mobm9ybWFsaXplKHZhbCkpO1xuICAgICAgICB9IDogKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdmFsID0gc3RhcnRQcm9ncmVzcyArIGRpZmYgKiB2YWw7XG5cbiAgICAgICAgICBzZXRTY3JvbGxQcm9ncmVzcyhub3JtYWxpemUodmFsKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4wMDAyLCBNYXRoLm1pbih2YWwsIC45OTk5KSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17ICEhZGlyZWN0aW9uID8gJycgOiAndHJhbnNwYXJlbnQnIH0+XG4gICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdFwiPiB7XG4gICAgICAgIChuZXcgQXJyYXkobGVuZ3RoKS5maWxsKG51bGwpKS5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17IGkgfSAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9IDwvb2w+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYnVnXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+eyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgfTwvcD5cbiAgICAgICAgICA8cD57IGRpcmVjdGlvbiB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG9sIGNsYXNzTmFtZT1cImJ0bnNcIj5cbiAgICAgICAge1xuICAgICAgICAgIChuZXcgQXJyYXkobGVuZ3RoKS5maWxsKG51bGwpKS5tYXAoKF8sIGksIGFycikgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpIC8gKGFyci5sZW5ndGggLSAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXsgaSB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IGhhbmRsZUNsaWNrQnRuKHByb2dyZXNzKSB9XG4gICAgICAgICAgICAgID57IChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSB9PC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8bGkgb25DbGljaz17ICgpID0+IGhhbmRsZUNsaWNrQnRuKDEpIH0+MTAwPC9saT5cbiAgICAgIDwvb2w+XG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtaW5kZXg9eyAwIHwgKGxlbmd0aCAtIDEpICogcHJvZ3Jlc3MgfVxuICAgICAgICBjbGFzc05hbWU9XCJjcmF3bFwiXG4gICAgICAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/crawl/index.tsx\n");

/***/ })

})