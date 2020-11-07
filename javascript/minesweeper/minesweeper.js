//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// For each mine increment counts surrounding

export const annotate = (input) => {
  for (let i = 0; i < input.length; i++) {
    const row = input[i]
    let rowOutput = ''
    for (let j = 0; j < row.length; j++) {
      const square = row[j];
      console.log(i, j, row, square)
      if (square !== '*') {
        let mineCount = 0;
        for (let k = -1; k <= 1; k++) {
          for (let l = -1; l <= 1; l++) {
            if (i + k >= 0 && i + k < input.length && j + l >= 0 && j + l < row.length) {
              if (input[i + k][j + l] === '*') {
                mineCount++;
              }
            }
          }
        }
        rowOutput = mineCount ? `${rowOutput}${mineCount}` : `${rowOutput} `
      } else {
        rowOutput = `${rowOutput}*`
      }
    }
    input[i] = rowOutput
  }
  return input
}
