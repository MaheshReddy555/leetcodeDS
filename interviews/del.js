let input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

// 5 + 2 + 2(7 - 1) + 3 + 2(6 + 3 * (-13 + 8) + 4);
//12
// 22 + 2*(6-15+4)   19
//22-10
//7+14-2

// function test(arr, count = 1) {
//   console.log(count, arr);
//   let sum = 0;

//   function mock(a1, count) {
//     console.log("internal arr", count, a1);
//     let su = a1.reduce((a, t) => a + t);
//     console.log(count * su, "mock");
//     return count * su;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "object") {
//       sum = sum + mock(arr[i], count + 1);
//       console.log("genera", arr[i], sum);
//     } else {
//       sum = sum + arr[i];
//     }
//   }
//   //   console.log("sum with multi count", intsum * count);
//   //   console.log("final", sum);
//   return sum;
// }

input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

function test(arr, count = 1, sum = 0) {
  console.log("inputs are count=", count, " sum=", sum, "arr = ", arr);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      sum = test(arr[i], count + 1, sum);
    } else {
      console.log("prev sum", sum, "and arr[i]", arr[i]);
      sum = sum + count * arr[i];
      console.log("calcualtes usm ", sum);
    }
  }
  return sum;
}
console.log(test(input));
