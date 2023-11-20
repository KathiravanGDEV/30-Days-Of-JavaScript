// string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed

function string_chop(str, size = str.length) {
  if (str == null) {
    return [];
  }
  str = String(str);
  size = ~~size;
  return size > 0 ? str.match(new RegExp(`.{1,${size}}`, "g")) : [str];
}

console.log(string_chop("Scaler"));
console.log(string_chop("Scaler", 2));
console.log(string_chop("Welcome", 3));
