// Find the appropriate key using the value as a parameter

const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {
    console.log(object[key]);
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;