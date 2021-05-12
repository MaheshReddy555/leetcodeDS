var mock = {
  employees: [
    {
      id: 1,
      name: "alice",
      fulltime: true,
      reports: [
        {
          id: 2,
          name: "bob",
          fulltime: false,
          dele: "deles",
        },
      ],
      subordinates: [
        {
          id: 3,
          name: "jennifer",
          fulltime: false,
        },
      ],
    },
  ],
  schema: {
    employee: [
      {
        name: "id",
        required: true,
        type: "number",
      },
      {
        name: "name",
        required: true,
        type: "string",
      },
      {
        name: "fulltime",
        required: true,
        type: "boolean",
      },
      {
        name: "reports",
        required: false,
        type: "array:employee",
      },
      {
        name: "subordinates",
        required: false,
        type: "array:employee",
      },
    ],
  },
};

function test(employeeData, schema) {
  let error = false;
  let ovres;
  let requiredSchemaFields = [];
  schema.forEach((field) => {
    if (field.required) {
      requiredSchemaFields.push(field.name);
    }
  });

  let allSchemaFields = [];
  schema.forEach((field) => {
    allSchemaFields.push(field.name);
  });
  let inputFields = Object.keys(employeeData[0]);

  //first check required fields
  requiredSchemaFields.map((field) => {
    if (!inputFields.includes(field)) {
      console.log("this field is required :", field);
      error = true;
      ovres = { error: true, msg: `this field is required ${field}` };
    }
  });
  if (error) return ovres;

  //check extra fields
  inputFields.map((field) => {
    if (!allSchemaFields.includes(field)) {
      console.log("extra field has been sent :", field);
      error = true;
      ovres = { error: true, msg: `extra field has been sent: ${field}` };
    }
  });
  if (error) return ovres;

  //check fulltime boolean type
  if (typeof employeeData[0].fulltime !== schema[2]["type"]) {
    console.log(
      "mismatch type for fulltime :",
      typeof employeeData[0].fulltime
    );
    error = true;

    ovres = { error: true, msg: "mismatch type for fulltime :" };
  }
  if (error) return ovres;

  //check reports type and do recursion
  if (employeeData[0].reports) {
    if (typeof employeeData[0].reports !== "object") {
      console.log(
        "mismatch type for reports :",
        typeof employeeData[0].reports
      );
      error = true;

      ovres = { error: true, msg: "mismatch type for reports :" };
    } else {
      let res = test(employeeData[0].reports, schema);

      if (res.error) {
        error = true;
        ovres = res;
      }
    }
  }
  if (error) return ovres;

  //check subordinates type and do recursion
  if (employeeData[0].subordinates) {
    if (typeof employeeData[0].subordinates !== "object") {
      console.log(
        "mismatch type for subordinates :",
        typeof employeeData[0].subordinates
      );
      error = true;

      ovres = { error: true, msg: "mismatch type for subordinates :" };
    } else {
      let res = test(employeeData[0].subordinates, schema);
      if (res.error) {
        error = true;
        console.log("formt eh ertop for subordinates", res);
        ovres = res;
      }
    }
  }
  if (error) return ovres;

  return { error: false, msg: "everything is perfect" };
}

console.log("final result", test(mock.employees, mock.schema.employee));
