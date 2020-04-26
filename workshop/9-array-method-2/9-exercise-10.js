// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is E
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateAverage(grades) {
  let sum = 0;
  grades.forEach(element => sum += element);
  if (Math.round(sum / grades.length, 0) >= 90) {
    return "A";
  } else if (Math.round(sum / grades.length, 0) >= 80) {
    return "B";
  } else if (Math.round(sum / grades.length, 0) >= 70) {
    return "C"
  } else if (Math.round(sum / grades.length, 0) >= 60) {
    return "D"
  } else {
    return "E"
  }
}

console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));

// Try with other values as well


