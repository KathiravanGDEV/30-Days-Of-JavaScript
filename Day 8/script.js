function getSubsets(array, subset_length) {
  let subsets = [];
  function helper(index, subset, remain) {
    if (remain == 0) {
      subsets.push(subset);
      return;
    }
    for (let i = index; i < array.length; i++) {
      subset.push(array[i]);
      helper(i + 1, subset.slice(), remain - 1);
      subset.pop();
    }
  }
  helper(0, [], subset_length);
  return subsets;
}

console.log(getSubsets([1, 2, 3, 4], 3));
console.log(getSubsets([1, 2, 3], 2));
console.log(getSubsets([1, 2, 3, 4, 5], 3));
