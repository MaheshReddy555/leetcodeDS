let arr = ["R", "G", "B", "V", "O"];
let num = 3;

function permutation(nu, ar) {
  let res = [];
  for (let i = 0; i < ar.length; i++) {
    let out = "";
    for (let j = 0; j < nu; j++) {
      out = out + ar[i] + ar[j];
      console.log(out);
      //   if()
      res.push(out);
    }
  }
  return res;
}

console.log(permutation(num, arr));
