const {test, expect} = require('@playwright/test') //include all playwright node modules) // we need test(create test) and expect module(assertion)
const {hello, helloworld} =require('./demo/hello') //requires hello.js

console.log(hello()); // call hello func
console.log(helloworld());// call hello world func