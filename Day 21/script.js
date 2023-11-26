//Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element
async function applyAsyncFunction(array, asyncFunction) {
  for (const element of array) {
    await asyncFunction(element);
  }
}
