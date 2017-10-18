'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

Object.defineProperty(exports, 'METHOD_NAME', {
  enumerable: true,
  get: function get() {
    return _constants.REPORT;
  }
});

exports.default = function () {
  return function () {
    console.log('Output: ' + this.state.x + ', ' + this.state.y + ', ' + this.state.f);
  };
};