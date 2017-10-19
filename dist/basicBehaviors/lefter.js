'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NAME_KEY$METHOD_KEY;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rotationList = ['NORTH', 'WEST', 'SOUTH', 'EAST'];

function newFacingCalc(f) {
  var idx = rotationList.indexOf(f);
  if (idx !== -1) {
    var newIdx = (idx + 1) % rotationList.length;
    return rotationList[newIdx];
  }

  return f;
}

exports.default = (_NAME_KEY$METHOD_KEY = {}, _defineProperty(_NAME_KEY$METHOD_KEY, _constants.NAME_KEY, _constants.LEFT), _defineProperty(_NAME_KEY$METHOD_KEY, _constants.METHOD_KEY, function () {
  if (_Utils2.default.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
    // it has been placed on a table
    this.state = _extends({}, this.state, {
      f: newFacingCalc(this.state.f)
    });
  }
}), _NAME_KEY$METHOD_KEY);