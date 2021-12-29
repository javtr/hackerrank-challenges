function getTotalX(a, b) {
  let ints = b[0] - a[a.length - 1];
  let init = a[a.length - 1];
  let nFactors = 0;

  for (let i = init; i <= ints + init; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] != 0) {
        break;
      }

      if (j == a.length - 1) {
        for (let k = 0; k < b.length; k++) {
          if (b[k] % i != 0) {
            break;
          }

          if (k == b.length - 1) {
            nFactors++;
          }
        }
      }
    }
  }

  return nFactors;

}

console.log(getTotalX([2, 6], [24, 36]));
// console.log(getTotalX([1], [100]));
