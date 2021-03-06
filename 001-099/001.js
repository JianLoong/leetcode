// Method 1 (Using double for loop)
let twoSum = function(nums, target) {
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }
  return "Not found";
};

// Method 2 (Same as method one but with arrow function 116 ms)
let twoSum = (nums, target) => {
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }
  return "Not found";
};

// The map idea is that you keep the key is the "value" and the value
// is the index. So [1,2] will be [ 1 -> 0 , 2 -> 1]
// Method 3 Using one associate array object (56ms)
let twoSum = (nums, target) => {
  let map = {};
  for (let value = 0; value < nums.length; value++) {
    const complement = target - nums[value];
    if (map[complement] != null) {
      return [map[complement], value];
    }
    map[nums[value]] = value;
  }

  return "Not found";
};

/**
 *
 * Method 4 Using JavaScript Map ES6(60ms)
 * This method uses map, however maps are only available in ES6.
 * This is more clear in comparison using associate objects in method 3.
 *
 */
let twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
