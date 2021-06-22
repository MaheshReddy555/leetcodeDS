//compare two versions
//1.7.1 and 1.7.1.2
//return latest version

function compareVersion(version1, version2) {
  const v1 = version1.split(".").map((str) => parseInt(str));
  const v2 = version2.split(".").map((str) => parseInt(str));

  while (v1.length !== v2.length) {
    if (v1.length < v2.length) {
      v1.push(0);
    } else {
      v2.push(0);
    }
  }

  for (let i = 0; i < v1.length; i++) {
    if (v1[i] > v2[i]) return v1;
    if (v1[i] < v2[i]) return v2;
  }

  return 0;
}
