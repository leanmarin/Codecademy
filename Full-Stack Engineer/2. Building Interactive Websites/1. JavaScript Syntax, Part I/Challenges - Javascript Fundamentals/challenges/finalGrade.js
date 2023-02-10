// Write your function here:
const finalGrade = (number1, number2, number3) => {
  const average = (number1 + number2 + number3) / 3;

  if ((number1 < 0 || number1 > 100) || (number2 < 0 || number2 > 100) || (number3 < 0 || number3 > 100)) {
    return 'You have entered an invalid grade.'
  } else if (average < 60) {
    return 'F';
  } else if (average < 70) {
    return 'D';
  } else if (average < 80) {
    return 'C';
  } else if (average < 90) {
    return 'B';
  } else if (average < 100) {
    return 'A';
  }
};


// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!