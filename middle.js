// Takes in an array and returns middle most element of the array.

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[Math.floor((array.length - 1) / 2)]];
  } else {
    return [array[Math.floor((array.length - 1) / 2)], array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;