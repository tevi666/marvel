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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData */ \"./modules/getData.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/filter */ \"./modules/filter.js\");\n/* harmony import */ var _modules_renderSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderSwitcher */ \"./modules/renderSwitcher.js\");\n/* harmony import */ var _modules_cardsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cardsList */ \"./modules/cardsList.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/svg */ \"./modules/svg.js\");\n/* harmony import */ var _modules_music__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/music */ \"./modules/music.js\");\n\n\n\n\n\n\n\n\n\nconst heroes = document.querySelector('.heroes');\nconst switcher = document.querySelector('.switcher');\n\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__.getData)('dbHeroes.json').then(data => {\n    const cardsLists = new _modules_cardsList__WEBPACK_IMPORTED_MODULE_3__.cardsList(heroes, data);\n    (0,_modules_renderSwitcher__WEBPACK_IMPORTED_MODULE_2__.renderSwitcher)(switcher, data);\n    cardsLists.render();\n    (0,_modules_filter__WEBPACK_IMPORTED_MODULE_1__.filter)();\n});\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_4__.scroll)();\n(0,_modules_svg__WEBPACK_IMPORTED_MODULE_5__.svg)();\n(0,_modules_music__WEBPACK_IMPORTED_MODULE_6__.music)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/card.js":
/*!*************************!*\
  !*** ./modules/card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"card\": () => (/* binding */ card)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\n\nclass card extends _render__WEBPACK_IMPORTED_MODULE_0__.render {\n\tconstructor(data = {}, root) {\n\t\tsuper(root);\n\t\tthis._data = data;\n\t}\n\tinitTemplate() {\n\t\tif (!this._template) {\n\t\t\treturn;\n\t\t}\n\t\tthis._template.classList.add('card');\n\t\tlet temp = `<div class=\"card__photo\"><img class=\"lazy\" data-src=\"${this._data.photo}\" alt=\"${this._data.name}\"/>\n\t\t\t<div class=\"card__info\">\n\t\t`;\n\t\tfor (let key in this._data) {\n\t\t\tif (key !== 'photo' && key !== 'movies') {\n\t\t\t\ttemp += `<p class=\"card__${key}\">${key}: <span>${this._data[key]}</span></p>`;\n\t\t\t}\n\t\t}\n\t\ttemp += `</div></div>`;\n\t\tif (this._data.movies) {\n\t\t\ttemp += `<div class=\"card__movies\"><p>Movies:</p><ul class=\"card__movies-list\">`;\n\t\t\tthis._data.movies.forEach(movie => {\n\t\t\t\ttemp += `<li data-film-name=\"${movie}\" class=\"card__movie-item\">${movie}</li>`;\n\t\t\t});\n\t\t\ttemp += `</ul></div>`;\n\t\t}\n\t\tthis._template.innerHTML = temp;\n\n\t\tconst heightSize = window.innerHeight;\n\t\tconst lazyShowImg = () => {\n\t\t\tconst scrolls = window.scrollY * heightSize;\n\n\t\t\tconst elements = document.getElementsByClassName('lazy');\n\n\t\t\tArray.from(elements).forEach(e => {\n\t\t\t\tif (scrolls > e.offsetTop) {\n\t\t\t\t\te.setAttribute('src', e.getAttribute('data-src'));\n\t\t\t\t\te.classList.remove('lazy');\n\t\t\t\t}\n\t\t\t});\n\t\t};\n\t\tlazyShowImg();\n\t\tsetTimeout(() => {\n\t\t\twindow.addEventListener('scroll', lazyShowImg);\n\t\t}, 3000);\n\t}\n}\n\n//# sourceURL=webpack:///./modules/card.js?");

/***/ }),

/***/ "./modules/cardsList.js":
/*!******************************!*\
  !*** ./modules/cardsList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsList\": () => (/* binding */ cardsList)\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./modules/card.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n\n\n\nclass cardsList extends _render__WEBPACK_IMPORTED_MODULE_1__.render {\n\tconstructor(root, data = []) {\n\t\tsuper(root);\n\t\tthis.createCardsObjectsList(data);\n\t}\n\tcreateCardsObjectsList(data) {\n\t\tthis._cards = data.map(item => {\n\t\t\treturn new _card__WEBPACK_IMPORTED_MODULE_0__.card(item);\n\t\t});\n\t}\n\tget cards() {\n\t\treturn this._cards;\n\t}\n\tinitTemplate() {\n\t\tif (!this._template) {\n\t\t\treturn;\n\t\t}\n\t\tthis._template.classList.add('cards-list');\n\t\tthis.cards.forEach(item => item.render(this._template));\n\t}\n}\n\n//# sourceURL=webpack:///./modules/cardsList.js?");

/***/ }),

/***/ "./modules/filter.js":
/*!***************************!*\
  !*** ./modules/filter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filter\": () => (/* binding */ filter)\n/* harmony export */ });\nconst filter = () => {\n\tconst cards = document.querySelectorAll('.card');\n\tconst switcherBlock = document.querySelector('.switcher');\n\tconst selectedItem = document.querySelector('.selected__movie');\n\n\tif (cards && switcherBlock) {\n\t\tswitcherBlock.addEventListener('click', e => {\n\t\t\tif (e.target.tagName !== 'LI') return;\n\t\t\tconst filterFilm = e.target.dataset['film'];\n\t\t\tcards.forEach(card => {\n\t\t\t\tcard.style.display = 'flex';\n\t\t\t\tselectedItem.textContent = '';\n\t\t\t\tif ((!card.querySelector(`.card__movies-list li[data-film-name=\"${filterFilm}\"]`)) &&\n\t\t\t\t\tfilterFilm !== 'all') {\n\t\t\t\t\tcard.style.display = 'none';\n\t\t\t\t\tselectedItem.textContent = '#' + filterFilm;\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t}\n};\n\n//# sourceURL=webpack:///./modules/filter.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst getData = (file) => {\n    return fetch(file).then(response => {\n        return response.json();\n    }).catch(err => console.log('ОШИБКА ' + err));\n};\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/music.js":
/*!**************************!*\
  !*** ./modules/music.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"music\": () => (/* binding */ music)\n/* harmony export */ });\nconst music = () => {\n    const soundTrack = document.querySelector('audio');\n    const play = document.querySelector('.music');\n    const pause = document.querySelector('.pause');\n    const text = document.querySelector('.text');\n\n    text.innerHTML = 'Stepan Pennsbroke \"A man without love\"';\n\n    soundTrack.autoplay = true;\n\n    play.addEventListener('click', () => {\n        soundTrack.play();\n        text.style.display = 'inline-block';\n    });\n    pause.addEventListener('click', () => {\n        soundTrack.pause();\n        text.style.display = 'none';\n    });\n\n    soundTrack.src = '/dist/audio/stephen-pennsbroke-a-man-without-love-wake-up-alarm_108059729.mp3';\n    play.innerHTML = `<svg id='play' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z\"/></svg>`;\n\n    pause.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM224 191.1v128C224 337.7 209.7 352 192 352S160 337.7 160 320V191.1C160 174.3 174.3 160 191.1 160S224 174.3 224 191.1zM352 191.1v128C352 337.7 337.7 352 320 352S288 337.7 288 320V191.1C288 174.3 302.3 160 319.1 160S352 174.3 352 191.1z\"/></svg>`;\n};\n\n//# sourceURL=webpack:///./modules/music.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nclass render {\n\tconstructor(root) {\n\t\tthis._root = root;\n\t\tthis.prepareTemplate();\n\t}\n\tget root() {\n\t\treturn this._root;\n\t}\n\tget template() {\n\t\treturn this._template;\n\t}\n\tprepareTemplate() {\n\t\tthis._template = document.createElement('div');\n\t}\n\tinitTemplate() {\n\t\tif (!this._template) {\n\t\t\treturn;\n\t\t}\n\t\treturn this._template.innerHTML = '';\n\t}\n\trender(primaryRoot) {\n\t\tif (primaryRoot) {\n\t\t\tthis._root = primaryRoot;\n\t\t}\n\t\tthis.initTemplate();\n\t\tconst {\n\t\t\troot,\n\t\t\ttemplate\n\t\t} = this;\n\t\tif (root) {\n\t\t\troot.append(template);\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack:///./modules/render.js?");

/***/ }),

/***/ "./modules/renderSwitcher.js":
/*!***********************************!*\
  !*** ./modules/renderSwitcher.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderSwitcher\": () => (/* binding */ renderSwitcher)\n/* harmony export */ });\nconst renderSwitcher = (root, data) => {\n\tif (data) {\n\t\tconst moviesList = new Set();\n\t\tdata.forEach(item => {\n\t\t\tif (item.movies) {\n\t\t\t\titem.movies.forEach(movie => {\n\t\t\t\t\tmoviesList.add(movie);\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t\tconst nav = document.createElement('nav');\n\t\tnav.classList.add('switcher');\n\t\tlet temp = `<ul class=\"filter__list\">\n\t\t\t\t\t<li data-film=\"all\" class=\"filter__link\">Filter\n\t\t\t\t\t<ul class=\"switcher__list\">\n\t\t\t\t\t<li data-film=\"all\">All films</li>`;\n\t\tfor (let movie of moviesList) {\n\t\t\ttemp += `<li class=\"switcher__link\" data-film=\"${movie}\">${movie}</li>`;\n\t\t}\n\t\ttemp += `</li></ul></ul>`;\n\t\tnav.innerHTML = temp;\n\t\troot.append(nav);\n\t\tconst div = document.createElement('div');\n\t\tdiv.classList.add('selected__movie');\n\t\troot.append(div);\n\t}\n};\n\n\n//# sourceURL=webpack:///./modules/renderSwitcher.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\n    const scroll = document.querySelector('.scroll');\n\n    function trackScroll() {\n        const scrolles = window.pageYOffset;\n        const clnHight = document.documentElement.clientHeight;\n        if (scrolles > clnHight) {\n            scroll.classList.add('scroll-show');\n        }\n        if (scrolles < clnHight) {\n            scroll.classList.remove('scroll-show');\n        }\n    }\n\n    function scrollToTop() {\n        if (window.pageYOffset > 0) {\n            window.scrollBy(0, -80);\n            setTimeout(scrollToTop, 0);\n        }\n    }\n    window.addEventListener('scroll', trackScroll);\n    scroll.addEventListener('click', scrollToTop);\n};\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/svg.js":
/*!************************!*\
  !*** ./modules/svg.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"svg\": () => (/* binding */ svg)\n/* harmony export */ });\nconst svg = () => {\n    const btn = document.querySelector('.scroll');\n    btn.innerHTML = `\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                    class=\"bi bi-arrow-up\" viewBox=\"0 0 16 16\">\n                    <path fill-rule=\"evenodd\"\n                        d=\"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z\" />\n                </svg>`;\n};\n\n//# sourceURL=webpack:///./modules/svg.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;