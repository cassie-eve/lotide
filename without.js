// Takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};

module.exports = without;