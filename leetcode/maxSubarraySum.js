// function maxSubarraySum(arr, num) {
//   let sum = 0;
//   let maxSum = 0;
//   for (let i = 0; i < num; i++) {
//     sum = sum + arr[i];
//   }
//   for (let i = 1; i < arr.length - 2; i++) {
//     sum = arr[i + 2] + sum - arr[i - 1];
//     console.log(sum, i);
//     maxSum = Math.max(maxSum, sum);
//   }
//   console.log(maxSum);
//   return maxSum;
// }

function maxSubarraySum1(arr, num) {
  let maxsum = 0;
  let tempsum = 0;
  for (let i = 0; i < num; i++) {
    maxsum = maxsum + arr[i];
  }

  tempsum = maxsum;

  for (let i = num; i < arr.length; i++) {
    tempsum = tempsum - arr[i - num] + arr[i];
    maxsum = Math.max(tempsum, maxsum);
  }
  console.log(maxsum);
  return maxsum;
}

// maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
maxSubarraySum1([-4, -2, 1, -3], 2);

function maxSubarraySumContiguous(arr) {
  let currentSum = arr[0];
  let sumSoFar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    sumSoFar = Math.max(currentSum, sumSoFar);
  }
  return sumSoFar;
}
// maxSubarraySumContiguous([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
