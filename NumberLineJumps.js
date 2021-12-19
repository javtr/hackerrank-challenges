function kangaroo(x1, v1, x2, v2) {

  let num1 = (x2 - x1) / (v1 - v2);

  if (Number.isInteger(num1) && num1 > 0) {
    return YES;
  } else {
    return NO;
  }
}

kangaroo(0, 3, 4, 2);
