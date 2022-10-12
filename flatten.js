// Take a nested array and flatten it into a single layer array

const flatten = function(nestedArray) {
  let newArr = [];
  for (let item of nestedArray) {
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

module.exports = flatten;