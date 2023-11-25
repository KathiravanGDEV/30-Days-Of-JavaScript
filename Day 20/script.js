//Write a JS Function named findNegative that finds and returns the first negative number in an array using the find() method

function findFirstNegative() {
  //let arr = [1, 2, 3, 4, -5]; Output=>-5
  //let arr = [-4, -3, 1, 2, 3, 4]; Output=>-4
  let arr = [1, 2, 3, -4, -5];
  //let arr = [1, 2, 3, 4, 5]; // output => "undefined"
  let firstNegative = arr.find((element) => {
    return element < 0;
  });
  console.log(firstNegative);
}

findFirstNegative();
