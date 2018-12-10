/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Dual pivot quick sort solution.
var sortColors = function(nums) {
  sort(nums, 0, nums.length - 1);

  return nums;
};

function sort(a, lo, hi) {
  if (hi <= lo) return;

  // make sure a[lo] <= a[hi]
  if (less(a[hi], a[lo])) exch(a, lo, hi);

  let lt = lo + 1,
    gt = hi - 1;
  let i = lo + 1;
  while (i <= gt) {
    if (less(a[i], a[lo])) exch(a, lt++, i++);
    else if (less(a[hi], a[i])) exch(a, i, gt--);
    else i++;
  }
  exch(a, lo, --lt);
  exch(a, hi, ++gt);

  // recursively sort three subarrays
  sort(a, lo, lt - 1);
  if (less(a[lt], a[gt])) sort(a, lt + 1, gt - 1);
  sort(a, gt + 1, hi);
}

function less(v, w) {
  return v < w;
}

// exchange a[i] and a[j]
function exch(a, i, j) {
  let swap = a[i];
  a[i] = a[j];
  a[j] = swap;
}
