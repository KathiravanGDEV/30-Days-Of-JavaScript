//Write a JavaScript function named filterOutOdd that uses the filter method to filter out odd numbers from an array.
function filterOutOdd(arr) {
  return arr.filter((num) => num % 2 == 0);
}
console.log(filterOutOdd([1, 2, 3, 4, 5]));
console.log(filterOutOdd([1, 3, 5, 7]));
console.log(filterOutOdd([2, 3, 4, 5, 6, 8, 4]));
