// Funtion to apply the Bubble Sort Algorithm.
function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort([11, 1, 233, 455, 567567, 67867896, 5, 2, 3, 789]));
