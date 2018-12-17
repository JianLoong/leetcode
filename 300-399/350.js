/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const map = new Map();

  for (i of nums1) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      const value = map.get(i);
      map.set(i, value + 1);
    }
  }

  const ret = [];

  for (i of nums2) {
    if (map.has(i) && map.get(i) > 0) {
      ret.push(i);
      const value = map.get(i);
      map.set(i, value - 1);
    }
  }
  return ret;
};

let nums1 = [1, 2, 2, 1];
let nums2 = [2];

console.log(intersect(nums1, nums2));
