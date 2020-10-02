function mergeSort(numarray) {
  if (numarray.length <= 1) return numarray;
  let midin = Math.floor(numarray.length / 2);
  console.log(Array.from(numarray, (x) => [x]));

  let left = mergeSort(numarray.slice(0, midin));
  let right = mergeSort(numarray.slice(midin));

  return merge(left, right);
}

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

mergeSort([10, 24, 76, 73]);
