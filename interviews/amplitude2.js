/* Implement the validate function below.
 *
 * Remember, there are three kinds of validation errors:
 *
 * {ok: false, message: `${name} is required`}
 * {ok: false, message: `type ${type} expected for ${name}`}
 * {ok: false, message: `unexpected property ${name}`}
 *
 * There four possible `types` a property can have:
 * string, number, boolean, and array:employee
 */

const acmeCorp = [
  {
    id: 1,
    name: "alice",
    title: "ceo",
    salary: 1,
    age: 3,
    reports: [
      {
        id: 2,
        name: "bob",
        title: "cfo",
        salary: 1,
        reports: [
          {
            id: 3,
            name: "xan",
            title: "controller",
            salary: 100,
            reports: [],
          },
        ],
      },
    ],
  },
];

const acmeSchema = {
  employee: [
    { name: "id", required: true, type: "number" },
    { name: "name", required: true, type: "string" },
    { name: "title", required: true, type: "string" },
    { name: "salary", required: true, type: "number" },
    { name: "age", required: false, type: "number" },
    { name: "reports", required: false, type: "array:employee" },
  ],
};

const xan = acmeCorp[0].reports[0].reports[0];
const alice = acmeCorp[0];
xan.reports.push(alice);

function validate(employees, schema, visited = {}) {
  // Complete this function!
  // console.log("input is",employees, schema)

  for (let i = 0; i < employees.length; i++) {
    let emplKeys = Object.keys(employees[i]);
    let resp;
    emplKeys.forEach((key) => {
      console.log("check visited", key, visited, visited[employees[i][key]]);
      if (visited[employees[i][key]]) {
        console.log(visited);
        resp = {
          ok: false,
          message: `employee already visited : ${employees[i][key]}`,
        };
      }
    });

    // if(Object.has!resp.ok) resp

    // if(visited.hasOwnProperty(employees[i].name)){
    //     return {"ok": false, "message": `employee already visited : ${employees[i].name}`}
    // }
    let employee = employees[i];
    let schemarequiredkeys = [];
    for (let schek = 0; schek < schema.employee.length; schek++) {
      if (schema.employee[schek].required) {
        schemarequiredkeys.push(schema.employee[schek].name);
      }
    }
    // console.log(schemarequiredkeys)
    let inputEmployeekeys = Object.keys(employee);
    // console.log(inputEmployeekeys)

    let schemaKeys = [];

    //first check if all keys are there are not
    for (let i = 0; i < schema.employee.length; i++) {
      let s = schema.employee[i];

      schemaKeys.push(schema.employee[i].name);
      //if schema key is not in empluyeee key
      // console.log("schenmae name", s.name, s.required, !inputEmployeekeys.includes(s.name));
      if (s.required && !inputEmployeekeys.includes(s.name)) {
        return { ok: false, message: `${s.name} is required` };
      }

      //if(s.required && !employee[s.name]) return {"ok": false, "message": `${s.name} is required`};
      // console.log("typeo is ", s.name, "type is ", typeof employee[s.name]);

      if (
        s.name === "reports" &&
        employee[s.name] &&
        typeof employee[s.name] !== "object"
      )
        return { ok: false, message: `type ${s.type} expected for ${s.name}` };

      if (
        s.name === "subordinates" &&
        employee[s.name] &&
        typeof employee[s.name] !== "object"
      )
        return { ok: false, message: `type ${s.type} expected for ${s.name}` };
      if (s.required && s.name !== "reports") {
        if (typeof employee[s.name] !== s.type)
          return {
            ok: false,
            message: `type ${s.type} expected for ${s.name}`,
          };
      }
    }

    for (let k = 0; k < inputEmployeekeys.length; k++) {
      if (!schemaKeys.includes(inputEmployeekeys[k]))
        return {
          ok: false,
          message: `unexpected property ${inputEmployeekeys[k]}`,
        };
    }
    visited[employee["name"]] = true;
    if (employee["reports"]) {
      let res = validate(employee["reports"], schema, visited);
      if (!res.ok) {
        return res;
      }
    }
    if (employee["subordinates"]) {
      let res = validate(employee["subordinates"], schema, visited);
      if (!res.ok) {
        return res;
      }
    }
  }

  return { ok: true, message: "success" };
}

console.log(validate(acmeCorp, acmeSchema));
