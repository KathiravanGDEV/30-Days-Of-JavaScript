function firstNonRepeatedChars(str) {
  const frequencies = {};
  for (let char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
  for (let char of str) {
    if (frequencies[char] == 1) {
      return char;
    }
  }
  return null;
}

console.log(
  "First Non-Repeating Character is: " + firstNonRepeatedChars("aabbccddeefff")
);
console.log(
  "First Non-Repeating Character is: " + firstNonRepeatedChars("ababbddcecc")
);
console.log(
  "First Non-Repeating Character is: " + firstNonRepeatedChars("adbgbcfcg")
);
