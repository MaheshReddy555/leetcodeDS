function productOfArr(arr) {
  let result = [];
  let count;
  for (let i = 0; i < arr.length; i++) {
    count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        count = count * arr[j];
      }

      if (j === arr.length - 1) {
        result.push(count);
      }
    }
  }
  console.log(result);
  return result;
}

function anotherWay(arr) {
  let result = [];
  let maxCount = 1;

  for (let i = 0; i < arr.length; i++) {
    maxCount = maxCount * arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(maxCount / arr[i]);
  }
  console.log(result);
  return result;
}

function withOutDivision(arr, size = 0, result = []) {
  let count = 1;

  if (size < arr.length) {
    for (let i = size; i < arr.length; i++) {
      if (i !== size) {
        count = count * arr[i];
      }
      if (i === arr.length - 1 && size < arr.length) {
        result.push(count);
        size++;
        withOutDivision(arr, size, result);
      }
    }
  }

  //   console.log("reuslt is", result);

  return result;
}

function mainSolution(arr) {
  const len = arr.length;

  let res = [];

  let product = 1; // Our product acc

  // Pass Right, calculate all values to the right of i
  for (let i = 0; i < len; i++) {
    res.push(product);
    product *= arr[i];
  }
  console.log(res);
  product = 1;
  // Pass Left, calculate the product of res[i] and
  // the product of all items to the left of i
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= product;
    product *= arr[i];
  }
  console.log("wowo", res);
}

function pracSolu(arr) {
  let res = [];
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    res.push(product);
    product = arr[i] * product;
  }
  product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    res[i] = product * res[i];
    product = arr[i] * product;
  }

  return res;
}

console.log(pracSolu([1, 2, 3, 4]));
// anotherWay([1, 2, 3, 4, 5]);
