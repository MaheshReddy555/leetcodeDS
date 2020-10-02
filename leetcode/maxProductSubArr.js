/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function (arr) {
//   let count;
//   let max = -Infinity;
//   product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product = product * arr[i];
//     min = Math.min(product, max);

//     max = Math.max(product, max);

//     console.log("product", product);
//   }
//   console.log(max);
//   return max;
// };

//not working
// var maxProduct = function (arr) {
//   let currentSum = arr[0];
//   let productSofar = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum * arr[i]);
//     productSofar = Math.max(currentSum, productSofar);
//   }
//   console.log("final ans", productSofar);
//   return productSofar;
// };

// maxProduct([2, 3, -2, 4]); //output is 6
// maxProduct([-2, 0, -1]); //output is 0
// maxProduct([0, 2]); //output is 2
// maxProduct([-2, 3, -4]); //output is 24

var maxProduct = function (nums) {
  let max = -Infinity;
  let currentMax = 1;
  let currentMin = 1;

  for (let i = 0; i < nums.length; i++) {
    let prevMax = currentMax;
    console.log(
      "initial vlaues are",
      nums[i],
      prevMax * nums[i],
      currentMin * nums[i]
    );
    currentMax = Math.max(nums[i], prevMax * nums[i], currentMin * nums[i]);
    console.log(
      "min values copare values rare",
      nums[i],
      prevMax * nums[i],
      currentMin * nums[i]
    );
    currentMin = Math.min(nums[i], prevMax * nums[i], currentMin * nums[i]);
    console.log("current min----->", currentMin);
    // console.log(currentMax, currentMin);
    max = Math.max(currentMax, max);
  }

  return max;
};

maxProduct([2, 3, -2, 4]);
