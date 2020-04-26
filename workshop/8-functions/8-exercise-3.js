// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(...theArgs) {
  let averageGrades = 0
  theArgs.forEach(number => averageGrades += number);
  return (averageGrades / theArgs.length);
}


console.log(calculateAverage(76, 60, 83, 100, 78));
