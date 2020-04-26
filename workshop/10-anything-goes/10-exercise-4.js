// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

const reducerToObject = (accumulator, data) => {
  !accumulator[data] ?
    accumulator[data] = 1
    : accumulator[data]++;
  return accumulator;
}

function filterNonUnique(array) {
  const objectArrayCount = array.reduce(reducerToObject, {})
  // console.table(objectArrayCount)
  return Object.keys(objectArrayCount).filter((a) => objectArrayCount[a] > 1)
}


console.table(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));
 // Good saves Web Bos Vanilla JavaScript 30 days exercises