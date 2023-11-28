//Closure
//Write a function counter that returns a new function on each invocation(call).

function counter() {
  let count = 0;
  return function () {
    return (count += 1);
  };
}

let counter1 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
