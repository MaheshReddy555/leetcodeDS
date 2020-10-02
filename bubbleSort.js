//[8, 1, 2, 3, 4, 5, 6, 7]

function bubblesort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      noSwaps = false;
    }
    if (noSwaps) break;
  }
  console.log(arr);
  return arr;
}

bubblesort([8, 1, 2, 3, 4, 5, 6, 7]);
