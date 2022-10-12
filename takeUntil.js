// Takes in an array and callback and returns a slice of the array based on the criteria specified in the callback

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

module.exports = takeUntil;