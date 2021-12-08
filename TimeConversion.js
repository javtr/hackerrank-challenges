function timeConversion(s) {
  let hour = parseInt(s.slice(0, 2));

  if (s.slice(-2) == "PM") {
    if (hour == 12) {
      return s.slice(0, 8);
    }
    return  (12 + hour) + s.slice(2, 8);
  } else {
    if (hour == 12) {
      return '00' + s.slice(2, 8);
    }
    return s.slice(0, 8);
  }

}

console.log(timeConversion("12:05:45AM"));
