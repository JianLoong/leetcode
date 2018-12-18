/**
 * Using a "stack". (52ms)
 *
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = S => {
  let letters = [];
  let regex = /[A-Za-z]/g;
  for (let i = 0; i < S.length; i++) {
    if (S[i].match(regex)) {
      letters.push(S[i]);
    }
  }
  let result = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i].match(regex)) {
      result.push(letters.pop());
    } else {
      result.push(S[i]);
    }
  }

  return result.join("");
};

const input = "a-bC-dEf-ghIj";

console.log(reverseOnlyLetters(input));
