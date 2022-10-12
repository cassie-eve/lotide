// Takes in 2 arrays and returns true if the arrays are equal and false otherwise

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

module.exports = eqArrays;