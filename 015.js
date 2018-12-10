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

//   return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);

//   //return result;
// };

const threeSum = nums => {
  nums.sort((a, b) => a - b);
  const answer = [];
  for (let indexA = 0; indexA < nums.length - 2; indexA++) {
    const a = nums[indexA];
    if (a > 0) return answer;
    if (a === nums[indexA - 1]) {
      continue;
    }

    let indexB = indexA + 1;
    let indexC = nums.length - 1;

    while (indexB < indexC) {
      const b = nums[indexB];
      const c = nums[indexC];
      if (a + b + c === 0) {
        answer.push([a, b, c]);
      }
      if (a + b + c >= 0) {
        while (nums[indexC - 1] === c) {
          indexC--;
        }
        indexC--;
      }
      if (a + b + c <= 0) {
        while (nums[indexB + 1] === b) {
          indexB++;
        }
        indexB++;
      }
    }
  }
  return answer;
};

console.time("someFunction");

console.timeEnd("someFunction");
