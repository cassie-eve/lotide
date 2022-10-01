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
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}!`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const takeUntil = function(array, callback) {
  const newArr = [];
  for (let arr of array) {
    if (!arr === callback(arr)) {
      newArr.push(arr); 
    } else {
      break;
    }
  }
  return newArr;
};

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);
