'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Robot$prototype;

exports.default = Robot;

var _placer = require('./methodCreators/placer');

var _placer2 = _interopRequireDefault(_placer);

var _reporter = require('./methodCreators/reporter');

var _reporter2 = _interopRequireDefault(_reporter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Robot() {
  this.state = {
    x: null,
    y: null,
    f: null,
    tableSize: null
  };
}

Robot.prototype = (_Robot$prototype = {}, _defineProperty(_Robot$prototype, _placer.METHOD_NAME, (0, _placer2.default)()), _defineProperty(_Robot$prototype, _reporter.METHOD_NAME, (0, _reporter2.default)()), _Robot$prototype);