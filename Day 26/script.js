//JavaScript Function calculateTotal that takes an array of numbers,
//filters out he even numbers, squares the remaining numbers, and then calculates their sum.
function calculateTotal(arr) {
  //getting odd numbers
  let oddNum = arr.filter(function (num) {
    return num % 2 !== 0;
  });

  //getting the squares if the odd numbers
  let squares = oddNum.map(function (num) {
    return num ** 2;
  });

  //getting sum of all the squared numbers
  let sum = squares.reduce(function (accSum, currNum) {
    return accSum + currNum;
  });
  return sum;
}

console.log(calculateTotal([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(calculateTotal([5, 13, 11, 23, 45, 1]));
console.log(calculateTotal([1, 2, 4, 6, 8, 10]));
