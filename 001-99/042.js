/**
 * @param {number[]} height
 * @return {number}
 */
// const trap = height => {
//   let result = 0;
//   let size = height.length;
//   for (let i = 1; i < size - 1; i++) {
//     let max_left = 0;
//     let max_right = 0;
//     for (let j = i; j >= 0; j--) {
//       max_left = Math.max(max_left, height[j]);
//     }
//     for (let j = i; j < size; j++) {
//       max_right = Math.max(max_right, height[j]);
//     }
//     result += Math.min(max_left, max_right) - height[i];
//   }
//   return result;
// };

// Dynamic Programming
const trap = height => {
  if (height == null) return 0;
  let ans = 0;
  let size = height.length;
  let left_max = [];
  let right_max = [];
  left_max[0] = height[0];
  for (let i = 1; i < size; i++) {
    left_max[i] = Math.max(height[i], left_max[i - 1]);
  }

  console.log(left_max);
  right_max[size - 1] = height[size - 1];
  for (let i = size - 2; i >= 0; i--) {
    right_max[i] = Math.max(height[i], right_max[i + 1]);
  }
  console.log(right_max);
  for (let i = 1; i < size - 1; i++) {
    ans += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
