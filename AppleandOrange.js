function countApplesAndOranges(s, t, a, b, apples, oranges) {

  let applesMod = apples.map((element) => {
    return element + a;
  });

  let orangesMod = oranges.map((element) => {
    return element + b;
  });

  let countApples = applesMod.filter((element) => {
        
    if (element >= s && element <= t) {
        return true;
    }else{
        return false;
    }

  });

  let countOranges = orangesMod.filter((element) => {
    if (element >= s && element <= t) {
        return true;
    }else{
        return false;
    }
  });

  console.log(countApples.length);
  console.log(countOranges.length);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
