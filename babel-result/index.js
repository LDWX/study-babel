"use strict";

require("core-js/modules/es.function.name");

require("core-js/stable");

require("regenerator-runtime/runtime");

// import { name, changeName, getName } from './print.js';
// changeName("hello world")
// console.log(name)
// changeName("wangya")
// console.log(name)
var _require = require("./say"),
    name = _require.name,
    changeName = _require.changeName,
    getName = _require.getName;

console.log('sebmck' === 'dork');
changeName("hello world");
console.log(getName());
changeName("wangya");
console.log(getName());
console.log(name);