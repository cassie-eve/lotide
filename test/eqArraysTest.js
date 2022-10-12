const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(['butts', 'bears', 'bananas'], ['butts', 'bears', 'bananas']), true); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS