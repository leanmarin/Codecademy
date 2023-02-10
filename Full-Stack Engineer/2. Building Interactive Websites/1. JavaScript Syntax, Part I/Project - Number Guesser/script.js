let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = (randomNumber) => {
  randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
};

const getAbsoluteDistance = (distGuess1, distGuess2) => {
  let absoluteDistance = Math.abs(distGuess1 - distGuess2);
  return absoluteDistance;
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  let difHumanTarget = getAbsoluteDistance(targetNumber, humanGuess);
  let difComputerTarget = getAbsoluteDistance(targetNumber, computerGuess);

  if ((humanGuess >= 0) && (humanGuess <= 9)) {
    if (difHumanTarget === difComputerTarget) {
      return true;
    } else if (difHumanTarget < difComputerTarget) {
      return true;
    } else {
      return false;
    }
  } else {
    window.alert(`You need set a number between 0 and 9.`);
  }
};

const updateScore = gameWinner => {
  if (gameWinner === 'human') {
    humanScore += 1;
  } else if (gameWinner === 'computer') {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};

