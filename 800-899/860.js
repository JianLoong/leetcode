/**
 * Naive solution (64ms)
 *
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = bills => {
  let map = {
    5: 0,
    10: 0,
    20: 0
  };

  for (let bill of bills) {
    switch (bill) {
      case 5:
        map[5] = ++map[5];
        break;
      case 10:
        map[10] = ++map[10];
        map[5] = --map[5];
        break;
      case 20:
        map[20] = ++map[20];
        if (map[10] === 0) map[5] = map[5] - 3;
        else {
          map[10] = --map[10];
          map[5] = --map[5];
        }
        break;
    }

    //If anything in the map is negative it is false
    if (map[5] < 0 || map[10] < 0 || map[20] < 0) return false;
  }
  return true;
};

const input = [5, 5, 5, 10, 5, 5, 10, 20, 20, 20];

console.log(lemonadeChange(input));
