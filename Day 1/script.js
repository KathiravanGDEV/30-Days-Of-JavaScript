function reverseNumber(num) {
  //Convert the number to a string
  let numStr = num.toString();

  //split the string into an array of characters
  let numArr = numStr.split("");

  //reverse the order of the array
  let reversedArr = numArr.reverse();

  //Join the array back into a string
  let reversedStr = reversedArr.join("");

  //Convert the string back to a number
  let reversedNum = Number(reversedStr);

  //Return the reversed Number
  return reversedNum;
}

console.log(reverseNumber(12345));
