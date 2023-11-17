function checkSum50(num1, num2) {
  if (num1 == 50 || num2 == 50 || num1 + num2 == 50) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSum50(50, 20));
console.log(checkSum50(25, 25));
console.log(checkSum50(12, 25));
