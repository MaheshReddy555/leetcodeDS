var maxSubArray = function (arr) {
  let currentSum = arr[0];
  let sumSoFar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    sumSoFar = Math.max(currentSum, sumSoFar);
  }
  console.log("final ans", sumSoFar);
  return sumSoFar;
};
// maxSubArray([1, 2, 5, 2, 8, 1, 5]);
maxSubArray([1, -3, 2, 1, -1]);
