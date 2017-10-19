'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NAME_KEY$METHOD_KEY;

var _constants = require('./constants');

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_NAME_KEY$METHOD_KEY = {}, _defineProperty(_NAME_KEY$METHOD_KEY, _constants.NAME_KEY, _constants.REPORT), _defineProperty(_NAME_KEY$METHOD_KEY, _constants.METHOD_KEY, function () {
  if (_Utils2.default.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
    console.log('Output: ' + this.state.x + ',' + this.state.y + ',' + this.state.f);
  }
}), _NAME_KEY$METHOD_KEY);