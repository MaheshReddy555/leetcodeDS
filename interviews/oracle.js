// let a = [[1, 2, 3], [4, 5], [7, 8, 9], [11, 13, 15, 16], [22]];

// let a = [[4, 5], [1, 2, 3], [7, 8, 9], [], [22]];
let a = [
  [1, 2, 3],
  [4, 5],
  [7, 8, 9],
];

//9 5 3
//8 4 2
//7 1

//this works well
// function testx(a) {
//   let str = " ";
//   for (let i = a.length - 1; i >= 0; i--) {
//     let len = a[i].length;
//     if (!a[i][len - 1]) continue;
//     str = str + a[i][len - 1] + " ";
//     a[i] = a[i].slice(0, len - 1);
//   }
//   console.log(str);
//   let valid = false;
//   a.map((x) => {
//     if (x.length) {
//       valid = true;
//       return;
//     }
//   });
//   if (!valid) return;

//   testx(a);
// }

// function test(a, count = 0) {
//   if (count === a.length) return;
//   let str = " ";
//   for (let i = a.length - 1; i >= 0; i--) {
//     let len = a[i].length;
//     if (!a[i][len - 1]) continue;
//     str = str + a[i][len - 1] + " ";
//     a[i] = a[i].slice(0, len - 1);
//   }
//   console.log(str);
//   count = count + 1;
//   let valid = false;
//   //   console.log("spliced arr", a);
//   a.map((x) => {
//     if (x.length) {
//       valid = true;
//       return;
//     }
//   });

//   if (valid) test(a, count);
// }

function testx(a) {
  let str = " ";
  for (let i = a.length - 1; i >= 0; i--) {
    let len = a[i].length;
    if (!a[i][len - 1]) continue;
    str = str + a[i][len - 1] + " ";

    if (i === 0) i = a.length - 1;
    a[i] = a[i].slice(0, len - 1);
  }
  console.log(str);
  let valid = false;
  a.map((x) => {
    if (x.length) {
      valid = true;
      return;
    }
  });
  if (!valid) return;

  testx(a);
}

testx(a);
