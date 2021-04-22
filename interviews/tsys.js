// wwwwaaadexxxxxx;
let str = "wwwwaaadexxxxxx";

//w4a3dex6
function test(str) {
  console.log("input is", str);
  let strs = "";
  let countsofar = 0;
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count = count + 1;
      }
    }
    strs = strs + str[i] + count;
    countsofar = countsofar + count;
    i = countsofar;
    // console.log("########################", strs, count, i);
  }
  console.log(strs);
  return strs;
}

test(str);
