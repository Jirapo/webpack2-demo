/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _library = __webpack_require__(1);

	var library = _interopRequireWildcard(_library);

	var _math = __webpack_require__(3);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	library.reexportedMultiply(1, 2);
	(0, _math.add)(1, 2);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _abc = __webpack_require__(2);

	Object.defineProperty(exports, "a", {
	  enumerable: true,
	  get: function get() {
	    return _abc.a;
	  }
	});
	Object.defineProperty(exports, "b", {
	  enumerable: true,
	  get: function get() {
	    return _abc.b;
	  }
	});
	Object.defineProperty(exports, "c", {
	  enumerable: true,
	  get: function get() {
	    return _abc.c;
	  }
	});

	var _math = __webpack_require__(3);

	Object.defineProperty(exports, "reexportedAdd", {
	  enumerable: true,
	  get: function get() {
	    return _math.add;
	  }
	});
	Object.defineProperty(exports, "reexportedMultiply", {
	  enumerable: true,
	  get: function get() {
	    return _math.multiply;
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.a = a;
	exports.b = b;
	exports.c = c;
	function a() {
	  console.log("AAAA");
	}
	function b() {
	  console.log("BBBB");
	}
	function c() {
	  console.log("CCCC");
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.add = add;
	exports.multiply = multiply;
	exports.list = list;
	function add() {
		var sum = 0,
		    i = 0,
		    args = arguments,
		    l = args.length;
		while (i < l) {
			sum += args[i++];
		}
		return sum;
	}

	function multiply() {
		var product = 1,
		    i = 0,
		    args = arguments,
		    l = args.length;
		while (i < l) {
			product *= args[i++];
		}
		return product;
	}

	function list() {
		return Array.from(arguments);
	}

/***/ }
/******/ ]);