'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Robot$prototype;

exports.default = Robot;

var _placer = require('../baseMethodCreators/placer');

var _placer2 = _interopRequireDefault(_placer);

var _reporter = require('../baseMethodCreators/reporter');

var _reporter2 = _interopRequireDefault(_reporter);

var _mover = require('../baseMethodCreators/mover');

var _mover2 = _interopRequireDefault(_mover);

var _lefter = require('../baseMethodCreators/lefter');

var _lefter2 = _interopRequireDefault(_lefter);

var _righter = require('../baseMethodCreators/righter');

var _righter2 = _interopRequireDefault(_righter);

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

Robot.prototype = (_Robot$prototype = {}, _defineProperty(_Robot$prototype, _placer.METHOD_NAME, (0, _placer2.default)()), _defineProperty(_Robot$prototype, _reporter.METHOD_NAME, (0, _reporter2.default)()), _defineProperty(_Robot$prototype, _mover.METHOD_NAME, (0, _mover2.default)()), _defineProperty(_Robot$prototype, _lefter.METHOD_NAME, (0, _lefter2.default)()), _defineProperty(_Robot$prototype, _righter.METHOD_NAME, (0, _righter2.default)()), _Robot$prototype);