'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Robot$prototype;

exports.default = Robot;

var _basicBehaviors = require('../basicBehaviors');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Robot() {
  this.state = {
    x: null,
    y: null,
    f: null,
    tableSize: null
  };
}

Robot.prototype = (_Robot$prototype = {}, _defineProperty(_Robot$prototype, _basicBehaviors.placer.BEHAVIOR_NAME, _basicBehaviors.placer.behavior), _defineProperty(_Robot$prototype, _basicBehaviors.reporter.BEHAVIOR_NAME, _basicBehaviors.reporter.behavior), _defineProperty(_Robot$prototype, _basicBehaviors.mover.BEHAVIOR_NAME, _basicBehaviors.mover.behavior), _defineProperty(_Robot$prototype, _basicBehaviors.lefter.BEHAVIOR_NAME, _basicBehaviors.lefter.behavior), _defineProperty(_Robot$prototype, _basicBehaviors.righter.BEHAVIOR_NAME, _basicBehaviors.righter.behavior), _Robot$prototype);