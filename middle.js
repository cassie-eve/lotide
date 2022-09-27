const eqArrays = function(first, second) {
  if (first.length === second.length) {
    for (let i = 0; i <= first.length; i++) {
      if (first[i] === second[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[Math.floor((array.length - 1) / 2)]];
  } else {
    return [array[Math.floor((array.length - 1) / 2)], array[Math.floor(array.length / 2)]];
  }
};

assertArraysEqual(middle([1,2,3]), [2]); // Pass
assertArraysEqual(middle(['banana', 'coconut', 'strawberry']), ['coconut']); // Pass
assertArraysEqual(middle([23, 43, 12, 3, 8]), [84, 12]); // Fail
assertArraysEqual(middle([23, 43, 84, 12, 3, 8]), [84, 12]); // Pass
