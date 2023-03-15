const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.playerPosition = [0, 0]
  }

  print() {
    console.log(this.field.map(row => row.join('')).join('\n'));
  }

  updatePosition(direction) {
    const [x, y] = this.playerPosition;
    let newX, newY;
    switch (direction) {
      case 'u':
        newX = x - 1;
        newY = y;
        break;
      case 'd':
        newX = x + 1;
        newY = y;
        break;
      case 'l':
        newX = x;
        newY = y - 1;
        break;
      case 'r':
        newX = x;
        newY = y + 1;
        break;
      default:
        return 'invalid';
    }

    // Check if new position is valid
    if (newX < 0 || newX >= this.field.length || newY < 0 || newY >= this.field[0].length) {
      return 'outside'
    }

    // Check whether the player has found the hat or has fallen into a hole
    const newTile = this.field[newX][newY];
    if (newTile === hat) {
      return 'win';
    } else if (newTile === hole) {
      return 'lose';
    }

    // Update the position of the player and actual tile
    this.field[x][y] = pathCharacter;
    this.field[newX][newY] = pathCharacter;
    this.playerPosition = [newX, newY];
    return 'ok';
  }

  game() {
    let result = 'ok';
    while (result === 'ok') {
      this.print();
      const direction = prompt('Which way? (u=up, d=down, l=left, r=right)').toLowerCase();
      result = this.updatePosition(direction);

      switch (result) {
        case 'invalid':
          console.log('Invalid direction. Please enter u, d, l, or r.');
          break;
        case 'outside':
          console.log('You fell off the field. Game over!');
          break;
        case 'lose':
          console.log('You fell into a hole. Game over!');
          break;
        case 'win':
          console.log('You found the hat. Congratulations, you win!');
          break;
      }
    }
    this.print();
  }

  static generateField(height, width, percentage) {
    const totalCells = height * width;
    const numHoles = Math.floor(totalCells * percentage / 100);
    const numValidCells = totalCells - numHoles - 2;

    // Initialize field with all valid cells
    const field = new Array(height).fill().map(() => new Array(width).fill(fieldCharacter));

    // Add hat and player
    field[0][0] = pathCharacter;
    const hatX = Math.floor(Math.random() * height);
    const hatY = Math.floor(Math.random() * width);
    field[hatX][hatY] = hat;

    // Add holes
    let holesAdded = 0;
    while (holesAdded < numHoles) {
      const x = Math.floor(Math.random() * height);
      const y = Math.floor(Math.random() * width);

      if (field[x][y] === fieldCharacter) {
        field[x][y] = hole;
        holesAdded++;
      }
    }

    return field;
  }
};

const myField = Field.generateField(10, 10, 25);
const myNewGame = new Field(myField);

myNewGame.game();