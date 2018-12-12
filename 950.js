/**
 * @param {number[]} deck
 * @return {number[]}
 */
// var deckRevealedIncreasing = function(deck) {
//   const revealed = [];
//   while (deck.length != 0) {
//     revealed.push(deck.shift());
//     let card = deck.shift();
//     if (card !== undefined) deck.push(card);
//   }
//   return revealed;
// };

const deckRevealedIncreasing = deck => {
  let n = deck.length;
  deck.sort((a, b) => a - b);
  let q = [];
  for (let i = 0; i < n; i++) {
    q.push(i);
  }
  let res = [];
  for (let i = 0; i < n; i++) {
    res[q.shift()] = deck[i];
    q.push(q.shift());
  }
  return res;
};

const input = [17, 13, 11, 2, 3, 5, 7];

console.log(deckRevealedIncreasing(input));
//console.log(buildDeck(input));
