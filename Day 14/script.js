//JavaScript function to concatenate a given string n times

//Here n is default 1
function repeatStr(str, n = 1) {
  //empty variable to store the concatenetaed string
  let result = "";

  //Iterate untill the n
  for (let i = 0; i < n; i++) {
    result += str;
  }

  return result;
}

console.log(repeatStr("Ha!"));
console.log(repeatStr("Ha!", 2));
console.log(repeatStr("Ha!", 3));
console.log(repeatStr("Ha!", 5));
