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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\wamp64\\www\\control-mascotas-react\\resources\\js\\app.js: Unexpected token (16:1)\n\n\u001b[0m \u001b[90m 14 | \u001b[39mrequire(\u001b[32m'./bootstrap'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39mrequire(\u001b[32m'./components/Example'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 16 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39mrequire(\u001b[32m'./components/loginForm'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39mrequire(\u001b[32m'./components/mascotasForm'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39mrequire(\u001b[32m'./components/recibosForm'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Object.raiseWithData (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Object.raise (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at Object.unexpected (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:8966:16)\n    at Object.jsxParseIdentifier (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:4492:12)\n    at Object.jsxParseNamespacedName (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:4502:23)\n    at Object.jsxParseElementName (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:4513:21)\n    at Object.jsxParseOpeningElementAt (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:4599:22)\n    at Object.jsxParseElementAt (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:4632:33)\n    at Object.jsxParseElement (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:4706:17)\n    at Object.parseExprAtom (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:4713:19)\n    at Object.parseExprSubscripts (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:9844:23)\n    at Object.parseUpdate (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:9824:21)\n    at Object.parseMaybeUnary (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:9813:17)\n    at Object.parseExprOps (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:9683:23)\n    at Object.parseMaybeConditional (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:9657:23)\n    at Object.parseMaybeAssign (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:9620:21)\n    at Object.parseExpressionBase (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:9564:23)\n    at C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:9558:39\n    at Object.allowInAnd (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:11297:16)\n    at Object.parseExpression (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:9558:17)\n    at Object.parseStatementContent (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:11562:23)\n    at Object.parseStatement (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)\n    at Object.parseBlockBody (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:11999:10)\n    at Object.parseTopLevel (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:11362:10)\n    at Object.parse (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:13045:10)\n    at parse (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\parser\\lib\\index.js:13098:38)\n    at parser (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (C:\\wamp64\\www\\control-mascotas-react\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\control-mascotas-react\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\control-mascotas-react\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });