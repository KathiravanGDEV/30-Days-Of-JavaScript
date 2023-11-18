//JavaScript Program to Implementing a Memoization Function

//Fubction takes the original function "func" as it arguments
function memoiz(func) {
  //Empty Cache Object to store the function's results for previous inputs.
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

function add(a, b) {
  return a + b;
}

memoizeAdd = memoiz(add);

console.log(memoizeAdd(5, 6));
console.log(memoizeAdd(3, 9));
console.log(memoizeAdd(11, 67));
