function anagram(first, second) {
  if (first.length !== second.length) return false;
  let strObj = {};

  for (let i = 0; i < first.length; i++) {
    if (strObj[first[i]]) {
      strObj[first[i]] += 1;
    } else {
      strObj[first[i]] = 1;
    }
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!strObj[letter]) {
      return false;
    } else {
      strObj[letter] -= 1;
    }
  }

  return true;
}

console.log(anagram("cat", "bat"));
