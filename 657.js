/**
 * @param {string} moves
 * @return {boolean}
 */

// Naive solution
var judgeCircle = function(moves) {
  const upMag = { x: 1, y: 0 };
  const downMag = { x: -1, y: 0 };
  const rightMag = { x: 0, y: 1 };
  const leftMag = { x: 0, y: -1 };

  const result = [];

  for (let move of moves) {
    if (move === "U") result.push(upMag);
    if (move === "D") result.push(downMag);
    if (move === "R") result.push(rightMag);
    if (move === "L") result.push(leftMag);
  }

  console.log(result);
  let x = 0;
  let y = 0;
  for (let r of result) {
    x = r.x + x;
    y = r.y + y;
  }

  //const sum = x + y;
  return x == 0 && y == 0 ? true : false;
};

// Better solution
var judge = moves => {
  let result = { x: 0, y: 0 };
  for (let move of moves) {
    if (move === "U") result.x += 1;
    if (move === "D") result.x -= 1;
    if (move === "R") result.y += 1;
    if (move === "L") result.y -= 1;
  }

  return result.x == 0 && result.y == 0 ? true : false;
};

// Even better solution because the number of left must be the right
// and the number of ups must be the same with downs.
// Split performance is shockingly good.
var better = moves => {
  const UNum = moves.split("U").length - 1;
  const DNum = moves.split("D").length - 1;
  const LNum = moves.split("L").length - 1;
  const RNum = moves.split("R").length - 1;
  return UNum === DNum && LNum === RNum;
};

const judgeCircle = moves => {
  let uCount = 0;
  let dCount = 0;
  let lCount = 0;
  let rCount = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        uCount++;
        break;
      case "D":
        dCount++;
        break;
      case "L":
        lCount++;
        break;
      case "R":
        rCount++;
        break;
    }
  }
  return uCount === dCount && lCount === rCount;
};

const test = "UUD";

console.log(better(test));
