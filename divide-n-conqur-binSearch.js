function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    let middleElem = arr[midIndex];

    if (middleElem < val) {
      min = midIndex + 1;
    } else if (middleElem > val) {
      max = middleElem - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));

function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!!!
  if (arr.length === 0) return 0;
  if (arr[0] === 0 && arr[arr.length - 1] === 0) return arr.length;
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    let midElement = arr[mid];

    if (midElement > 0) {
      first = mid + 1;
    } else if (midElement === 0 && arr[mid - 1] === 1) {
      return arr.length - mid;
    } else if (midElement === 0) {
      last = mid - 1;
    }
  }
  return 0;
}

countZeroes([1, 1, 1, 1, 0, 0]);
