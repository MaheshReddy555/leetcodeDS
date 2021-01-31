let val = 1122245;
console.log('input val is', val);
let count = 1;

let updatedstring = '';

const calculate = val => {
  let convertStr = val.toString();
  for (let i = 1; i < convertStr.length; i++) {
    if (convertStr[i] === convertStr[i - 1]) {
      count++;
    } else {
      updatedstring = updatedstring + count + convertStr[i - 1];
      count = 1;
    }
  }
  updatedstring = updatedstring + count + convertStr[convertStr.length - 1];
  console.log(updatedstring);
};

calculate(val);
