/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const visited = Array(rooms.length).fill(false);
  visited[0] = true;
  const stack = rooms[0];
  while (stack.length) {
    const opened = stack.pop();
    if (!visited[opened]) for (let key of rooms[opened]) stack.push(key);
    visited[opened] = true;
  }
  return visited.indexOf(false) === -1;
};

const input = [[1], [2], [], [3]];

console.log(canVisitAllRooms(input));
