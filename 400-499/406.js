/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = people => {
  let subArray = [];

  subArray = people.sort((a, b) => {
    return a[0] != b[0] ? b[0] - a[0] : a[1] - b[1];
  });

  console.log(subArray);

  let res = [];
  for (let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]);
    console.log(res);
  }
  return res;
};

const input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];

console.log(reconstructQueue(input));
