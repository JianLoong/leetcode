/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  if (s == null || s.length < 1) return "";
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return s.substring(Math.ceil(start), end + 1);
};

const expandAroundCenter = (s, left, right) => {
  let L = left;
  let R = right;
  while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
    L--;
    R++;
  }
  return R - L - 1;
};

const s = "cabbad";

console.log(longestPalindrome(s));
