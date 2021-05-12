console.log(currentSum);
var maxSubArray = function (arr) {
  let currentSum = arr[0];
  let sumSoFar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    console.log(currentSum);
    console.log("first", arr[i], currentSum + arr[i]);
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    console.log("second", currentSum);
    sumSoFar = Math.max(currentSum, sumSoFar);
  }
  console.log("final ans", sumSoFar);
  return sumSoFar;
};
// maxSubArray([1, 2, 5, 2, 8, 1, 5]);
maxSubArray([1, -3, 2, 1, -1]);
