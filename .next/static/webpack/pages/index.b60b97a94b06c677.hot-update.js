"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container/index */ \"./src/components/Container/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    var apiKey = \"c3d79670c1549f4b1657910ed1302c9b\";\n    var url = \"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=\".concat(apiKey);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const GrabInfo = ()=>{\n        fetch(url).then((response)=>response.json()).then((data)=>{\n            const temperature = data.main.temp;\n            const weatherDescription = data.weather[0].description;\n            console.log(\"Current weather in \".concat(city, \": \").concat(temperature, \"\\xb0C, \").concat(weatherDescription));\n        }).catch((error)=>{\n            console.error(\"Error fetching weather data:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>GrabInfo(),\n                children: \"Grab Info\"\n            }, void 0, false, {\n                fileName: \"/Users/ericqian/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data\n            }, void 0, false, {\n                fileName: \"/Users/ericqian/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ericqian/Desktop/weather-app-2024/src/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hhQqYsxLIv1exGOzUvDGOVv6fXw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ29CO0FBR3RDLFNBQVNFOztJQUN0QixJQUFJQyxTQUFTO0lBQ2IsSUFBSUMsTUFBTSw2RUFBb0YsT0FBUEQ7SUFFdkYsTUFBTSxDQUFDRSxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFrQixFQUFFO0lBRXBELE1BQU1PLFdBQVc7UUFDZkMsTUFBTUosS0FDTEssSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUMsQ0FBQ0o7WUFDTCxNQUFNTyxjQUFjUCxLQUFLUSxJQUFJLENBQUNDLElBQUk7WUFDbEMsTUFBTUMscUJBQXFCVixLQUFLVyxPQUFPLENBQUMsRUFBRSxDQUFDQyxXQUFXO1lBQ3REQyxRQUFRQyxHQUFHLENBQUMsc0JBQStCUCxPQUFUUSxNQUFLLE1BQXNCTCxPQUFsQkgsYUFBWSxXQUF5QixPQUFuQkc7UUFDL0QsR0FDQ00sS0FBSyxDQUFDQyxDQUFBQTtZQUNMSixRQUFRSSxLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNGO0lBR0EscUJBQ0UsOERBQUNUO1FBQ0NVLFdBQVk7OzBCQUVaLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNbEI7MEJBQVk7Ozs7OzswQkFDbkMsOERBQUNOLG1FQUFTQTtnQkFBQ0ksTUFBTUE7Ozs7Ozs7Ozs7OztBQUd2QjtHQTVCd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGFpbmVyL2luZGV4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgdmFyIGFwaUtleSA9IFwiYzNkNzk2NzBjMTU0OWY0YjE2NTc5MTBlZDEzMDJjOWJcIjtcbiAgdmFyIHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9e2xhdH0mbG9uPXtsb259JmFwcGlkPSR7YXBpS2V5fWA7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SUN1cnJlbnRQcm9wc1tdPihbXSk7XG5cbiAgY29uc3QgR3JhYkluZm8gPSAoKSA9PiB7XG4gICAgZmV0Y2godXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXRhLm1haW4udGVtcDtcbiAgICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHdlYXRoZXIgaW4gJHtjaXR5fTogJHt0ZW1wZXJhdHVyZX3CsEMsICR7d2VhdGhlckRlc2NyaXB0aW9ufWApO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YTonLCBlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIGNsYXNzTmFtZT17YGZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNGB9XG4gICAgPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBHcmFiSW5mbygpfT5HcmFiIEluZm88L2J1dHRvbj5cbiAgICAgIDxDb250YWluZXIgZGF0YT17ZGF0YX0vPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkhvbWUiLCJhcGlLZXkiLCJ1cmwiLCJkYXRhIiwic2V0RGF0YSIsIkdyYWJJbmZvIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidGVtcGVyYXR1cmUiLCJtYWluIiwidGVtcCIsIndlYXRoZXJEZXNjcmlwdGlvbiIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjaXR5IiwiY2F0Y2giLCJlcnJvciIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});