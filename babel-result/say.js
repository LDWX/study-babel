"use strict";

var _name = "shenxin";
module.exports = {
  get name() {
    return _name;
  },

  changeName: function changeName(n) {
    _name = n;
  },
  getName: function getName() {
    return _name;
  }
};