const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle(['banana', 'coconut', 'strawberry']), ['coconut']);
assertArraysEqual(middle([23, 43, 12, 3, 8]), [12]);
assertArraysEqual(middle([23, 43, 84, 12, 3, 8]), [84, 12]);