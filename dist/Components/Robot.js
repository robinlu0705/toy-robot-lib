'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Robot$prototype;

exports.default = Robot;

var _baseMethodCreators = require('../baseMethodCreators');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Robot() {
  this.state = {
    x: null,
    y: null,
    f: null,
    tableSize: null
  };
}

Robot.prototype = (_Robot$prototype = {}, _defineProperty(_Robot$prototype, _baseMethodCreators.placer.BEHAVIOR_NAME, _baseMethodCreators.placer.behavior), _defineProperty(_Robot$prototype, _baseMethodCreators.reporter.BEHAVIOR_NAME, _baseMethodCreators.reporter.behavior), _defineProperty(_Robot$prototype, _baseMethodCreators.mover.BEHAVIOR_NAME, _baseMethodCreators.mover.behavior), _defineProperty(_Robot$prototype, _baseMethodCreators.lefter.BEHAVIOR_NAME, _baseMethodCreators.lefter.behavior), _defineProperty(_Robot$prototype, _baseMethodCreators.righter.BEHAVIOR_NAME, _baseMethodCreators.righter.behavior), _Robot$prototype);