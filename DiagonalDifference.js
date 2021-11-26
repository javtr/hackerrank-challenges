
function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
      sum1 = sum1 + arr[i][i];
      sum2 = sum2 + arr[i][arr.length-1-i];
    }

    return Math.abs(sum1-sum2);
}


arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));

