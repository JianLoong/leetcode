/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num => {
  const str = num.toString(2);
  let result = "";
  for (var i of str) {
    result += i === "1" ? "0" : "1";
  }
  return parseInt(result, 2);
};
