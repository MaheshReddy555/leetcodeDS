let platform = {
  android: [1, 0, 0, 0, 0, 0, 1],
  iphone: [0, 1, 0, 0, 0, 1, 0],
  web: [1, 1, 1, 1, 0, 0, 0],
};

let rollups = {
  mobile: ["android", "iphone"],
  all: ["android", "iphone", "web"],
};

// Output ={mobile:4
// All:6
// }

function test() {
  let output = {};
  let allunique = [true, true, true, true, true, true, true];
  let keys = Object.keys(rollups);

  for (let i = 0; i < keys.length; i++) {
    output[keys[i]] = 0;
  }
  console.log(output);
  let platformkeys = Object.keys(platform);
  let platformvalues = Object.values(platform);
  for (let i = 0; i < platformkeys.length; i++) {
    let itemkey = platformkeys[i];
    let itemvalues = platformvalues[i];

    let upkey = findKeyinrollups(itemkey);
    console.log(itemkey, upkey);
    for (let j = 0; j < itemvalues.length; j++) {
      if (itemvalues[j] === 1) {
        //adding regular other than all
        if (upkey !== "all") output[upkey] = output[upkey] + 1;

        //adding all here if it is not added before
        if (allunique[j]) {
          allunique[j] = false;
          output["all"] = output["all"] + 1;
        }
      }
    }
  }

  console.log("final", output);
}

function findKeyinrollups(inputkey) {
  //loop thorugh roolups
  for (let item of Object.entries(rollups)) {
    let itemkey = item[0];
    let itemvalues = item[1];
    for (let i = 0; i < itemvalues.length; i++) {
      if (itemvalues[i] === inputkey) {
        return itemkey;
      }
    }
  }
}
test();
