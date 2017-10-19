'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Robot;

var _basicBehaviors = require('../basicBehaviors');

function Robot() {
  this.state = {
    x: null,
    y: null,
    f: null,
    tableSize: null
  };
}

Robot.prototype = (0, _basicBehaviors.assemble)(_basicBehaviors.placer, _basicBehaviors.reporter, _basicBehaviors.mover, _basicBehaviors.lefter, _basicBehaviors.righter);