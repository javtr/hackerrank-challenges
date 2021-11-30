function staircase(n) {
  for (let i = 0; i < n; i++) {
    let stringOut = "";
    for (let k = 0; k < n; k++) {
      if (k < n - i - 1) {
        stringOut += " ";
      } else {
        stringOut += "#";
      }
    }
    console.log(stringOut);
  }
}
staircase(60);
