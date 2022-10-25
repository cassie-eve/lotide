// Grab everything except for the first element in an array

const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;