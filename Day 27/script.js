//JavaScript program to write a generator function range that takes two arguments.

function* rangeGenerator(start, end) {
  for (let current = start; current <= end; current++) {
    yield current;
  }
}
let startValue = 1;
let endValue = 20;

let generator = rangeGenerator(startValue, endValue);

for (let num of generator) {
  console.log(num);
}
