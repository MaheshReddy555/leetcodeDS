/*
Below is a JSON api response. It is the result of a query against a relational database for a list of users.
There are 3 entities in this database: users, addresses, and countries.
Each row in the result set is a User that contains some nested relationships (Address, Country).
Here's an example of one of the elements in this response. The top level object is the User:
{
  id: 'u1',
  first: 'Bob',
  middle: 'Alexander',
  last: 'Smith',
  age: 39,
  address: {
    id: 'a1',
    street: 'University Ave.',
    number: 4000,
    country: {
      id: 'c1',
      name: 'Russia',
      population: 335983120
    }
  }
}
Here is the structure of each entity, and the other entities it relates to.
User
  id: string, unique
  first: string
  middle: string (optional)
  last: string
  age: number
  address: Address (optional)
Address:
  id: string
  street: string
  number: number
  country: Country
Country:
  id: string
  name: string
  population: number
Notice that the api response contains nested entities. For example, the Address contains a 'country' field which points to the entire country entity.
Your task is to take the apiResponse and produce a normalized representation that has no nested entities. This will be an object that looks like:
{
  entity_name: {
    id: Entity
  }
}
The entity in the output should not contain any nested data. Instead, it contains foreign keys such as address_id, country_id.
Here is an example of what the output should look like:
{
  users: {
    u1: {
      id: 'u1',
      first: 'Bob',
      middle: 'Alexander',
      last: 'Smith',
      age: 39,
      address_id: 'a1'
    },
    u2: {...},
    u3: {...},
  },
  addresses: {
    a1: {
      id: 'a1',
      street: 'Santa Ana Ave',
      number: 1000,
      country_id: 'c3'
    },
    a2: {...},
    a3: {...}
  },
  countries: {
    c1: {
      id: 'c1',
      name: 'Mexico',
      population: 39747225
    },
    c2: {...},
    c3: {...}
  }
}
*/

var apiResponse = [
  {
    id: "u1",
    first: "Bob",
    middle: "Edward",
    last: "Stevenson",
    age: 38,
    address: {
      id: "a3",
      street: "Redwood Street",
      number: 101,
      country: { id: "c3", name: "Japan", population: 34239818 },
    },
  },
  {
    id: "u2",
    first: "Carol",
    middle: "Lee",
    last: "Smith",
    age: 66,
    address: {
      id: "a1",
      street: "University Ave.",
      number: 4000,
      country: { id: "c1", name: "Russia", population: 335983120 },
    },
  },
  {
    id: "u3",
    first: "Eddy",
    last: "Davidson",
    age: 18,
    address: {
      id: "a5",
      street: "Wolworth Blvd.",
      number: 9800,
      country: { id: "c5", name: "Kenya", population: 7729291 },
    },
  },
  { id: "u4", first: "Tammy", middle: "Julia", last: "Babington", age: 83 },
  {
    id: "u5",
    first: "Lacy",
    middle: "Katie",
    last: "Badwani",
    age: 48,
    address: {
      id: "a9",
      street: "Santa Ana",
      number: 1000,
      country: { id: "c1", name: "Russia", population: 335983120 },
    },
  },
  {
    id: "u6",
    first: "Dan",
    middle: "Stevie",
    last: "Towns",
    age: 38,
    address: {
      id: "a3",
      street: "Redwood Street",
      number: 101,
      country: { id: "c3", name: "Japan", population: 34239818 },
    },
  },
  { id: "u7", first: "Bob", middle: "Tu", last: "Pianoli", age: 38 },
  {
    id: "u8",
    first: "Scott",
    middle: "Alexander",
    last: "Leonitus",
    age: 35,
    address: {
      id: "a2",
      street: "Smith Lane",
      number: 10,
      country: { id: "c1", name: "Russia", population: 335983120 },
    },
  },
  {
    id: "u9",
    first: "Jack",
    middle: "Scott",
    last: "Everett",
    age: 38,
    address: {
      id: "a4",
      street: "Johnson Ave",
      number: 900,
      country: { id: "c5", name: "Kenya", population: 7729291 },
    },
  },
  {
    id: "u10",
    first: "Lexie",
    middle: "Lou",
    last: "Daly",
    age: 45,
    address: {
      id: "a3",
      street: "Redwood Street",
      number: 101,
      country: { id: "c3", name: "Japan", population: 34239818 },
    },
  },
  {
    id: "u11",
    first: "Jessy",
    last: "Lugi",
    age: 18,
    address: {
      id: "a5",
      street: "Wolworth Blvd.",
      number: 9800,
      country: { id: "c5", name: "Kenya", population: 7729291 },
    },
  },
  {
    id: "u12",
    first: "Kiara",
    middle: "Julia",
    last: "Looker",
    age: 15,
    address: {
      id: "a8",
      street: "Washington",
      number: 245,
      country: { id: "c1", name: "Russia", population: 335983120 },
    },
  },
  {
    id: "u13",
    first: "Terry",
    middle: "Bob",
    last: "Brides",
    age: 82,
    address: {
      id: "a7",
      street: "Hampshire",
      number: 39,
      country: { id: "c5", name: "Kenya", population: 7729291 },
    },
  },
  {
    id: "u14",
    first: "Tom",
    middle: "Joe",
    last: "Lawton",
    age: 38,
    address: {
      id: "a9",
      street: "Santa Ana",
      number: 1000,
      country: { id: "c1", name: "Russia", population: 335983120 },
    },
  },
  {
    id: "u15",
    first: "Rick",
    middle: "Van",
    last: "Snither",
    age: 2,
    address: {
      id: "a5",
      street: "Wolworth Blvd.",
      number: 9800,
      country: { id: "c5", name: "Kenya", population: 7729291 },
    },
  },
  {
    id: "u16",
    first: "Scott",
    middle: "James",
    last: "Edwards",
    age: 35,
    address: {
      id: "a9",
      street: "Santa Ana",
      number: 1000,
      country: { id: "c1", name: "Russia", population: 335983120 },
    },
  },
];

function parsedata(apiResponse) {
  let out = {
    users: {},
    address: {},
    countries: {},
  };

  //for users
  for (let i = 0; i < apiResponse.length; i++) {
    let userinfo = apiResponse[i];
    let userid = userinfo["id"];
    let addressid;
    if (userinfo && userinfo.address) {
      addressid = userinfo.address.id;
    } else {
      addressid = null;
    }

    let countryid;
    if (userinfo && userinfo.address && userinfo.address.country) {
      countryid = userinfo.address.country.id;
    } else {
      countryid = null;
    }
    out["users"][userid] = {};
    let courrentObj = out["users"][userid];
    let mainobjkeys = Object.keys(apiResponse[i]);
    let mainobjvalues = Object.values(apiResponse[i]);
    for (let j = 0; j < mainobjkeys.length; j++) {
      if (mainobjkeys[j] === "address") {
        courrentObj["address_id"] = addressid;
      } else {
        courrentObj[mainobjkeys[j]] = mainobjvalues[j];
      }
    }

    if (apiResponse[i].address) {
      out["address"][addressid] = {};
      courrentObj = out["address"][addressid];
      mainobjvalues = Object.values(apiResponse[i].address);
      mainobjkeys = Object.keys(apiResponse[i].address);

      for (let j = 0; j < mainobjkeys.length; j++) {
        if (mainobjkeys[j] === "country") {
          courrentObj["country_id"] = countryid;
        } else {
          courrentObj[mainobjkeys[j]] = mainobjvalues[j];
        }
      }
    }

    if (apiResponse[i].address && apiResponse[i].address.country) {
      out["countries"][countryid] = {};
      courrentObj = out["countries"][countryid];
      mainobjvalues = Object.values(apiResponse[i].address.country);
      mainobjkeys = Object.keys(apiResponse[i].address.country);

      for (let j = 0; j < mainobjkeys.length; j++) {
        courrentObj[mainobjkeys[j]] = mainobjvalues[j];
      }
    }
  }

  console.log("output is", out);
  return out;
}

parsedata(apiResponse);

console.log("Hello World!");
