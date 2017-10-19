'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validFacing = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

function checkProps(props) {
  if (!props || !Number.isInteger(props.x) || props.x < 0 || !Number.isInteger(props.y) || props.y < 0 || validFacing.indexOf(props.f) === -1 || !props.table || !Number.isInteger(props.table.size) || props.table.size <= 0) {
    return false;
  }

  return true;
}

exports.default = {
  BEHAVIOR_NAME: _constants.PLACE,
  behavior: function behavior(props) {
    if (checkProps(props) && _Utils2.default.checkInside(props.x, props.y, props.table.size)) {
      this.state = _extends({}, this.state, {
        x: props.x,
        y: props.y,
        f: props.f,
        tableSize: props.table.size
      });
    }
  }
};