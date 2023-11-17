function capitalizeFirstLetter(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let firstLetter = words[i][0];
    let upperCaseLetter = firstLetter.toUpperCase();
    words[i] = upperCaseLetter + words[i].slice(1);
  }
  let result = words.join(" ");
  return result;
}

console.log(capitalizeFirstLetter("the quick brown fox"));
