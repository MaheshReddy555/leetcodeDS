/**
 * 
Dimemr level  5 wawtt       10 watt         20watt   1watt 
5               0             0             0           0
10             2.5              5           10          0.5
15             5               10           20

 * 
 */
let x = [1, [2, [3, 4]]];
let out = [];
function test(x, temp = []) {
  // console.log(x);
  for (let i = 0; i < x.length; i++) {
    console.log(typeof x[i]);
    if (typeof x[i] === "number") {
      temp.push(x[i]);
    } else {
      test(x[i], temp);
    }
  }
  console.log("final", temp);
  return temp;
  // return out;
}
console.log(test(x));
