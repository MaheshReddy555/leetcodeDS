let input = [9, 3, 0, 7, 5, 0, 9];

//output should be [3,4,5,1,2]
let output = [];
let start = 5;

for (let i = start; i < input.length; i++) {
  output.push(input[i]);
  if (i === input.length - 1) {
    for (let j = 0; j < start; j++) {
      output.push(input[j]);
    }
  }
}
console.log(input);

console.log(output);
