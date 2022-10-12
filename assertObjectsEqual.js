// Takes in 2 objects and returns true if they are equal and false otherwise

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}!`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

console.log(assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" }));
console.log(assertObjectsEqual({ a: "1", b: "2", c: "2" }, { a: "1", b: "2", c: "2" }));