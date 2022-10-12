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
});