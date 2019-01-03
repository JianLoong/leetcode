/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  let res = [];
  generate(n, n, "", res);
  return res;
};

const generate = (l, r, s, res) => {
  if (l > r) return; // e.g. ))(

  if (!l && !r) return res.push(s);

  if (l) generate(l - 1, r, s + "(", res);
  if (r) generate(l, r - 1, s + ")", res);
};
