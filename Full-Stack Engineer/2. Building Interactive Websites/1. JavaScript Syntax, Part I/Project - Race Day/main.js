let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const age = 24;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber}. Your race starts at 9:30 am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race starts at 11:00 am. You race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Your race will begin at 12:30 pm. Your race number: ${raceNumber}.`);
} else {
  console.log('See the registration desk.');
}