/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
const max = 100;
// Random between 0 and 100 (not inclusive 100)
const badVersion = Math.floor(Math.random() * Math.floor(max));

function isBadVersion(value) {
  if (value >= badVersion) return true;
  return false;
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      //console.log(mid);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};

const value = solution(isBadVersion);

console.log(solution(isBadVersion)(100));
