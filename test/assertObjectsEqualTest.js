const assertObjectsEqual = require('../assertObjectsEqual');

// Test code
console.log(assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" }));
console.log(assertObjectsEqual({ a: "1", b: "2", c: "2" }, { a: "1", b: "2", c: "2" }));