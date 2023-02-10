const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 7;
    case 'Wednesday':
      return 6;
    case 'Thursday':
      return 5;
    case 'Friday':
      return 4;
    case 'Saturday':
      return 3;
    case 'Sunday':
      return 2;
    default:
      console.log('Error');
      break;
  }
};

const getActualSleepHours = () => 6 + 7 + 8 + 9 + 5 + 4 + 3;


const getIdealSleepHours = hours => hours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep hours');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than needed`);
  } else {
    console.log(`You need ${(actualSleepHours - idealSleepHours) * -1} hour(s) more of sleep`);
  }
};

calculateSleepDebt();