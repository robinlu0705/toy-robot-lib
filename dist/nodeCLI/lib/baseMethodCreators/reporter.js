'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.METHOD_NAME = undefined;

var _constants = require('./constants');

Object.defineProperty(exports, 'METHOD_NAME', {
  enumerable: true,
  get: function get() {
    return _constants.REPORT;
  }
});

exports.default = function () {
  return function report() {
    if (_Utils2.default.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      console.log('Output: ' + this.state.x + ',' + this.state.y + ',' + this.state.f);
    }
  };
};

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }