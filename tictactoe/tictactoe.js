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

while (win(matrices) != true) {
  console.log("Player 1 :");
  let posX1 = prompt("Enter your position (row): ");
  let posY1 = prompt("Enter your position (column): ");
  parseInt(posX1);
  parseInt(posY1);

  matrices[posX1 - 1][posY1 - 1] = "X";

  for (let i = 0; i < matrices.length; i++) {
    console.log(matrices[i]);
    console.log("\n");
  }

  console.log("Player 2 :");
  let posX2 = prompt("Enter your position (row): ");
  let posY2 = prompt("Enter your position (column): ");
  parseInt(posX2);
  parseInt(posY2);

  matrices[posX2 - 1][posY2 - 1] = "O";

  for (let i = 0; i < matrices.length; i++) {
    console.log(matrices[i]);
    console.log("\n");
  }
}

if (win(matrices)) console.log("cihuy");
