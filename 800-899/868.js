/**
 * @param {number} N
 * @return {number}
 */
const binaryGap = N => {
  let str = N.toString(2);
  let dist = 0;
  let pos = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "1") {
      dist > i - pos ? dist : (dist = i - pos);
      pos = i;
    }
  }
  return dist;
};

const input = 5;

console.log(binaryGap(input));
