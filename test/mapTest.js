const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("first letter of each word should return  'g', 'c', 't', 'm', 't' ", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("should return [2, 3, 4, 5, 6]", () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.deepEqual(map(numbers, num => num + 1), [2, 3, 4, 5, 6]);
  });
  it("should return 'bat', 'super', 'spider'", () => {
    const superheroes = ['batman', 'superman', 'spiderman']
    assert.deepEqual(map(superheroes, str => str.slice(0, -3)), ['bat', 
    'super', 'spider']);
  });
});