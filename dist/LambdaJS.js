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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Enum;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Enum() {
  for (var _len = arguments.length, enumuerableElements = Array(_len), _key = 0; _key < _len; _key++) {
    enumuerableElements[_key] = arguments[_key];
  }

  var len = enumuerableElements.length;
  var o = _defineProperty({}, Symbol.iterator, function () {
    var keys = Object.keys(o);
    var i = 0;
    return {
      next: function next() {
        if (i < keys.length) {
          return { value: keys[i++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  });

  for (var i = 0; i < len; i++) {
    var val = enumuerableElements[i];
    o[val] = Symbol(val);
  }

  return Object.freeze(o);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fString;
function fString(str) {
  var __String = str;

  for (var _len = arguments.length, defaultValues = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    defaultValues[_key - 1] = arguments[_key];
  }

  var __values = defaultValues;

  this.print = function print() {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      values[_key2] = arguments[_key2];
    }

    var vals = values.length > 0 ? values : __values;
    return formatString.apply(undefined, [__String].concat(vals));
  };

  return this;
}

function formatString(str) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  var r = /{(\d+)}/g;
  return str.replace(r, function (match, number) {
    return args[number] !== undefined ? args[number] : match;
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KeyMap;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function KeyMap(objectToMap, transform) {
  var __keys = Object.keys(objectToMap),
      l = __keys.length;

  var o = _defineProperty({}, Symbol.iterator, function () {
    var keys = Object.keys(o);
    var i = 0;
    return {
      next: function next() {
        if (i < keys.length) {
          return { value: keys[i++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  });

  for (var i = 0; i < l; i++) {
    var keyValue = __keys[i],
        objKey = transform ? transform(keyValue) : keyValue;

    o[objKey] = keyValue;
  }

  return Object.freeze(o);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Struct;
function Struct() {
  for (var _len = arguments.length, composedStructure = Array(_len), _key = 0; _key < _len; _key++) {
    composedStructure[_key] = arguments[_key];
  }

  var props = composedStructure,
      len = props.length;

  function constructor() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    for (var i = 0; i < len; i++) {
      this[props[i]] = args[i];
    }
    return this;
  }

  return constructor;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Optimized UUID generator, RFC4122 version 4 compliant.
 **/
var UUID = function () {
  var self = {};
  var lut = [];for (var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + i.toString(16);
  }
  self.generate = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { useDash: true, base: 32 };

    var sep = options.useDash ? '-' : '';
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;

    switch (options.base) {
      case 16:
        return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + sep + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + sep + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff];
      case 64:
        {
          var d4 = Math.random() * 0xffffffff | 0;
          var d5 = Math.random() * 0xffffffff | 0;
          var d6 = Math.random() * 0xffffffff | 0;
          var d7 = Math.random() * 0xffffffff | 0;
          return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + sep + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + sep + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + sep + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + sep + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff] + sep + lut[d4 & 0xff] + lut[d4 >> 8 & 0xff] + lut[d4 >> 16 & 0xff] + lut[d4 >> 24 & 0xff] + sep + lut[d5 & 0xff] + lut[d5 >> 8 & 0xff] + lut[d5 >> 16 & 0xff] + lut[d5 >> 24 & 0xff] + sep + lut[d6 & 0xff] + lut[d6 >> 8 & 0xff] + lut[d6 >> 16 & 0xff] + lut[d6 >> 24 & 0xff] + sep + lut[d7 & 0xff] + lut[d7 >> 8 & 0xff] + lut[d7 >> 16 & 0xff] + lut[d7 >> 24 & 0xff];
        }
      default:
        return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + sep + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + sep + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + sep + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + sep + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
    }
  };
  return self;
}();

exports.default = UUID;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _struct = __webpack_require__(3);

Object.defineProperty(exports, 'Struct', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_struct).default;
  }
});

var _enum = __webpack_require__(0);

Object.defineProperty(exports, 'Enum', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_enum).default;
  }
});

var _fString = __webpack_require__(1);

Object.defineProperty(exports, 'fString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fString).default;
  }
});

var _keyMap = __webpack_require__(2);

Object.defineProperty(exports, 'KeyMap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_keyMap).default;
  }
});

var _uidGenerator = __webpack_require__(4);

Object.defineProperty(exports, 'UID', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_uidGenerator).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
//# sourceMappingURL=LambdaJS.js.map