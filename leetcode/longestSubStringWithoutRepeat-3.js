//longestsubstring wothout repeating

function longSubStrWithOutReap(str) {
  let visited = {};
  let temp = {};
  let tempLength = 0;
  let end;

  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (!visited[str[i]] && str[i] !== str[i + 1]) {
      visited[str[i]] = true;
      s = s + str[i];
    } else {
      //***** */
      if (s.length > tempLength) {
        tempLength = s.length;

        end = i;
      }
      //******** */
      temp[s] = s.length;
      s = "";
      visited = {};
    }
  }
  console.log(temp);

  console.log("check this one", end, tempLength);

  let outstr = str.slice(end - tempLength, end);
  //(9-7),9
  console.log(outstr);
  //objvalues.sort()[objvalues.length - 1]
  return outstr;
}
// ("ABC");

// console.log("this is finacl value", longSubStrWithOutReap("GEEKSFORGEEKS"));

//just trying below
//   let objvalues = Object.values(temp);
//   let objkeys = Object.keys(temp);
//   let high = 0;
//   let hiind;
//   let highindex = objvalues.forEach((k, index) => {
//     high = Math.max(high, k);
//     return index;
//   });

//   let hihgtvalue = objkeys[highindex];
//   console.log("***********", hihgtvalue);

//longestSubString Without repeating chars
function longestSubStringWithout(str) {
  let output = {};
  let count = 0;
  let maxcount = 0;
  for (let i = 0; i < str.length; i++) {
    if (!output[str[i]]) {
      output[str[i]] = true;
      count++;
    } else {
      //   console.log(i, str[i], str.split(str[i]));
      maxcount = Math.max(count, maxcount);
      count = 1;
      output = {};
      output[str[i]] = true;
    }
  }
  console.log("final answer", maxcount, str);
}
// longestSubStringWithout("pwwkew");
// longestSubStringWithout("au");

var lengthOfLongestSubstring123 = function (str) {
  let i = 0;
  let j = 0;
  let map = {};
  let max = 0;
  while (i < str.length) {
    let char = str[i];
    let repeatChar = str[j];
    console.log("********", char);
    if (map[char]) {
      map[repeatChar] = null;
      console.log("after", map);

      j++;
    } else {
      map[char] = true;
      console.log("unique", map);

      max = Math.max(max, i - j + 1);
      i++;
    }
  }
  return max;
};
// ""abcabcbb""
console.log(lengthOfLongestSubstring123("abbabc"));

// originalAnswer("dvdf");
