const { Player } = require("./Player.js");
const { Human } = require(`./Human.js`);
const { Computer } = require(`./Computer.js`);

let grid = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

const prompt = require("prompt-sync")();

function editGrid(x, y, arg) {
  grid[y][x] = arg;
}

function winCondition(playerOne, playerTwo) {
  let x = playerOne.typeOfChar;
  let y = playerTwo.typeOfChar;
  for (let i = 0; i < 3; i++) {
    if (grid[i][0] == x && grid[i][1] == x && grid[i][2] == x) {
      return 1;
    } else if (grid[i][0] == y && grid[i][1] == y && grid[i][2] == y) {
      return 2;
    } else if (grid[0][i] == x && grid[1][i] == x && grid[2][i] == x) {
      return 1;
    } else if (grid[0][i] == y && grid[1][i] == y && grid[2][i] == y) {
      return 2;
    }
  }
  if (
    (grid[0][0] == x && grid[1][1] == x && grid[2][2] == x) ||
    (grid[0][2] == x && grid[1][1] == x && grid[2][0] == x)
  ) {
    return 1;
  } else if (
    (grid[0][0] == y && grid[1][1] == y && grid[2][2] == y) ||
    (grid[0][2] == y && grid[1][1] == y && grid[2][0] == y)
  ) {
    return 2;
  }
  return 0;
}

let running = true;

while (running) {
  let playerOne = new Human();
  let playerTwo = new Computer();

  let answer = prompt("Do you want to go first? Y/N ");
  playerFirst = answer.toLowerCase() == "y";

  if (playerFirst) {
    playerOne.typeOfChar = "X";
    playerTwo.typeOfChar = "O";
    playerFirst = true;
  } else {
    playerOne.typeOfChar = "O";
    playerTwo.typeOfChar = "X";
    playerFirst = false;
  }

  console.log("Begin!");
  console.log(`${grid[0][0]}|${grid[0][1]}|${grid[0][2]}`);
  console.log("-+-+-");
  console.log(`${grid[1][0]}|${grid[1][1]}|${grid[1][2]}`);
  console.log("-+-+-");
  console.log(`${grid[2][0]}|${grid[2][1]}|${grid[2][2]}`);

  let turn = 0;
  let gameInPlay = true;

  while (gameInPlay && turn < 9) {
    if ((turn % 2 == 0 && playerFirst) || (turn % 2 == 1 && !playerFirst)) {
      let validMove = false;
      while (!validMove) {
        answer = prompt("Choose your next position! x y ");
        let x = answer.split(" ")[0];
        let y = answer.split(" ")[1];
        if (grid[y][x] == " ") {
          editGrid(x, y, playerOne.typeOfChar);
          validMove = true;
        } else {
          console.log("This position is already taken, enter a new postion! ");
        }
      }
    } else {
      do {
        xRandom = Math.floor(Math.random() * 3);
        yRandom = Math.floor(Math.random() * 3);
      } while (grid[yRandom][xRandom] != " ");

      editGrid(xRandom, yRandom, playerTwo.typeOfChar);
      console.log("Player Two has played their move! ");
    }
    console.log(`${grid[0][0]}|${grid[0][1]}|${grid[0][2]}`);
    console.log("-+-+-");
    console.log(`${grid[1][0]}|${grid[1][1]}|${grid[1][2]}`);
    console.log("-+-+-");
    console.log(`${grid[2][0]}|${grid[2][1]}|${grid[2][2]}`);

    if (winCondition(playerOne, playerTwo) == 1) {
      console.log("Player One Wins");
      gameInPlay = false;
    }

    if (winCondition(playerOne, playerTwo) == 2) {
      console.log("Player Two Wins");
      gameInPlay = false;
    }
    turn++;
  }

  answer = prompt("Do you want to quit? Y/N ");
  if (answer.toLowerCase() == "y") {
    running = false;
  } else {
    grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
  }
}
