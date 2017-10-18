'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

Object.defineProperty(exports, 'METHOD_NAME', {
  enumerable: true,
  get: function get() {
    return _constants.PLACE;
  }
});

exports.default = function () {
  return function (props) {
    this.state = _extends({}, this.state, {
      x: props.x,
      y: props.y,
      f: props.f,
      tableSize: props.table.size
    });
  };
};