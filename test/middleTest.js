const assert = require('chai').assert;
const middle = require('../middle');

// Test code
describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns ['coconut'] for ['banana', 'coconut', 'strawberry']", () => {
    assert.deepEqual(middle(['banana', 'coconut', 'strawberry']), ['coconut']);
  });
  it("returns [12] for [23, 43, 12, 3, 8]", () => {
    assert.deepEqual(middle([23, 43, 12, 3, 8]), [12]);
  });
  it("returns [84, 12] for [23, 43, 84, 12, 3, 8]", () => {
    assert.deepEqual(middle([23, 43, 84, 12, 3, 8]), [84, 12]);
  });
});