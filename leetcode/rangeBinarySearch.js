let input = [2, 4, 4, 5, 5, 5, 5, 5, 5, 7, 7, 8, 8, 16, 16];
// let input = [1, 2, 3, 4, 5, 6];

let inputValue = 5;
let output = [];
let firsttime = false;
let count = 0;

// can do in below way but it is very inefficient way
// for (let i = 0; i < input.length; i++) {
//   if (input[i] === inputValue && !firsttime) {
//     firsttime = true;
//     output[0] = i;
//   } else if (input[i] === inputValue && firsttime == true) {
//     output[1] = i;
//   }
// }

const firstBinarySearch = (start, end) => {
  let midValue = Math.floor((start + end) / 2);
  count++;
  // let midValue = Math.floor(start + (end - start) / 2);

  /*for first value always check if the previous value is less or not
    and then 

  */

  if (
    midValue === 0 ||
    (inputValue > input[midValue - 1] && input[midValue] === inputValue)
  ) {
    output[0] = midValue;
  } else if (inputValue > input[midValue]) {
    firstBinarySearch(midValue + 1, end);
  } else {
    firstBinarySearch(start, midValue - 1);
  }
};

const lastValueBinary = (start, end) => {
  count++;
  let midValue = Math.floor((start + end) / 2);
  if (
    midValue === input.length - 1 ||
    (inputValue < input[midValue + 1] && input[midValue] === inputValue)
  ) {
    output[1] = midValue;
  } else if (inputValue < input[midValue]) {
    lastValueBinary(start, midValue - 1);
  } else {
    lastValueBinary(midValue + 1, end);
  }
};

firstBinarySearch(0, input.length - 1);
lastValueBinary(0, input.length - 1);

console.log(output, count);
