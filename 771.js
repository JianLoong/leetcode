// Naive solution using no libraries.
var numJewelsInStones = function(J, S) {
  const j = J.split("");
  const s = S.split("");
  const map = {};
  let count = 0;

  for (let i = 0; i < j.length; i++) {
    map[j[i]] = 0;
  }

  for (let y = 0; y < s.length; y++) {
    if (map[s[y]] != null) count++;
  }

  return count;
};

const J = "z";
const S = "ZZ";

const result = numJewelsInStones(J, S);

console.log(result);
