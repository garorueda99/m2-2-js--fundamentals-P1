// Q1
// Write a function that accepts two integers and displays
// the greater one, using `console.log`

// Define the function
function max(num1 = 1, num2 = 1) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    console.log((num1 > num2) ? num1 : num2);
  } else {
    console.log("Not and Integer")
  }
}

// Call the function
max(12, 43);
