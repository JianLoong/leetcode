/**
 * Naive solution. Time limit exceeded.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  let result = [];
  // nums[1] + nums[2] + nums[3] --> 0
  // nums[0] + nums[2] + nums[3] --> 1
  // nums[0] + nums[1] + nums[2] --> 3
  for (let i = 0; i < nums.length; i++) {
    let product = [];
    for (let j = 0; j < nums.length; j++) {
      if (i != j) product.push(nums[j]);
    }
    result.push(product.reduce((a, b) => a * b));
  }
  return result;
};

const productExceptSelfTwo = nums => {
  let N = nums.length;
  let productBelow = [];
  let a = nums;
  let p = 1;
  for (let i = 0; i < N; ++i) {
    productBelow[i] = p;
    p *= a[i];
  }

  let productAbove = [];
  p = 1;
  for (let i = N - 1; i >= 0; --i) {
    productAbove[i] = p;
    p *= a[i];
  }

  let products = [];
  for (let i = 0; i < N; ++i) {
    products[i] = productBelow[i] * productAbove[i];
  }

  console.log("Product Below", productBelow);
  console.log("Product Above", productAbove);

  return products;
};

/**
 * https://stackoverflow.com/questions/2680548/given-an-array-of-numbers-return-array-of-products-of-all-other-numbers-no-div
 */
const productExeceptSelfThree = nums => {
  let a = nums;
  let products = [];
  // Get the products below the current index
  p = 1;
  for (let i = 0; i < N; ++i) {
    products[i] = p;
    p *= a[i];
  }

  // Get the products above the curent index
  p = 1;
  for (let i = N - 1; i >= 0; --i) {
    products[i] *= p;
    p *= a[i];
  }
  return products;
};

/**
 * Method using division.
 *
 * @param {number[]} nums
 */
const productExceptSelfFour = nums => {
  let N = nums.length;
  let a = nums;
  let p = 1;
  for (let i = 0; i < N; ++i) {
    if (a[i] != 0) p *= a[i];
  }

  console.log(p);

  let products = [];
  for (let i = 0; i < N; ++i) {
    if (a[i] != 0) products[i] = p / a[i];
    else products[i] = p;
  }

  return products;
};

const input = [1, 2, 3, 0, 4];

console.log(productExceptSelfFour(input));
