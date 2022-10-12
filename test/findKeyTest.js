const assert = require('chai').assert;
const findKey = require('../findKey');

// Test code
describe("#findKey", () => {
  const myObjects = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("should return 'noma'", () => {
    assert.strictEqual(findKey(myObjects, x => x.stars === 2), "noma");
  });
  it("should return 'Blue Hill'", () => {
    assert.strictEqual(findKey(myObjects, x => x.stars === 1), "Blue Hill"); 
  });
});