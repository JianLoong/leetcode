/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const map = new Map();
  for (let character of magazine) {
    if (!map.has(character)) {
      map.set(character, 1);
    } else {
      let value = map.get(character);
      map.set(character, value + 1);
    }
  }

  for (let character of ransomNote) {
    if (map.has(character)) {
      let value = map.get(character) - 1;
      map.set(character, value);
      if (value < 0) return false;
    } else {
      return false;
    }
  }

  return true;
};

const ransomNote = "a";
const magazine = "b";

console.log(canConstruct(ransomNote, magazine));
