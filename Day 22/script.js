//JavaScript function to deeply compare two objects for equality.
function deepCompareObjects(obj1, obj2) {
  if (typeof obj1 !== typeof obj2) return false;

  if (typeof obj1 === "object" && obj1 !== null && obj2 !== null) {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) return false;

      for (let i = 0; i < obj1.length; i++) {
        if (!deepCompareObjects(obj1[i], obj2[i])) return false;
      }
    } else {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

      for (const key in obj1) {
        if (
          !obj2.hasOwnProperty(key) ||
          !deepCompareObjects(obj1[key], obj2[key])
        )
          return false;
      }
    }
  } else if (obj1 !== obj2) {
    return false;
  }

  return true;
}

console.log(deepCompareObjects([1, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(deepCompareObjects([1, 2, 3], [1, 2, 3]));
console.log(deepCompareObjects([1, 2, 3, 4, 5], [1, 2, 3]));
