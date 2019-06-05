/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/base/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/insert-css/index.js":
/*!******************************************!*\
  !*** ./node_modules/insert-css/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var inserted = [];

module.exports = function (css) {
    if (inserted.indexOf(css) >= 0) return;
    inserted.push(css);
    
    var elem = document.createElement('style');
    var text = document.createTextNode(css);
    elem.appendChild(text);
    
    if (document.head.childNodes.length) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
    }
    else {
        document.head.appendChild(elem);
    }
};


/***/ }),

/***/ "./node_modules/normalize-css/index.js":
/*!*********************************************!*\
  !*** ./node_modules/normalize-css/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var insert = __webpack_require__(/*! insert-css */ "./node_modules/insert-css/index.js");
var normalize = __webpack_require__(/*! ./normalize */ "./node_modules/normalize-css/normalize.js");

insert(normalize);


/***/ }),

/***/ "./node_modules/normalize-css/normalize.js":
/*!*************************************************!*\
  !*** ./node_modules/normalize-css/normalize.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\n\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined in IE 8/9.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 8/9.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9.\n * Hide the `template` element in IE, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n    display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n    background: transparent;\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari 5, and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari 5 and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, serif;\n    font-size: 1em;\n}\n\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\n\npre {\n    white-space: pre-wrap;\n}\n\n/**\n * Set consistent quote types.\n */\n\nq {\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9.\n */\n\nimg {\n    border: 0;\n}\n\n/**\n * Correct overflow displayed oddly in IE 9.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari 5.\n */\n\nfigure {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Correct font family not being inherited in all browsers.\n * 2. Correct font size not being inherited in all browsers.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 2 */\n    margin: 0; /* 3 */\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n"


/***/ }),

/***/ "./src/base/base.css":
/*!***************************!*\
  !*** ./src/base/base.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/base/index.ts":
/*!***************************!*\
  !*** ./src/base/index.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.css */ "./src/base/base.css");
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_base_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize-css */ "./node_modules/normalize-css/index.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2luc2VydC1jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3Mvbm9ybWFsaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXNlL2Jhc2UuY3NzPzUxNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQSxhQUFhLG1CQUFPLENBQUMsc0RBQVk7QUFDakMsZ0JBQWdCLG1CQUFPLENBQUMsOERBQWE7O0FBRXJDOzs7Ozs7Ozs7Ozs7QUNIQSwrYkFBK2IscUJBQXFCLEdBQUcsa0dBQWtHLDRCQUE0QixHQUFHLHdKQUF3SixvQkFBb0IsZ0JBQWdCLEdBQUcsNEpBQTRKLG9CQUFvQixHQUFHLGtWQUFrViw4QkFBOEIseUNBQXlDLDZDQUE2QyxXQUFXLGlEQUFpRCxnQkFBZ0IsR0FBRyxpUUFBaVEsOEJBQThCLEdBQUcsZ0dBQWdHLDJCQUEyQixHQUFHLGlIQUFpSCxpQkFBaUIsR0FBRyxzVUFBc1UscUJBQXFCLHVCQUF1QixHQUFHLDhGQUE4RixnQ0FBZ0MsR0FBRyxtR0FBbUcsd0JBQXdCLEdBQUcsNkVBQTZFLHlCQUF5QixHQUFHLGdGQUFnRixtQ0FBbUMsOEJBQThCLGdCQUFnQixHQUFHLGlFQUFpRSx1QkFBdUIsa0JBQWtCLEdBQUcsbUdBQW1HLG9DQUFvQyxxQkFBcUIsR0FBRyxvRkFBb0YsNEJBQTRCLEdBQUcsbURBQW1ELDBEQUEwRCxHQUFHLHdGQUF3RixxQkFBcUIsR0FBRyxnR0FBZ0cscUJBQXFCLHFCQUFxQix5QkFBeUIsK0JBQStCLEdBQUcsU0FBUyxrQkFBa0IsR0FBRyxTQUFTLHNCQUFzQixHQUFHLGtRQUFrUSxnQkFBZ0IsR0FBRyw4RUFBOEUsdUJBQXVCLEdBQUcsOFBBQThQLGdCQUFnQixHQUFHLDBQQUEwUCxnQ0FBZ0Msb0JBQW9CLHFDQUFxQyxHQUFHLDRKQUE0SixnQkFBZ0IseUJBQXlCLFdBQVcsOFBBQThQLDJCQUEyQiw4QkFBOEIsd0JBQXdCLFdBQVcscUlBQXFJLDBCQUEwQixHQUFHLHNVQUFzVSwyQkFBMkIsR0FBRyxvWUFBb1ksaUNBQWlDLDhCQUE4QixXQUFXLDBHQUEwRyxzQkFBc0IsR0FBRywwS0FBMEssNkJBQTZCLHlCQUF5QixXQUFXLGlPQUFpTyxvQ0FBb0MsMkNBQTJDLHNDQUFzQyxzQ0FBc0MsR0FBRyxnTkFBZ04sK0JBQStCLEdBQUcsdUhBQXVILGdCQUFnQixpQkFBaUIsR0FBRyx3SUFBd0kscUJBQXFCLGtDQUFrQyxXQUFXLGtQQUFrUCxnQ0FBZ0Msd0JBQXdCLEdBQUc7Ozs7Ozs7Ozs7OztBQ0E1elA7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZDs7Ozs7Ozs7Ozs7OztBQ05MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0I7QUFDRyIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmFzZS9pbmRleC50c1wiKTtcbiIsInZhciBpbnNlcnRlZCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICBpZiAoaW5zZXJ0ZWQuaW5kZXhPZihjc3MpID49IDApIHJldHVybjtcbiAgICBpbnNlcnRlZC5wdXNoKGNzcyk7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIFxuICAgIGlmIChkb2N1bWVudC5oZWFkLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsZW0sIGRvY3VtZW50LmhlYWQuY2hpbGROb2Rlc1swXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbn07XG4iLCJ2YXIgaW5zZXJ0ID0gcmVxdWlyZSgnaW5zZXJ0LWNzcycpO1xudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplJyk7XG5cbmluc2VydChub3JtYWxpemUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qISBub3JtYWxpemUuY3NzIHYyLjEuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxudmlkZW8ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgQmFzZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmZvY3VzIHtcXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFR5cG9ncmFwaHlcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgZm9udCBmYW1pbHkgc2V0IG9kZGx5IGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgb2YgcHJlLWZvcm1hdHRlZCB0ZXh0IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi8qKlxcbiAqIFNldCBjb25zaXN0ZW50IHF1b3RlIHR5cGVzLlxcbiAqL1xcblxcbnEge1xcbiAgICBxdW90ZXM6IFxcXCJcXFxcMjAxQ1xcXCIgXFxcIlxcXFwyMDFEXFxcIiBcXFwiXFxcXDIwMThcXFwiIFxcXCJcXFxcMjAxOVxcXCI7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgZGlzcGxheWVkIG9kZGx5IGluIElFIDkuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZpZ3VyZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpIDUuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBmb250IGZhbWlseSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDIgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgOCsuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS5cXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5NzQyMDQ2NzE1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L3Byb2plY3RzL2Jsb2cvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCAnLi9iYXNlLmNzcyc7XHJcbmltcG9ydCAnbm9ybWFsaXplLWNzcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==