/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = logs => {
  let letter = [];
  let digit = [];
  for (let v of logs) {
    if (v.split(" ")[1].charAt(0) >= "0" && v.split(" ")[1].charAt(0) <= "9") {
      digit.push(v);
    } else {
      letter.push(v);
    }
  }
  letter.sort((a, b) => {
    return (
      a.split(" ")[1].localeCompare(b.split(" ")[1]) ||
      a.split(" ")[2].localeCompare(b.split(" ")[2])
    );
  });
  return letter.concat(digit);
};
const input = [
  "a1 9 2 3 1",
  "g1 act car",
  "zo4 4 7",
  "ab1 off key dog",
  "a8 act zoo"
];

console.log(reorderLogFiles(input));
