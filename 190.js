/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
}
const input = 00000010100101000001111010011100;

console.log(reverseBits(input));
