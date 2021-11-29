

function plusMinus(arr) {
  let n = arr.length;
  let nPositive = 0;
  let nNegative = 0;
  let nZero = 0;

  arr.forEach((Element) => {

    if (Element > 0) {
      nPositive++;
    } else if (Element < 0) {
      nNegative++;
    } else {
      nZero++;
    }

  });

  console.log((nPositive/n).toFixed(6));
  console.log((nNegative/n).toFixed(6));
  console.log((nZero/n).toFixed(6));

}

plusMinus([-4, 3, -9, 0, 4, 1]);
