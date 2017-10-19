'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  BEHAVIOR_NAME: _constants.REPORT,
  behavior: function behavior() {
    if (_Utils2.default.checkInside(this.state.x, this.state.y, this.state.tableSize)) {
      console.log('Output: ' + this.state.x + ',' + this.state.y + ',' + this.state.f);
    }
  }
};