// Implement Promise.all([promises]) helper.
// It should return new promise that will be
// fulfilled with values of all passed promises OR rejected with a value of first rejected promise.
// Returned values should be in order of the Promises passed, regardless of completion order.
const waitAllPromises = (promises) => {
  // return Promise.all(promises);

  return new Promise((resolve, reject) => {
    try {
      let res = [];
      let counter = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then((data) => {
            res.push(data);
            counter = counter + 1;
            if (counter === promises.length) resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      }
    } catch (err) {
      reject(err);
    }
  });
};

//Test 1
const promises1 = [
  new Promise((resolve, reject) => setTimeout(() => resolve(123), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 200)),
];

waitAllPromises(promises1)
  .then((res) => console.log("Test1 Success: ", res))
  .catch((err) => console.log("Test1 Error: ", err));
// Test1 Success: [123, 2]

//Test 2
const promises2 = [
  new Promise((resolve, reject) => setTimeout(() => resolve(123), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(2), 200)),
];

waitAllPromises(promises2)
  .then((res) => console.log("Test2 Success: ", res))
  .catch((err) => console.log("Test2 Error: ", err));
// Test2 Error: 2
