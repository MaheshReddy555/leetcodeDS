/**
Below is a list of session details, showing when a user had an active session for some fictional service

Note that sessions for the same user can overlap
*/

const sessionDetails = [
  { user: "u1", startTime: 100, endTime: 200 }, // 0
  { user: "u2", startTime: 200, endTime: 300 }, // 0
  { user: "u1", startTime: 300, endTime: 600 }, // 200
  { user: "u2", startTime: 400, endTime: 600 }, //0
  { user: "u1", startTime: 500, endTime: 700 }, //0 100
  { user: "u1", startTime: 800, endTime: 1000 }, // +100 = 300
];

//                   [400,900]
// [100,200][300,600][500,700][800,1000]
//           [300,900]
//           [300,900]    [800,1000]
//           [300,1000]

/**
 *
 * "u1", 400, 900
 *
 *        400-600 600-900
 *
 * 400 - 900
 * 300 - 600
 *
 *
 * 400 -900
 * 400 -600
 *
 * 300 400 500 600
 *     400 500 600 700 800 900
 *
 *       200
 *
 * 500 600 700
 *     600 700 800 900
 *
 *      100
 *
 * 700 800 900
 *     800 900 1000
 *
 *      100
 *
 *
 */

//
/**
Complete this function to determine the total amount of time that a user had ANY session active at any time within the given query window.

Make sure that overlapping times between sessions are only counted once
*/
function totalLoginTime(user, queryWindowStart, queryWindowEnd) {
  let total = 0;

  for (let i = 0; i < sessionDetails.length; i++) {
    if (
      sessionDetails[i].user === user &&
      sessionDetails[i].endTime > queryWindowStart
    ) {
      let internalstarat = Math.max(
        sessionDetails[i].startTime,
        queryWindowStart
      );

      let ineternalEnd = Math.min(sessionDetails[i].endTime, queryWindowEnd);
      total = total + (ineternalEnd - internalstarat);
      queryWindowStart = sessionDetails[i].endTime;

      // console.log(i, total);
    }
  }
  console.log("final", total);
  return total;
}

console.log(totalLoginTime("u1", 400, 900));
