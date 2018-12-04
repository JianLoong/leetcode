/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// Naive solution.
var hammingDistance = function(x, y) {
  let xInBinary = dec2bin(x).split("");
  let yInBinary = dec2bin(y).split("");
  let result = 0;

  console.log(xInBinary);
  console.log(yInBinary);

  let diff = Math.abs(xInBinary.length - yInBinary.length);

  for (let i = 0; i < diff; i++) {
    if (xInBinary.length < yInBinary.length) {
      xInBinary.unshift("0");
    } else {
      yInBinary.unshift("0");
    }
  }

  console.log(xInBinary);
  console.log(yInBinary);

  //Calculate the difference.
  for (let x = 0; x < xInBinary.length; x++) {
    if (xInBinary[x] - yInBinary[x] != 0) {
      result++;
    }
  }

  return result;
};

const dec2bin = dec => (dec >>> 0).toString(2);

const x = 1;
const y = 4;

console.log(hammingDistance(x, y));
