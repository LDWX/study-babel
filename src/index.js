
import "core-js/stable";
import "regenerator-runtime/runtime";

// import { name, changeName, getName } from './print.js';

// changeName("hello world")
// console.log(name)

// changeName("wangya")
// console.log(name)


let { name, changeName, getName } = require("./say")

console.log("foo" === "foo")

changeName("hello world")
console.log(getName())

changeName("wangya")
console.log(getName())

console.log(name)

console.log("end");

(() => {
  console.log("this is arrow")
})();


class Person {
  constructor() {
    this.name = "shenxin"
  }
}