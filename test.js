let arr1 = [7, 6, 9];
let arr2 = [13, 1, 4];

function test(x, y, d) {
  let out = [];
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      let diff = x[i] - y[j];
      if (diff < 0) diff = diff * -1;
      if (diff > d) {
        out.push(diff);
      }
    }
    console.log(out);
    if (out.length === x.length) {
      count = count + 1;
    } else {
      out = [];
    }
  }
  console.log(count);
}

test(arr1, arr2, 3);
