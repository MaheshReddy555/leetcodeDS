"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");

// Percent is a number from 0 - 100

// <div style={width:50%}>
//     <ProgressBar percent={ percent } />
// </div>

// const ProgressBar = ({ percent }) => {
//     let str = precent+ "%";
//     <div
//         style={width:str, height:10}>

//     </div>
// };

// eventually resolves w/ an array of coupons (array of strings)
// don't modify this function
function getCoupons() {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(["coupon1", "coupon2", "coupon3"]),
      Math.random() * 10
    );
  });
}

// eventually resolves w/ a discount (number)
// don't modify this function
function tryCoupon(coupon = "") {
  return new Promise((resolve) => {
    let discount = 0;
    switch (coupon) {
      case "coupon1":
        discount = 10;
        break;
      case "coupon2":
        discount = 20;
        break;
      case "coupon3":
        discount = 30;
        break;
    }
    setTimeout(() => resolve(discount), Math.random() * 10);
  });
}

// 1. return the highest discount number of any coupon
// modify this function at will!
async function getBestCoupon(updateProgress) {
  // should return 30 (for now :)
  // your code here
  let coupons = await getCoupons();
  let res = 0;
  let discCoupon;
  let allPromis = [];
  let val = updateProgress;
  for (let i = 0; i < coupons.length; i++) {
    let prmis = new tryCoupon(coupons[i]);
    prmis.then(() => {
      let percentvalue = ((i + 1) / coupons.length) * 100;
      console.log("compeletted percentage", percentvalue);
    });
    allPromis.push(prmis);
  }

  return Promise.all(allPromis).then((result) => {
    console.log("promises result", result);
    for (let i = 0; i < result.length; i++) {
      if (result[i] > res) {
        discCoupon = coupons[i];
        res = result[i];
      }
      //set percentage progress bar
    }
    console.log("max discount is", discCoupon);
    return discCoupon;
  });
}

async function main(precent) {
  const updateProgress = (percent) => console.log(percent);
  try {
    let re = await getBestCoupon(updateProgress);
    console.log("in main func", re);
  } catch (err) {
    console.log(err);
  }
}
main(100);
