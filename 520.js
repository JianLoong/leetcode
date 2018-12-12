/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // If all are uppercase return true.
  let result = false;
  result = word === word.toUpperCase();
  if (!result) {
    result = word === word[0] + word.substr(1).toLowerCase();
  }

  return result;
};
