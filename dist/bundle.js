/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_typescript.ts":
/*!****************************!*\
  !*** ./src/_typescript.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"H1\": () => (/* binding */ H1),\n/* harmony export */   \"add\": () => (/* binding */ add)\n/* harmony export */ });\n// object 类型限制\nvar b;\nb = {\n  name: \"123\"\n};\nconsole.log(b);\nvar d;\n\nd = function d(n1, n2) {\n  return n1 + n2;\n};\n\nvar e; //e为字符串数组\n\nvar f; //声明数组\n// Focus  元组 长度固定\n\nvar h; //\n// Focus  枚举  enum\n// Focus 声明枚举类\n\nvar Gender;\n\n(function (Gender) {\n  Gender[Gender[\"male\"] = 0] = \"male\";\n  Gender[Gender[\"femal\"] = 1] = \"femal\";\n})(Gender || (Gender = {})); // 使用\n\n\nvar i;\ni = {\n  name: \"kkk\",\n  gender: Gender.male\n};\nvar xx;\nvar H1 = \"111kafjpsaj\"; // export class Hjsfhks {\n//   name: string = \"123\";\n// }\n\nfunction add(a, b) {\n  console.log(a + b);\n}\n\n\n\n//# sourceURL=webpack://chapter/./src/_typescript.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_typescript */ \"./src/_typescript.ts\");\n // import Dog from './classs';\n\nfunction sum(a, b) {\n  return a + b;\n} // const mxDog = new Dog(\"123\", 555)\n\n\nconsole.log(sum(1, 2));\nconsole.log(sum(1111, 2222));\nconsole.log(_typescript__WEBPACK_IMPORTED_MODULE_0__.H1);\n(0,_typescript__WEBPACK_IMPORTED_MODULE_0__.add)(1, 2); // mxDog.salla();\n// mxDog.run();\n// mxDog.sshA()\n// const A=new Hjsfhks()\n// console.log(A.name,\"---name\");\n\n//# sourceURL=webpack://chapter/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;