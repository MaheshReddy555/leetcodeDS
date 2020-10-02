function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

//this will sort the array for particular length and will cemented one single value
function pivot(arr, start, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let startvalue = arr[start];
  let numofvaluestojump = 0;
  for (let i = start + 1; i <= end; i++) {
    if (startvalue > arr[i]) {
      numofvaluestojump++;
      swap(arr, numofvaluestojump, i);
    }
  }

  swap(arr, start, numofvaluestojump);
  return numofvaluestojump;
}

quickSort([4, 6, 9, 1, 2, 5, 3]);
