// Count the letters in each string displayed in an object

const countLetters = function(string) {
  const results = {};
  string = string.replaceAll(' ', '');
  for (const letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;