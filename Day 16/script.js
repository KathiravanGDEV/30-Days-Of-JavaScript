//JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.

function sumArray(arr) {
  let sum = arr.reduce((acc, val) => acc + val, 0);
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([3, 5, 6, 7, 9]));
console.log(sumArray([0, 9, 8, 6, 5]));
