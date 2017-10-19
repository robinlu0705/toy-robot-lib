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

function newPosCalc(x, y, f) {
  switch (f) {
    case 'NORTH':
      {
        return {
          x: x,
          y: y + 1
        };
      }

    case 'EAST':
      {
        return {
          x: x + 1,
          y: y
        };
      }

    case 'SOUTH':
      {
        return {
          x: x,
          y: y - 1
        };
      }

    case 'WEST':
      {
        return {
          x: x - 1,
          y: y
        };
      }

    default:
      {
        return { x: x, y: y, f: f };
      }
  }
}

exports.default = (_NAME_KEY$METHOD_KEY = {}, _defineProperty(_NAME_KEY$METHOD_KEY, _constants.NAME_KEY, _constants.MOVE), _defineProperty(_NAME_KEY$METHOD_KEY, _constants.METHOD_KEY, function () {
  if (_Utils2.default.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
    // it has been placed on a table
    var newPos = newPosCalc(this.state.x, this.state.y, this.state.f);

    if (_Utils2.default.checkInside(newPos.x, newPos.y, this.state.tableSize)) {
      // new position is still in the table
      this.state = _extends({}, this.state, {
        x: newPos.x,
        y: newPos.y
      });
    }
  }
}), _NAME_KEY$METHOD_KEY);