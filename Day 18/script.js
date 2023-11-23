//JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.
function doubleValues(arr) {
  let result = arr.map((value) => {
    return value + value;
  });
  return result;
}

console.log(doubleValues([1, 2, 3, 4, 5]));
// console.log(doubleValues(2, 4, 6, 8, 10));
// console.log(doubleValues([5, 10, 15]));
