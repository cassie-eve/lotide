const tail = require("../tail.js");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', `Labs`]), [`Lighthouse`, `Labs`]);
  });
  it("returns [1,2,3] for [0,1,2,3]", () => {
    assert.deepEqual(tail([0,1,2,3]), [1,2,3]);
  });
});
