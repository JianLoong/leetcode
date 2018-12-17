/**
 * Solution using the parseInt standard library.
 *
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
};
