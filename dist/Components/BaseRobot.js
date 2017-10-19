'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('../basicBehaviors/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseRobot = function () {
  function BaseRobot() {
    _classCallCheck(this, BaseRobot);

    this.state = {
      x: null,
      y: null,
      f: null,
      tableSize: null
    };
  }

  _createClass(BaseRobot, [{
    key: 'assemble',
    value: function assemble() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.forEach(function (arg) {
        if (arg[_constants.NAME_KEY] && typeof arg[_constants.METHOD_KEY] === 'function') {
          _this[arg[_constants.NAME_KEY]] = arg[_constants.METHOD_KEY];
        }
      });
    }
  }]);

  return BaseRobot;
}();

exports.default = BaseRobot;