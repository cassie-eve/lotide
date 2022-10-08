// Grab the last item of an array

const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;