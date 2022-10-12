const assert = require('chai').assert;
const flatten = require('../flatten');

// Test code
describe("#flatten", () => {
  it("the arrays should flatten to [1,2,3,4]", () => {
    assert.deepEqual(flatten([1,[2,3],4]), [1, 2, 3, 4]);
  });
  it("the arrays should flatten to [1,2,3,4,5,6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});