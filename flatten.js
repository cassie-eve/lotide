
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} is equal to ${arr2}!`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} is NOT equal to ${arr2}`);
  }
};

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

const flatten = function(nestedArray){
  let newArr = [];
  for (let item of nestedArray){
    if (Array.isArray(item)) {
      for (let i of item) {
        newArr.push(i);
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(assertArraysEqual(flatten([1,[2,3],4]), [1,2,3,4]));