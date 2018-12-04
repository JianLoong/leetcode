/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const a = s
    .split("")
    .sort()
    .join("");
  const b = t
    .split("")
    .sort()
    .join("");

  return a === b;
};
