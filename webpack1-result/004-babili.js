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
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function (b) {
	  function c(e) {
	    if (d[e]) return d[e].exports;var f = d[e] = { i: e, l: !1, exports: {} };return b[e].call(f.exports, f, f.exports, c), f.l = !0, f.exports;
	  }var d = {};return c.m = b, c.c = d, c.i = function (e) {
	    return e;
	  }, c.d = function (e, f, g) {
	    c.o(e, f) || Object.defineProperty(e, f, { configurable: !1, enumerable: !0, get: g });
	  }, c.n = function (e) {
	    var f = e && e.__esModule ? function () {
	      return e['default'];
	    } : function () {
	      return e;
	    };return c.d(f, 'a', f), f;
	  }, c.o = function (e, f) {
	    return Object.prototype.hasOwnProperty.call(e, f);
	  }, c.p = '', c(c.s = 2);
	})([function (b, c) {
	  'use strict';
	  c.a = function () {
	    function _class() {
	      _classCallCheck(this, _class);
	    }

	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        return 'AAAA';
	      }
	    }]);

	    return _class;
	  }();
	}, function () {
	  'use strict';
	}, function (b, c, d) {
	  'use strict';
	  Object.defineProperty(c, '__esModule', { value: !0 });var e = d(0);d(1);var f = new e.a();console.log(f.render());
	}]);

/***/ }
/******/ ]);