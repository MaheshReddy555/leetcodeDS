/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  console.log(nums1);

  let firstLeng = nums1.length;
  let secondLeng = nums2.length;

  let evnorOd = (firstLeng + secondLeng) % 2;
  let formula;

  if (!evnorOd) {
    formula = (firstLeng + secondLeng + 1) / 2;
    console.log(formula);
  } else {
    console.log("come here");
  }
};

//Median of Two Sorted Arrays
let num1 = [1, 3, 8, 9, 15];
let num2 = [7, 11, 18, 19, 21, 25];

//start for first arr = 0 normal
// end  for first arr= 4 length
// partition x = (4+0)/2  which is start+end/2
// partion y =  (5+6+1)/2 - 2  which is (length1+length2+1)/2 - partition x

//for odd median is max of first half
//for even median is avg of max of first half and min of second half

findMedianSortedArrays(num1, num2);
