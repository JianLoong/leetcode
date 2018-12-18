const getRow = rowIndex => {
  let row = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (j === i) row[j] = 1;
      else {
        row[j] = row[j - 1] + row[j];
      }
      //console.log(row);
    }
    //console.log();
  }
  return row;
};

const input = 1;

console.log(getRow(input));
