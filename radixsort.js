function radixSort(nums) {
  let highestNumlen = findHighestNumLeng(nums);

  for (let j = 0; j < highestNumlen; j++) {
    let arrr = Array.from({ length: 10 }, () => []);
    // let arrr = [[], [], [], [], [], [], [], [], [], []];
    for (let k = 0; k < nums.length; k++) {
      let dig = digs(nums[k], j);
      arrr[dig].push(nums[k]);
    }

    nums = [].concat(...arrr);
  }
  console.log(nums);
  return nums;
}

function findHighestNumLeng(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, String(nums[i]).length);
  }
  return max;
}

function digs(num, index) {
  let lastindex = String(num).length - 1;
  let parind = lastindex - index;
  return String(num)[parind] ? String(num)[parind] : 0;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
