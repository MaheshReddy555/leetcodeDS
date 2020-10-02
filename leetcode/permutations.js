// Given a collection of distinct integers, return all possible permutations.

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

var permute = function (nums) {
  const result = [];

  function permute(arr, options) {
    // console.log(arr, options);
    if (!options.length) result.push(arr);

    for (let i = 0; i < options.length; i++) {
      console.log("Input is ..", i, arr, options);
      console.log(
        "Output is ",
        [...arr, options[i]],
        [...options.slice(0, i), ...options.slice(i + 1)]
      );
      console.log("*************************************");
      permute(
        [...arr, options[i]],
        [...options.slice(0, i), ...options.slice(i + 1)]
      );
    }
  }
  permute([], nums);
  console.log("final result is ", result);
  return result;
};
permute([1, 2, 3]);

//preacticed above solution is also same
function permutation(nums) {
  let finalResult = [];
  function permute(result, options) {
    if (!options.length) return finalResult.push(result);

    for (let i = 0; i < options.length; i++) {
      permute(
        [...result, options[i]],
        [...options.slice(0, i), ...options.slice(i + 1)]
      );
    }
  }
  permute([], nums);
  return finalResult;
}

console.log("woww", permutation([1, 2, 3]));

//1    2,3------>
//1,2    3------>1,2  3
//1,2,3  []
