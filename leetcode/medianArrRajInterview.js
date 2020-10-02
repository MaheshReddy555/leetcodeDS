// Median of a given k sub array and push the result

//  [-3 -1 0] 4 5 6 7 8   -1
//   -1 [0 -3 4] 5 6 7 8   0
//   -1 0 [-3 4 5] 6 7 8   4
//    -1 0 -3 [4 5 6] 7 8   5
//    -1 0 -3 4 [5 6 7] 8   6
//    -1 0 -3 4 5 [6 7 8]   7

function median(arr, k) {
  let res = [];
  for (let i = k; i <= arr.length; i++) {
    let slicedArr = arr.slice(i - k, i);
    slicedArr.sort((a, b) => a - b);
    // slicedArr.sort();
    console.log(slicedArr);
    let mid = Math.floor(slicedArr.length / 2);
    res.push(slicedArr[mid]);
  }
  console.log("*****", res);
  return res;
}

median([-1, 0, -3, 4, 5, 6, 7, 8], 3);
