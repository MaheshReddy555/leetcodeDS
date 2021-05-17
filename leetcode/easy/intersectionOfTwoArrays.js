/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Given two arrays, write a function to compute their intersection.
 * Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
 *
 */

//this seems easy
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  console.log(set1, set2);
  let out = [];
  if (set1.size < set2.size) {
    for (let item of set1) {
      if (set2.has(item)) {
        out.push(item);
      }
    }
  } else {
    for (let item of set2) {
      if (set1.has(item)) {
        out.push(item);
      }
    }
  }
  return out;
};
var intersect = function (nums1, nums2) {
  const intersect = [];
  const hashMap = {};

  //fill the hashMap with the first array
  for (let i = 0; i < nums1.length; i++) {
    if (hashMap[nums1[i]]) {
      hashMap[nums1[i]] += 1;
    } else {
      hashMap[nums1[i]] = 1;
    }
  }
  console.log(hashMap);

  for (let i = 0; i < nums2.length; i++) {
    if (hashMap[nums2[i]] > 0) {
      intersect.push(nums2[i]);
      hashMap[nums2[i]] -= 1;
      console.log("intersect is", intersect);
      console.log("adjustd hashm is", hashMap);
    }
  }
  return intersect;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
