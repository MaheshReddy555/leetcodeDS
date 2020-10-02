// scores_list = [["Bobby",87],["Charles",100],["Eric","64"],["Charles","22"]]

function avg(list) {
  let out = {};
  for (let i = 0; i < list.length; i++) {
    let innerArr = list[i];
    let key = innerArr[0];
    if (!out[key]) {
      out[key] = { val: 0, length: 0 };
    }
    out[key].val = out[key].val + innerArr[1];
    out[key].length = out[key].length + 1;
  }

  let keys = Object.keys(out);
  let values = Object.values(out);
  let max = 0;
  for (let i = 0; i < keys.length; i++) {
    console.log("values are", values[i]["val"]);
    max = Math.max(max, values[i]["val"] / values[i]["length"]);
  }

  console.log("this is out", out);
  console.log("max is t", max);
}

avg([
  ["Bobby", 87],
  ["Charles", 100],
  ["Eric", 64],
  ["Charles", 22],
]);

let val = { Bobby: ["87"], Charles: ["100", "22"], Eric: ["64"] };
