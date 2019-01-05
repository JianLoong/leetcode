const isAlienSorted = (words, order) => {
  for (let i = 0; i < words.length - 1; i++) {
    let curr = words[i];
    let next = words[i + 1];
    if (!isSorted(curr, next, 0, order)) return false;
  }
  return true;
};

const isSorted = (a, b, idx, order) => {
  if (order.indexOf(a[idx]) > order.indexOf(b[idx])) return false;
  else if (a[idx] && b[idx] && order.indexOf(a[idx]) === order.indexOf(b[idx]))
    return isSorted(a, b, ++idx, order);
  else return true;
};
