// Naive solution
// var threeSum = function(nums) {
//   const result = [];
//   const length = nums.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       for (let k = j + 1; k < length; k++) {
//         const sum = nums[i] + nums[j] + nums[k];
//         const solution = [];
//         if (sum === 0) {
//           solution.push(nums[i], nums[j], nums[k]);
//           solution.sort();
//           result.push(solution);
//         }
//       }
//     }
//   }

//   result.sort();

//   return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
// };

var threeSum = nums => {
  let map = {};
  let target = 0;

  console.log(nums);
  for (let value = 0; value < nums.length; value++) {
    //let complement = target - nums[value];
    // if (map[complement] != null) {
    //   return [map[complement], value];
    // }

    if (map[nums[value]] != null) {
      map[nums[value]] = map[nums[value]] + 1;
    } else {
      map[nums[value]] = 1;
    }
  }

  console.log(map);
};
// Sorting solution

nums = [-1, 0, 1, 2, -1, -4, 10];

const result = threeSum(nums);
console.log(result);
