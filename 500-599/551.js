/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let continousCount = 0;
  let absentCount = 0;
  for (let character of s) {
    console.log(character);
    if (character == "A") {
      absentCount++;
      if (absentCount == 2) {
        return "False";
      }
    }
    if (character == "L") {
      continousCount++;
      if (continousCount == 3) {
        return "False";
      }
    } else {
      continousFlag = 0;
    }
  }
  return "True";
};

/**
 * Solution using regular expression.
 */
const checkRecord = s => {
  return !s.match(".*LLL.*|.*A.*A.*");
};

const input = "PPALLPP";
console.log(checkRecord(input));

console.log(test(input));
