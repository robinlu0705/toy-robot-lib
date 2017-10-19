'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  checkInside: function checkInside(x, y, size) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(size) || x < 0 || x >= size || y < 0 || y >= size) {
      return false;
    }

    return true;
  },
  assemble: function assemble() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.reduce(function (comp, arg) {
      if (arg[_constants.NAME_KEY] && typeof arg[_constants.METHOD_KEY] === 'function') {
        return _extends({}, comp, _defineProperty({}, arg[_constants.NAME_KEY], arg[_constants.METHOD_KEY]));
      }

      return comp;
    }, {});
  }
};