function uniqueval(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    if (obj[String(arr[i])]) {
      obj[String(arr[i])] += 1;
    } else {
      obj[String(arr[i])] = 1;
    }
  }
  console.log("dkfjhdkj", Object.keys(obj).length);
  return Object.keys(obj).length;
}

function anotherMethod(arr) {
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j + 1]) {
      console.log(i, j + 1);
      i++;
      arr[i] = arr[j + 1];
    }
  }
  console.log("object", i);
  return i;
}

anotherMethod([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //7
[1, 2, 3, 7, 4, 4, 4, 7, 12, 12, 13][(1, 2, 3, 7, 12, 13, 4, 7, 4, 12, 4)];
