// Naive solution.
// The naive solution merges two arrays and then sorts it.
// Merge is done using the spread operator. This however doesn't
// meet the Big 0 requirements.
let findMedianSortedArrays = function(nums1, nums2) {
  // Using spread to concat 2 arrays.
  let result = [...nums1, ...nums2];
  result = result.sort(function(a, b) {
    return a - b;
  });
  if (result.length % 2 != 0) {
    return result[Math.floor(result.length / 2)];
  } else {
    let lower = Math.floor(result.length / 2) - 1;
    let higher = Math.ceil(result.length / 2);
    return (result[lower] + result[higher]) / 2.0;
  }
};

// Using cursor.
let findMedianSortedArrays = (nums1, nums2) => {
  let size = nums1.length + nums2.length;
  let cursorCount = Math.ceil(size / 2);
  let isEven = size % 2 == 0 ? true : false;
  if (isEven) cursorCount++;
  let result = [];

  while (cursorCount > 0) {
    //cursorCount--;
  }
};
