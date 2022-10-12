const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return 1 as the first e is in index 1", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("should return 0 as the first b is in index 0", () => {
    assert.deepEqual(letterPositions("butts").b, [0]);
  });
});