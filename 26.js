/**
 * Two pointer solution. There is a fast and slow.
 * If the fast is the same, increment fast, if it
 * is not the same, save the value, and increment slow.
 * @param {number[]} nums
 * @return {number}
 */
// let removeDuplicates = nums => {
//   if (nums.length == 0) return 0;
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] != nums[i]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i + 1;
// };

let removeDuplicates = nums => {
  let fast = 1;
  let slow = 0;
  let length = nums.length;

  while (fast < length) {
    if (nums[fast] != nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }

  console.log(nums);

  return slow + 1;
};

let arr = [1, 1, 2];

removeDuplicates(arr);
