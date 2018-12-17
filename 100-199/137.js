/**
 * Solution using set. If there is no value present, it will be added
 * to the set. If it is present, it will be removed. Since every element
 * would exactly appear twice besides 1.
 *
 */
var singleNumber = function(nums) {
  const map = new Map();
  for (let i = 0, length = nums.length; i < length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      const value = map.get(nums[i]);
      map.set(nums[i], value + 1);
    }

    if (map.get(nums[i]) == 3) {
      map.delete(nums[i]);
    }
  }

  console.log(map);

  return map.keys().next().value;
};

const nums = [0, 1, 0, 1, 0, 1, 99];

console.log(singleNumber(nums));
