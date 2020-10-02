//second min element in an array

function SecondMinEleArr(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr[1]);
}

function anotherMethod(arr) {
  let min = Infinity;
  let secMin = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      let prevMin = min;
      min = arr[i];
      secMin = prevMin;
    } else {
      min = arr[i];
    }
  }
  console.log(secMin);
}
anotherMethod([5, 1, 3, 2, 1]);
