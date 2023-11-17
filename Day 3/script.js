function checkRange(num1, num2) {
  let lower = 50;
  let higher = 99;

  if ((num1 >= lower && num1 <= higher) || (num2 >= lower && num2 <= higher)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRange(40, 58));
