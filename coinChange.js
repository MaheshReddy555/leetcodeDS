const res = [];
function coinChange(arr, amount) {
  let count = 0;
  // add whatever parameters you deem necessary - good luck!
  let som = [0, 0];
  while (som[0] !== undefined) {
    som = calulateSom(arr, amount);
    console.log("***********", som);
    console.log(som);
    debugger;
    if (som[0]) {
      amount = amount - som[0];
      count = count + som[0];
    } else {
      count = count + som[1];
    }

    if (som[1]) return count;
  }
}

function calulateSom(arr, amount) {
  let min = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    console.log(i);
    let actualMod = amount % arr[i];
    let modval = Math.floor(actualMod);
    if (actualMod === 0) {
      console.log("object", amount, arr[i]);
      return [undefined, amount / arr[i]];
    }
    min = Math.min(min, modval);
  }
  return [min, undefined];
}

const denominations = [1, 5, 10, 25];
console.log("final ans", coinChange(denominations, 11));
