'use strict';

var foo = 'hello world!';

var version = "1.0.0";

var index = 42;

var main = (function () {
  console.log(foo);
  console.log('version: ' + version);
  console.log('the answer is ' + index);
});

module.exports = main;
