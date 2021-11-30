function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;

  for (let i = 0; i < arr.length-1; i++) {
    min = min + arr[i];
  }

  for (let i = 1; i < arr.length; i++) {
    max = max + arr[i];
  }


  console.log(min + " " + max);
}

miniMaxSum([5, 5, 5, 5, 5]);
