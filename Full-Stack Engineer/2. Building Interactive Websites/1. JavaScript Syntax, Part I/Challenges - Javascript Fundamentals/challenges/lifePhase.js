// Write your function here:
const lifePhase = age => {
  if (age < 0 || age > 140) {
    return 'This is not a valid age'
  } else if (age < 4) {
    return 'baby'
  } else if (age < 13) {
    return 'child'
  } else if (age < 20) {
    return 'teen'
  } else if (age < 65) {
    return 'adult'
  } else {
    return 'senior citizen'
  }
};

/*const lifePhase = age => {
  switch (lifePhase) {
    case age < 0 || age > 140:
      return 'This is not a valid age';
      break;
    case age < 4 :
      return 'baby';
      break;
    case age < 13:
      return 'child';
      break;
    case age < 20:
      return 'teen';
      break;
    case age < 65:
      return 'adult';
      break;
    default:
      return 'senior citizen';
      break;
  }
};
*/


// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!