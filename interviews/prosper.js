/**
 * Return the "centered" average of an array of ints, which we'll say is the
 * mean average of the values, except ignoring the largest and smallest values
 * in the array. If there are multiple copies of the smallest value, ignore
 * just one copy, and likewise for the largest value. Use int division to
 * produce the final average. You may assume that the array is length 3 or more.
 *
 * centeredAverage([1, 2, 3, 4, 100]) → 3
 * centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5
 * centeredAverage([-10, -4, -2, -4, -2, 0]) → -3
 *
 * @param {int[]} nums
 * @return int
 */
var centeredAverage = function (nums) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
    sum = sum + nums[i];
  }

  let totalLength = nums.length - 2;
  let res = Math.floor((sum - max - min) / totalLength);
  return res;
};

var testCenteredAverage = function () {
  console.log(
    "centeredAverage([1, 2, 3, 4, 100]) → " + centeredAverage([1, 2, 3, 4, 100])
  );
  console.log(
    "centeredAverage([1, 1, 5, 5, 10, 8, 7]) → " +
      centeredAverage([1, 1, 5, 5, 10, 8, 7])
  );
  console.log(
    "centeredAverage([-10, -4, -2, -4, -2, 0]) → " +
      centeredAverage([-10, -4, -2, -4, -2, 0])
  );
};

//another problem

/*
  Create a fileUploader function that takes a list of file objects,
  uploads the contents of the files and returns a list of the
  names of the uploaded files in upload-order.
  
  Note: The upload function is provided
*/

const data = [
  {
    name: "test1.txt",
    content: "abasdadsjadas",
  },
  {
    name: "test2.txt",
    content: "asldjknaisdha",
  },
  {
    name: "test3.txt",
    content: "hifhdsfyads",
  },
  {
    name: "test4.txt",
    content: "kjhakjhfjhagdsjhagdkaj",
  },
  {
    name: "test5.txt",
    content: "kjasdhbasd",
  },
];

const upload = (content, callback) => {
  // randomly fire callback
  setTimeout(callback, Math.random() * 1000);
};
function uploadAsync(content, callback) {
  // randomly fire callback
  return new Promise(async (resolve, reject) => {
    try {
      let res = await upload(content, callback);
      resolve(res);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

function printText(file) {
  return file.name;
}

const fileUploader = (files) => {
  let allfilePromises = [];
  for (let i = 0; i < files.length; i++) {
    let newPromis = new uploadAsync(files[i], printText(files[i]));
    allfilePromises.push(newPromis);
  }
  return Promise.all(allfilePromises).then((result) => {
    return result;
  });
};

fileUploader(data).then((files) => {
  console.log(files); // ['test1.txt', 'test2.txt', ...,'test5.txt'];
});

//another problem

// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// Your last Plain Text code is saved below:

//call api 3 times and print each api number;

// function apicall(apiNum){
//   return new Promise((resolve,reject)=>{
//     try{
//       setTimeout(()=>{
//         console.log(apiNum);
//         if(i == 2 ) {
//           reject();
//         } else
//           resolve(apiNum);
//         },3000)
//     }catch(err){
//       reject(err)
//     }
//   })

// }

// function main(){
//   let promisesArr = [];
//   for(let i=0; i< 3;i++){
//     let pr = new apicall(i+1);
//     promisesArr.push(pr);
//   }
//  try {
//   Promise.all([apicall(1), apicall(2), apicall(3)]).then((result)=>{

//     return true;
//   }).catch(err) {
//     return true
//   };
//  } catch(err) {

//  }

//   Promise.all(promisesArr).then((result)=>{
//     return result;
//   })
// }
// main();

//flatten([1,[2],[3, [[4]]]]); => [1,2,3,4]

function flatten(arr, out = []) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      flatten(arr[i], out);
    } else {
      out.push(arr[i]);
    }
  }
  return out;
}

console.log(
  flatten([
    1,
    [2],
    [
      3,
      [
        [4, 6],
        [4, [5, 7, [10]]],
      ],
    ],
  ])
);
