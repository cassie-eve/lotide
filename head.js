const assertEqual = function(arr, first) {
  if (arr === first) {
    console.log(`✅ Assertion Passed: ${first} is the first item from the array`);
  } else {
    console.log(`❌ Assertion Failed: ${first} is not the first item in the array`);
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");