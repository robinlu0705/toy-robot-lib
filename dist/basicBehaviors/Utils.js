"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  checkInside: function checkInside(x, y, size) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(size) || x < 0 || x >= size || y < 0 || y >= size) {
      return false;
    }

    return true;
  }
};