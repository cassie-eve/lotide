const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// Test code
describe('#eqArrays', () => {
  it("returns true", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true", () => {
    assert.deepEqual(eqArrays(['butts', 'bears', 'bananas'], ['butts', 'bears', 'bananas']), true);
  });
  it("returns true", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  it("returns false", () => {
    assert.deepEqual(eqArrays([1, 3], [1, 2]), false);
  });
  it("returns false", () => {
    assert.deepEqual(eqArrays([1, 3, 4, 6, 4, 8], [1, 2, 8, 3, 4]), false);
  });
});