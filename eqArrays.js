const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: Both arrays are the same!`);
  } else {
    console.log(`❌ Assertion Failed: These arrays are not identical`);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays(['close', 1, 2, 3], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays(['butts', 'bears', 'bananas'], ['butts', 'bears', 'bananas']), true); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS