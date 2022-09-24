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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} is equal to ${arr2}!`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} is NOT equal to ${arr2}`);
  }
};

console.log(assertArraysEqual([1,2,3,4], [1,2,3,4]));