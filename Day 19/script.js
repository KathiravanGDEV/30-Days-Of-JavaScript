//Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.

function allPositive() {
  //let arr = [1, 2, 3, 4, 5]; //=> Output true
  let arr = [1, 2, 3, 4, 5, 6, -7];
  let isAllPositive = arr.every(function (num) {
    return num > 0;
  });
  console.log(isAllPositive);
}

allPositive();
