let input = [
  "/home/anti-depressants/xanax",
  "/drugs/topical",
  "/home/heart/lipitor",
  "/home/heart/atorvastatin",
  "/drugs/routes/oral/tablets",
  "/drugs/routes/nasal/flonase",
  "/home/heart/lipitor",
  "/home/blood/sweat/tears",
  "/drugs/nasal/flonase",

  "/home/heart/atorvastatin/pill",
];

let output = [
  ["home", ["anti-depressants", ["xnax"]]],
  ["drugs", ["topical"]],
];

function test(routes) {
  let out = [];

  function parseit(arr) {
    out.push([splitpath.shift(), splitpath]);
  }

  for (let i = 0; i < routes.length; i++) {
    let splitpath = routes.split("/");
    let parent;
    let children;
    let index = 0;

    while (splitpath.length) {
      parent = splitpath.shif();
      children = splitpath;

      out[index] = [parent, children];

      index = out.length - 1;
    }
  }
}

test(input);
