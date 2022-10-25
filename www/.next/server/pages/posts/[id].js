"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./pages/posts/db.js\");\n\n\n\nfunction Details() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.id;\n    const article = _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].articles.find((article)=>article.id === id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"D\\xe9tails de l'article \",\n                    article.id\n                ]\n            }, void 0, true, {\n                fileName: \"/home/norine/Bureau/ING4/WebTech/Monprojet/www/pages/posts/[id].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"italic font-bold hover:text-red-800\",\n                children: [\n                    \"Titre: \",\n                    article.title,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/norine/Bureau/ING4/WebTech/Monprojet/www/pages/posts/[id].js\",\n                        lineNumber: 15,\n                        columnNumber: 31\n                    }, this),\n                    \"Content: \",\n                    article.date,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/norine/Bureau/ING4/WebTech/Monprojet/www/pages/posts/[id].js\",\n                        lineNumber: 16,\n                        columnNumber: 32\n                    }, this),\n                    \"Auteur: \",\n                    article.author,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/norine/Bureau/ING4/WebTech/Monprojet/www/pages/posts/[id].js\",\n                        lineNumber: 17,\n                        columnNumber: 33\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/norine/Bureau/ING4/WebTech/Monprojet/www/pages/posts/[id].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/norine/Bureau/ING4/WebTech/Monprojet/www/pages/posts/[id].js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXFDO0FBQ2hCO0FBRXJCLFNBQVNFLE9BQU8sR0FBRTtJQUNoQixNQUFNQyxNQUFNLEdBQUNILHNEQUFTLEVBQUU7SUFDeEIsTUFBTUksRUFBRSxHQUFDRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtJQUd4QixNQUFNRSxPQUFPLEdBQUdMLHlEQUFnQixDQUFDSyxDQUFBQSxPQUFPLEdBQUlBLE9BQU8sQ0FBQ0YsRUFBRSxLQUFLQSxFQUFFLENBQUM7SUFFOUQscUJBQ0UsOERBQUNLLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOztvQkFBQywwQkFBcUI7b0JBQUNKLE9BQU8sQ0FBQ0YsRUFBRTs7Ozs7O29CQUFNOzBCQUMxQyw4REFBQ08sR0FBQztnQkFBQ0MsU0FBUyxFQUFDLHFDQUFxQzs7b0JBQUMsU0FDMUM7b0JBQUNOLE9BQU8sQ0FBQ08sS0FBSztrQ0FBQyw4REFBQ0MsSUFBRTs7Ozs0QkFBRTtvQkFBQSxXQUNsQjtvQkFBQ1IsT0FBTyxDQUFDUyxJQUFJO2tDQUFDLDhEQUFDRCxJQUFFOzs7OzRCQUFFO29CQUFBLFVBQ3BCO29CQUFDUixPQUFPLENBQUNVLE1BQU07a0NBQUMsOERBQUNGLElBQUU7Ozs7NEJBQUU7Ozs7OztvQkFDM0I7Ozs7OztZQUNBLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWVaLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9baWRdLmpzPzc5NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGRiIGZyb20gJy4vZGInXG5cbmZ1bmN0aW9uIERldGFpbHMoKXtcbiAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXG4gIGNvbnN0IGlkPXJvdXRlci5xdWVyeS5pZFxuXG5cbiAgY29uc3QgYXJ0aWNsZSA9IGRiLmFydGljbGVzLmZpbmQoYXJ0aWNsZSA9PiBhcnRpY2xlLmlkID09PSBpZClcblxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ew6l0YWlscyBkZSBsJ2FydGljbGUge2FydGljbGUuaWR9PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT0naXRhbGljIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LXJlZC04MDAnPlxuICAgICAgICBUaXRyZToge2FydGljbGUudGl0bGV9PGJyLz5cbiAgICAgICAgQ29udGVudDoge2FydGljbGUuZGF0ZX08YnIvPlxuICAgICAgICBBdXRldXI6IHthcnRpY2xlLmF1dGhvcn08YnIvPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHMiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZGIiLCJEZXRhaWxzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImFydGljbGUiLCJhcnRpY2xlcyIsImZpbmQiLCJkaXYiLCJoMSIsInAiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImJyIiwiZGF0ZSIsImF1dGhvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ }),

/***/ "./pages/posts/db.js":
/*!***************************!*\
  !*** ./pages/posts/db.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet db = {\n    articles: [\n        {\n            id: \"6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b\",\n            title: \"My article\",\n            content: \"Content of the article.\",\n            date: \"04/10/2022\",\n            author: \"Liz Gringer\"\n        }\n    ],\n    comments: [\n        {\n            id: \"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d\",\n            timestamp: 1664835049,\n            content: \"Content of the comment.\",\n            articleId: \"6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b\",\n            author: \"Bob McLaren\"\n        }\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsRUFBRSxHQUFHO0lBQ0xDLFFBQVEsRUFBRTtRQUNSO1lBQ0VDLEVBQUUsRUFBRSxzQ0FBc0M7WUFDMUNDLEtBQUssRUFBRSxZQUFZO1lBQ25CQyxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDQyxJQUFJLEVBQUUsWUFBWTtZQUNsQkMsTUFBTSxFQUFFLGFBQWE7U0FDdEI7S0FDRjtJQUNEQyxRQUFRLEVBQUU7UUFDUjtZQUNFTCxFQUFFLEVBQUUsc0NBQXNDO1lBQzFDTSxTQUFTLEVBQUUsVUFBVTtZQUNyQkosT0FBTyxFQUFFLHlCQUF5QjtZQUNsQ0ssU0FBUyxFQUFFLHNDQUFzQztZQUNqREgsTUFBTSxFQUFFLGFBQWE7U0FDdEI7S0FDRjtDQUNKO0FBRUQsaUVBQWVOLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9kYi5qcz82OTk2Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBkYiA9IHtcbiAgICBhcnRpY2xlczogW1xuICAgICAge1xuICAgICAgICBpZDogJzZlYzBiZDdmLTExYzAtNDNkYS05NzVlLTJhOGFkOWViYWUwYicsXG4gICAgICAgIHRpdGxlOiAnTXkgYXJ0aWNsZScsXG4gICAgICAgIGNvbnRlbnQ6ICdDb250ZW50IG9mIHRoZSBhcnRpY2xlLicsXG4gICAgICAgIGRhdGU6ICcwNC8xMC8yMDIyJyxcbiAgICAgICAgYXV0aG9yOiAnTGl6IEdyaW5nZXInXG4gICAgICB9XG4gICAgXSxcbiAgICBjb21tZW50czogW1xuICAgICAge1xuICAgICAgICBpZDogJzliMWRlYjRkLTNiN2QtNGJhZC05YmRkLTJiMGQ3YjNkY2I2ZCcsXG4gICAgICAgIHRpbWVzdGFtcDogMTY2NDgzNTA0OSxcbiAgICAgICAgY29udGVudDogJ0NvbnRlbnQgb2YgdGhlIGNvbW1lbnQuJyxcbiAgICAgICAgYXJ0aWNsZUlkOiAnNmVjMGJkN2YtMTFjMC00M2RhLTk3NWUtMmE4YWQ5ZWJhZTBiJyxcbiAgICAgICAgYXV0aG9yOiAnQm9iIE1jTGFyZW4nXG4gICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYiJdLCJuYW1lcyI6WyJkYiIsImFydGljbGVzIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwiYXV0aG9yIiwiY29tbWVudHMiLCJ0aW1lc3RhbXAiLCJhcnRpY2xlSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/db.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();