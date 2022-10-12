const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// Test code
describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
    scary: "Oogie Boogie"
  };
  it("should match the wire to drama", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should show as undefined as it isn't on the list", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("should match Oogie Boogie to scary", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Oogie Boogie"), "scary");
  });
});