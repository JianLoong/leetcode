/**
 * Set theory, symmetric intersection method.
 *
 * https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const set = new Set(nums);
  let arr = [...set];
  let comp = [];
  for (let i = 1; i <= nums.length; i++) {
    comp.push(i);
  }

  let intersection = comp
    .filter(x => !arr.includes(x))
    .concat(arr.filter(x => !comp.includes(x)));
  return intersection;
};

const findDisappearedNumbersTwo = nums => {
  const set = new Set();
  for (let i = 1; i <= nums.length; i++) {
    set.add(i);
  }

  for (let i = 1; i <= nums.length; i++) {
    set.delete(nums[i - 1]);
  }
  return [...set];
};

const input = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDisappearedNumbersTwo(input));
