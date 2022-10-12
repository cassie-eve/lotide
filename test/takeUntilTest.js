const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("should return [ 1, 2, 5, 7, 2 ]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  it("should return [2, 3, 4, 5, 6]", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    (takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);
  });
});