//This variable represents my age
const myAge = 24;

//earlyYears stands for the 2 first years of a dog
let earlyYears = 2;

earlyYears *= 10.5;

//Decreases 2 years from myAge
let laterYears = myAge - 2;

//This line points out the year of the dog after 4 human years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//My age's in dogs years
const myAgeInDogYears = earlyYears + laterYears;

//Making my name in lower case
const myName = 'Leandro'.toLowerCase();

//Show in console this string
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);