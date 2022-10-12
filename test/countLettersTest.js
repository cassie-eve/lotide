const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns { b: 2, u: 2, t: 4, s: 2 } for 'butts butts'", () => {
    assert.deepEqual(countLetters('butts butts'), { b: 2, u: 2, t: 4, s: 2 });
  });
  it("returns { b: 1, a: 3, n: 2 } for 'banana'", () => {
    assert.deepEqual(countLetters('banana'), { b: 1, a: 3, n: 2 });
  });
  it("returns { o: 2, r: 1, e: 1 } for 'oreo'", () => {
    assert.deepEqual(countLetters('oreo'), { o: 2, r: 1, e: 1 });
  });
});