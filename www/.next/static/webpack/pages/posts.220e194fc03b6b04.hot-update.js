"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts/db.js":
/*!***************************!*\
  !*** ./pages/posts/db.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nvar db = {\n    articles: [\n        {\n            id: \"6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b\",\n            title: \"My article\",\n            content: \"Content of the article.\",\n            date: \"04/10/2022\",\n            author: \"Liz Gringer\"\n        },\n        {\n            id: \"769nbfnd3-11c0-43da-975e-23skd34443\",\n            title: \"Camille's article\",\n            content: \"Content of the article.\",\n            date: \"04/02/2002\",\n            author: \"Camille Hasco\\xebt\"\n        }\n    ],\n    comments: [\n        {\n            id: \"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d\",\n            timestamp: 1664835049,\n            content: \"Content of the comment.\",\n            articleId: \"6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b\",\n            author: \"Bob McLaren\"\n        }\n    ]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBSUEsRUFBRSxHQUFHO0lBQ0xDLFFBQVEsRUFBRTtRQUNSO1lBQ0VDLEVBQUUsRUFBRSxzQ0FBc0M7WUFDMUNDLEtBQUssRUFBRSxZQUFZO1lBQ25CQyxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDQyxJQUFJLEVBQUUsWUFBWTtZQUNsQkMsTUFBTSxFQUFFLGFBQWE7U0FDdEI7UUFDRDtZQUNFSixFQUFFLEVBQUUscUNBQXFDO1lBQ3pDQyxLQUFLLEVBQUUsbUJBQW1CO1lBQzFCQyxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDQyxJQUFJLEVBQUUsWUFBWTtZQUNsQkMsTUFBTSxFQUFFLG9CQUFpQjtTQUMxQjtLQUNGO0lBQ0RDLFFBQVEsRUFBRTtRQUNSO1lBQ0VMLEVBQUUsRUFBRSxzQ0FBc0M7WUFDMUNNLFNBQVMsRUFBRSxVQUFVO1lBQ3JCSixPQUFPLEVBQUUseUJBQXlCO1lBQ2xDSyxTQUFTLEVBQUUsc0NBQXNDO1lBQ2pESCxNQUFNLEVBQUUsYUFBYTtTQUN0QjtLQUNGO0NBQ0o7QUFFRCwrREFBZU4sRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9kYi5qcz82OTk2Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBkYiA9IHtcbiAgICBhcnRpY2xlczogW1xuICAgICAge1xuICAgICAgICBpZDogJzZlYzBiZDdmLTExYzAtNDNkYS05NzVlLTJhOGFkOWViYWUwYicsXG4gICAgICAgIHRpdGxlOiAnTXkgYXJ0aWNsZScsXG4gICAgICAgIGNvbnRlbnQ6ICdDb250ZW50IG9mIHRoZSBhcnRpY2xlLicsXG4gICAgICAgIGRhdGU6ICcwNC8xMC8yMDIyJyxcbiAgICAgICAgYXV0aG9yOiAnTGl6IEdyaW5nZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzc2OW5iZm5kMy0xMWMwLTQzZGEtOTc1ZS0yM3NrZDM0NDQzJyxcbiAgICAgICAgdGl0bGU6IFwiQ2FtaWxsZSdzIGFydGljbGVcIixcbiAgICAgICAgY29udGVudDogJ0NvbnRlbnQgb2YgdGhlIGFydGljbGUuJyxcbiAgICAgICAgZGF0ZTogJzA0LzAyLzIwMDInLFxuICAgICAgICBhdXRob3I6ICdDYW1pbGxlIEhhc2Nvw6t0J1xuICAgICAgfVxuICAgIF0sXG4gICAgY29tbWVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc5YjFkZWI0ZC0zYjdkLTRiYWQtOWJkZC0yYjBkN2IzZGNiNmQnLFxuICAgICAgICB0aW1lc3RhbXA6IDE2NjQ4MzUwNDksXG4gICAgICAgIGNvbnRlbnQ6ICdDb250ZW50IG9mIHRoZSBjb21tZW50LicsXG4gICAgICAgIGFydGljbGVJZDogJzZlYzBiZDdmLTExYzAtNDNkYS05NzVlLTJhOGFkOWViYWUwYicsXG4gICAgICAgIGF1dGhvcjogJ0JvYiBNY0xhcmVuJ1xuICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGIiXSwibmFtZXMiOlsiZGIiLCJhcnRpY2xlcyIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiZGF0ZSIsImF1dGhvciIsImNvbW1lbnRzIiwidGltZXN0YW1wIiwiYXJ0aWNsZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/db.js\n"));

/***/ })

});