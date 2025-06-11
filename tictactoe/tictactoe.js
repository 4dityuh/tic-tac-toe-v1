// Tic tac toe game :D

console.log("Welcome to my Tic Tac Toe game! \n");
console.log("Made with love by Farrel <3 \n");

// [[x,x,x]]
// [[x,x,x]]
// [[x,x,x]]

/*
 if(arr[i][0] == arr[i][1] && 
        arr[i][0] == arr[i][2] && 
        arr[i][1] == arr[i][2]) flag = true;
        
        */

/*
TODO :
- Fix the bugs
- Add some more logical operators that prevent users from crashing the game
- Let user won't go beyond the 3x3 grid
- Let user prevent from stacking each tic

*/
let matrices = [
  [1, 2, 3],
  [4, 3, 6],
  [7, 8, 9],
];

let win = function (arr) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i][0] == arr[i][1] &&
      arr[i][0] == arr[i][2] &&
      arr[i][1] == arr[i][2]
    ) {
      flag = true;
      break;
    }
  }

  for (let i = 1; i < arr.length / 2; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (
        arr[i - 1][j] == arr[i][j] &&
        arr[i - 1][j] == arr[i + 1][j] &&
        arr[i][j] == arr[i + 1][j]
      ) {
        flag = true;
        break;
      }
    }
  }

  for (let i = 1; i < arr.length / 2; i++) {
    for (let j = 1; j < arr[i].length / 2; j++) {
      if (
        arr[i - 1][j - 1] == arr[i][j] &&
        arr[i][j] == arr[i + 1][j + 1] &&
        arr[i - 1][j - 1] == arr[i + 1][j + 1]
      ) {
        flag = true;
        break;
      } else if (
        arr[i - 1][j + 1] == arr[i][j] &&
        arr[i][j] == arr[i + 1][j - 1] &&
        arr[i - 1][j + 1] == arr[i + 1][j - 1]
      ) {
        flag = true;
        break;
      }
    }
  }

  return flag;
};

while (true) {
  console.log("Player 1 :");
  let posX1 = prompt("Enter your position (row): "),
    posY1 = prompt("Enter your position (column): "),
    x1 = parseInt(posX1),
    y1 = parseInt(posY1);

  while ((x1 <= 0 || x1 > 3 || isNaN(x1)) || (y1 <= 0 || y1 > 3 || isNaN(y1)) ) {
    console.log("You can't go beyond 3x3! \n");
    (posX1 = prompt("Enter your position (row): ")),
      (posY1 = prompt("Enter your position (column): ")),
      (x1 = parseInt(posX1)),
      (y1 = parseInt(posY1));
  }
  if (x1 <= 3 && y1 <= 3) {
    matrices[x1 - 1][y1 - 1] = "X";
  }

  for (let i = 0; i < matrices.length; i++) {
    console.log(matrices[i]);
    console.log("\n");
  }

  if (win(matrices)) break;

  console.log("Player 2 :");
  let posX2 = prompt("Enter your position (row): "),
    posY2 = prompt("Enter your position (column): "),
    x2 = parseInt(posX2),
    y2 = parseInt(posY2);

  while ((x2 <= 0 || x2 > 3 || isNaN(x2)) || (y2 <= 0 || y2 > 3 || isNaN(y2))) {
    console.log("You can't go beyond 3x3! \n");
    (posX2 = prompt("Enter your position (row): ")),
      (posY2 = prompt("Enter your position (column): ")),
      (x2 = parseInt(posX2)),
      (y2 = parseInt(posY2));
  }
  if (x2 <= 3 && y2 <= 3) {
    matrices[x2 - 1][y2 - 1] = "Y";
  }

  for (let i = 0; i < matrices.length; i++) {
    console.log(matrices[i]);
    console.log("\n");
  }

  if (win(matrices)) break;
}

if (win(matrices)) console.log("cihuy");
