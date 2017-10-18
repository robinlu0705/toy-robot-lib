'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.METHOD_NAME = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

Object.defineProperty(exports, 'METHOD_NAME', {
  enumerable: true,
  get: function get() {
    return _constants.RIGHT;
  }
});

exports.default = function () {
  return function () {
    if (_Utils2.default.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      // it has been placed on a table
      this.state = _extends({}, this.state, {
        f: newFacingCalc(this.state.f)
      });
    }
  };
};

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newFacingCalc(f) {
  var idx = rotationList.indexOf(f);
  if (idx !== -1) {
    var newIdx = (idx + 1) % rotationList.length;
    return rotationList[newIdx];
  }
}

var rotationList = ['NORTH', 'EAST', 'SOUTH', 'WEST'];