"use strict";

exports.__esModule = true;
exports.printMe = printMe;
exports.writePaper = writePaper;
exports.changeName = changeName;
exports.getName = getName;
exports.name = void 0;

function printMe() {
  console.log('I get called from print.js!');
}

function writePaper() {
  console.log("this is writePaper");
}

var name = "shenxin";
exports.name = name;

function changeName(n) {
  exports.name = name = n;
}

function getName() {
  return name;
}