// Q2a
// Write a function that accepts two integers and *returns*
// the greater one. (this is slightly different from the previous question.)

function max(num1 = 1, num2 = 1) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return (num1 > num2) ? num1 : num2;
  }
  return ("Not and Integer")
}

// Call the function
max(12, 43);

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

// Q2b
// What if we wanted to figure out the max of 4 integers, instead of 2?
function compareNumbers(a, b) {
  return a - b;
}

function max(num1 = 1, num2 = 1, num3 = 1, num4 = 1) {
  let evaluation = []
  if (Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3) && Number.isInteger(num4)) {
    evaluation.push(num1);
    evaluation.push(num2);
    evaluation.push(num3);
    evaluation.push(num4);
    evaluation.sort(function compareNumbers(a, b) {
      return a - b;
    });
    return evaluation[3]
  }
  return ("Not and Integer")
}

// Call the function
max(12, 43, 90, 5);

// STRETCH
// What if we wanted to write a function which took an unlimited number of
// integers, and returned the largest one?

// All of the following calls should be valid:

function maxValue(...theArgs) {
  theArgs.sort(function compareNumbers(a, b) {
    return a - b;
  });
  console.log(theArgs[theArgs.length - 1]);
}

maxValue(4, 2); // 4
maxValue(4, 2, 8, 1, 5, 10); // 10
maxValue(4, 2, 8, 1, 5, 10, 1, 64, 2, 8, -100, 54); // 64

// HINT: You'll want to use "rest parameters".
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
