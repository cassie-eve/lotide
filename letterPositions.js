// find the index of string where a letter first shows up

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replaceAll(' ', '');
  for (let i = 0; i <= sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;