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

/***/ "./src/classes/Db.ts":
/*!***************************!*\
  !*** ./src/classes/Db.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Db = void 0;\nconst data_1 = __webpack_require__(/*! ../data */ \"./src/data.ts\");\nconst User_1 = __webpack_require__(/*! ./User */ \"./src/classes/User.ts\");\nclass Db {\n    constructor() {\n    }\n    conection() {\n        console.log(\"Conectado no db\");\n    }\n    addUser(name, password, email) {\n        data_1.db.push(new User_1.User(name, password, email));\n    }\n    listUser() {\n        console.log(data_1.db);\n    }\n    close() {\n        console.log(\"desconectado no db\");\n    }\n}\nexports.Db = Db;\n\n\n//# sourceURL=webpack://tela-login/./src/classes/Db.ts?");

/***/ }),

/***/ "./src/classes/User.ts":
/*!*****************************!*\
  !*** ./src/classes/User.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.User = void 0;\nclass User {\n    constructor(username, password, email) {\n        this.username = username;\n        this.password = password;\n        this.email = email;\n    }\n    _getUsername() {\n        return this.username;\n    }\n    _getPassword() {\n        return this.password;\n    }\n    _getEmail() {\n        return this.email;\n    }\n    _setUsername(newUsername) {\n        this.username = newUsername;\n    }\n    _setPassword(newPassword) {\n        this.password = newPassword;\n    }\n    _setEmail(newEmail) {\n        this.email = newEmail;\n    }\n}\nexports.User = User;\n\n\n//# sourceURL=webpack://tela-login/./src/classes/User.ts?");

/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.db = void 0;\nexports.db = [];\n\n\n//# sourceURL=webpack://tela-login/./src/data.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Db_1 = __webpack_require__(/*! ./classes/Db */ \"./src/classes/Db.ts\");\nconst username = document.getElementById(\"username\");\nconst password = document.getElementById(\"password\");\nconst email = document.getElementById(\"email\");\nconst btn = document.getElementById(\"btn\");\nlet username_txt = document.getElementById(\"username-txt\");\nbtn.addEventListener('click', () => {\n    if (username.value.trim() == \"\" &&\n        email.value.trim() == \"\" &&\n        password.value.trim() == \"\") {\n        alert(\"pre-encha todos os dados!\");\n        return;\n    }\n    const conect_db = new Db_1.Db;\n    conect_db.conection();\n    conect_db.addUser(username.value, password.value, email.value);\n    username_txt.innerText = username.value;\n    username.value = \"\";\n    email.value = \"\";\n    password.value = \"\";\n    console.log(conect_db.listUser());\n    conect_db.close();\n});\n\n\n//# sourceURL=webpack://tela-login/./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;