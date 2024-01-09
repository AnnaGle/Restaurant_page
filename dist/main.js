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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\n\nfunction createContact() {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    const phoneNumber = document.createElement('p');\n    phoneNumber.textContent = '📞 723 456 789';\n\n    const address = document.createElement('p');\n    address.textContent = '🏠 Mysia 42, Wypizdówko, Poland';\n\n    const restaurantLocation = document.createElement('img');\n    restaurantLocation.classList.add('map');\n    restaurantLocation.src = \"menu_images/location.png\";\n    restaurantLocation.alt = \"Anna's restaurant location\";\n\n    contact.appendChild(phoneNumber);\n    contact.appendChild(address);\n    contact.appendChild(restaurantLocation);\n\n    return contact\n};\n\nfunction loadContact() {\n    const main = document.getElementById('main');\n    main.textContent = \"\";\n    main.appendChild(createContact())\n};\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _main_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_image.jpg */ \"./src/main_image.jpg\");\n// window.onload = () => {\n\n// }\n\n\n// function to be exported \nconst createHome = () => {\n\n\n    const container = document.createElement(\"div\");\n    container.classList.add('home');\n    // document.getElementById('main').appendChild(container);\n\n\n    const quote = document.createElement(\"div\")\n    quote.classList.add('quote');\n    const quotetext = document.createTextNode(\"You are what you eat so eat well at Anna's Place\")\n    quote.appendChild(quotetext);\n    container.appendChild(quote);\n\n\n    // const mainImg = document.createElement(\"img\");\n    // mainImg.src= \"main_image.jpg\";\n    // container.appendChild(mainImg);\n    const myIcon = new Image();\n    myIcon.classList.add('main_image');\n    myIcon.src = _main_image_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    container.appendChild(myIcon);\n\n    const slogan = document.createElement(\"div\")\n    slogan.classList.add('slogan');\n    const slogantext = document.createTextNode(\"Visit us! You won't regret!\")\n    slogan.appendChild(slogantext);\n    container.appendChild(slogan);\n\n    return container\n\n};\nfunction loadHome() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createHome());\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialpage.js */ \"./src/initialpage.js\");\n\n\n(0,_initialpage_js__WEBPACK_IMPORTED_MODULE_0__.initialPage)();\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/initialpage.js":
/*!****************************!*\
  !*** ./src/initialpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPage: () => (/* binding */ initialPage)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction create_header() {\n\n    const header = document.createElement(\"div\");\n    header.classList.add('header');\n    document.getElementById('content').appendChild(header);\n\n\n    const restaurant_name = document.createElement(\"h1\");\n    restaurant_name.classList.add('restaurant_name');\n    restaurant_name.textContent = \"Anna's Place\"\n    header.appendChild(restaurant_name);\n\n    \n    header.appendChild(create_navigation());\n    return header;\n};\n\n\nfunction create_navigation() {\n\n    const navigation_bar = document.createElement(\"div\");\n    navigation_bar.classList.add('navigation');\n\n\n\n    const home_button = document.createElement(\"button\");\n    home_button.classList.add('nav_btn');\n    navigation_bar.appendChild(home_button);\n    home_button.textContent = \"Home\";\n    home_button.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(home_button);\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n    });\n\n    const menu_button = document.createElement(\"button\");\n    menu_button.classList.add('nav_btn');\n    navigation_bar.appendChild(menu_button);\n    menu_button.textContent = \"Menu\";\n    menu_button.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(menu_button);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n    });\n    const contact_button = document.createElement(\"button\");\n    contact_button.classList.add('nav_btn');\n    navigation_bar.appendChild(contact_button);\n    contact_button.textContent = \"Contact\";\n    contact_button.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(contact_button);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\n    });\nreturn navigation_bar;\n\n}\n\nfunction setActiveButton(button){\n    const buttons= document.querySelectorAll(\".nav_btn\");\n    buttons.forEach((button)=>{\n        if(button !==this){\n            button.classList.remove(\"active\");\n        }\n    });\n    button.classList.add(\"active\");\n}\n\nfunction create_main(){\n    const main = document.createElement(\"main\");\n    main.classList.add(\"main\");\n    main.setAttribute(\"id\",\"main\");\n    return main;\n}\n\n\nconst initialPage = () => {\n    const content = document.getElementById(\"content\");\n    content.appendChild(create_header());\n    content.appendChild(create_main());\n\n    setActiveButton(document.querySelector(\".nav_btn\"));\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n\n};\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/initialpage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n\nfunction createMenu(){\n    const menu= document.createElement(\"div\");\n    menu.classList.add(\"menu\");\n\n menu.appendChild(\n    createMenuItem(\n      \"Coffe\",\n      \"Delicious coffe in varius options. Choose your favourite.\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Donut\",\n      \"Fresh donuts made by hand in our restaurat. Choose your own addings.\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Pie\",\n      \"We make our pies everyday at our restaurant. Ask our staff what is in today's offer!\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Pretzel\",\n      \"We can show you the new face of pretzel and make you love it!\"\n    )\n  );\n  menu.appendChild(\n    createMenuItem(\n      \"Soup\",\n      \"Only one soup a day is made to assure freshness and best quality. Seasonal products are used!\"\n    )\n  );\n  \nreturn menu\n}\n function createMenuItem(name, description){\n  const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n \n const foodName = document.createElement(\"h2\");\n foodName.textContent = name;\n\n const foodDescription = document.createElement(\"p\");\n foodDescription.textContent = description;\n\n const foodImage = document.createElement(\"img\");\n foodImage.src = `menu_images/${name.toLowerCase()}.png`;\n foodImage.alt = `${name}`;\n\n menuItem.appendChild(foodImage);\n menuItem.appendChild(foodName);\n menuItem.appendChild(foodDescription);\n\n return menuItem;\n}\nfunction loadMenu() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n  }\n  \n  \n\n// import Dish_1 from './main_image.jpg';\n// const menuPage = () => {\n\n//     const soupImg = document.createElement(\"img\");\n//     soupImgImg.src= \"main_image.jpg\";\n//     container.appendChild(soupImg);\n//     const myIcon = new Image();\n//     myIcon.classList.add('main_image');\n//     myIcon.src = Icon;\n//     container.appendChild(myIcon);\n\n// }\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/main_image.jpg":
/*!****************************!*\
  !*** ./src/main_image.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db6f5d20613e2088d04a.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/main_image.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;