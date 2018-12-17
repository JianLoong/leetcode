/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
  let set = new Set();
  let result = 0;
  nums.forEach(a => {
    if (!set.has(a)) set.add(a);
    else result = a;
  });

  return result;
};

/**
 * This solution only works for this specific question due to requirements.
 *
 * @param {number[]} nums
 */
const findDuplicateWithSlowAndFast = nums => {
  let tortoise = nums[0];
  let hare = nums[0];
  do {
    console.log(tortoise, hare);
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise != hare);

  let ptr1 = nums[0];
  let ptr2 = tortoise;
  while (ptr1 != ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
};

const input = [3, 1, 3, 4, 2];

console.log(findDuplicate(input));

console.log(findDuplicateWithSlowAndFast(input));
