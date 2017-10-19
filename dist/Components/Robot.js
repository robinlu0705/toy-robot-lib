'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseRobot2 = require('./BaseRobot');

var _BaseRobot3 = _interopRequireDefault(_BaseRobot2);

var _basicBehaviors = require('../basicBehaviors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Robot = function (_BaseRobot) {
  _inherits(Robot, _BaseRobot);

  function Robot() {
    _classCallCheck(this, Robot);

    return _possibleConstructorReturn(this, (Robot.__proto__ || Object.getPrototypeOf(Robot)).apply(this, arguments));
  }

  return Robot;
}(_BaseRobot3.default);

exports.default = Robot;


Robot.prototype.assemble(_basicBehaviors.placer, _basicBehaviors.reporter, _basicBehaviors.mover, _basicBehaviors.lefter, _basicBehaviors.righter);