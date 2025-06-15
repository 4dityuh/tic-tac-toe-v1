// Tic tac toe game :D

console.log("Welcome to my Tic Tac Toe game! \n");
console.log("Made with love by Farrel <3 \n");

// [[x,x,x]]
// [[x,x,x]]
// [[x,x,x]]

// TODO :
// - Fix the bugs : DONE
// - Add some more logical operators that prevent users from crashing the game : DONE
// - Let user won't go beyond the 3x3 grid : DONE
// - Let user prevent from stacking each tic : DONE
// - Automate so that maybe the win function can work not only for 3x3 grid : WIP

let matrices = [
  [1, 2, 3],
  [4, 3, 6],
  [7, 8, 9],
];

let isBeyond = function (x, y) {
  return x <= -1 || x > 3 || isNaN(x) || y <= -1 || y > 3 || isNaN(y);
};

let isNotAvaliable = function (x, y) {
  return matrices[x - 1][y - 1] == "X" || matrices[x - 1][y - 1] == "O";
};

let win = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      if (
        arr[i][j - 1] == arr[i][j] &&
        arr[i][j - 1] == arr[i][j + 1] &&
        arr[i][j] == arr[i][j + 1]
      ) {
        return true;
      }
    }
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (
        arr[i - 1][j] == arr[i][j] &&
        arr[i - 1][j] == arr[i + 1][j] &&
        arr[i][j] == arr[i + 1][j]
      ) {
        return true;
      }
    }
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      if (
        arr[i - 1][j - 1] == arr[i][j] &&
        arr[i][j] == arr[i + 1][j + 1] &&
        arr[i - 1][j - 1] == arr[i + 1][j + 1]
      ) {
        return true;
      } else if (
        arr[i - 1][j + 1] == arr[i][j] &&
        arr[i][j] == arr[i + 1][j - 1] &&
        arr[i - 1][j + 1] == arr[i + 1][j - 1]
      ) {
        return true;
      }
    }
  }
};

while (true) {
  console.log("Player 1 :");
  let posX = prompt("Enter your position (row): "),
    posY = prompt("Enter your position (column): "),
    x = parseInt(posX),
    y = parseInt(posY);

  while (isBeyond(x, y)) {
    console.log("You can't go beyond 3x3! \n");
    posX = prompt("Enter your position (row): ");
    posY = prompt("Enter your position (column): ");
    x = parseInt(posX);
    y = parseInt(posY);
  }

  while (isNotAvaliable(x, y)) {
    console.log("Someone has used this exact position! \n");
    posX = prompt("Enter your position (row): ");
    posY = prompt("Enter your position (column): ");
    x = parseInt(posX);
    y = parseInt(posY);
  }

  matrices[x - 1][y - 1] = "X";

  console.log("\n");

  for (let i = 0; i < matrices.length; i++) {
    console.log(matrices[i]);
  }

  console.log("\n");

  if (win(matrices)) {
    console.log("%c Player 1 won!", "color: blue; font-style: italic");
    break;
  }

  console.log("Player 2 :");
  posX = prompt("Enter your position (row): ");
  posY = prompt("Enter your position (column): ");
  x = parseInt(posX);
  y = parseInt(posY);

  while (isBeyond(x, y)) {
    console.log("You can't go beyond 3x3! \n");
    posX = prompt("Enter your position (row): ");
    posY = prompt("Enter your position (column): ");
    x = parseInt(posX);
    y = parseInt(posY);
  }

  while (isNotAvaliable(x, y)) {
    console.log("Someone has used this exact position! \n");
    posX = prompt("Enter your position (row): ");
    posY = prompt("Enter your position (column): ");
    x = parseInt(posX);
    y = parseInt(posY);
  }

  matrices[x - 1][y - 1] = "O";

  console.log("\n");

  for (let i = 0; i < matrices.length; i++) {
    console.log(matrices[i]);
  }

  console.log("\n");

  if (win(matrices)) {
    console.log("%c Player 2 won!", "color: red; font-style: italic");
    break;
  }
}
