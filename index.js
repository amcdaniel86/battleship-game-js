let board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null],
  ["S", null, null, null, null],
  [null, "S", null, null, null],
  [null, null, null, null "S"]
];

for (var i = 0; i < 10; i++){
let row = getRandomNum();
let column = getRandomNum();
console.log("Row " + row + " " + "Column " + column);
let randomSquare = board[row][column];
console.log(randomSquare);
if (randomSquare === "S"){
console.log("Hit on: " + row + ", " + column);
board[row][column] = null;
}
}

function getRandomNum(){
return Math.floor(Math.random() * 5);
}

console.log(getRandomNum());
console.log(getRandomNum());
console.log(getRandomNum());
console.log(getRandomNum());
console.log(getRandomNum());
console.log(getRandomNum());
console.log(getRandomNum());
console.log(getRandomNum());

// for (let i = 0; i < board.length; i++){
//   let row = board[i];

// for (let j = 0; j < row.length; j++){
//   let column = row[j];

//   if (column === "S"){
//     console.log("Ship Found at: " + i + ", " + j);
//     }
//   }
// }

// let firstRow = board[0];
// let emptySpace = firstRow[0,1,2,4];
// let ship = firstRow[3];

// console.log("Empty Space: " + emptySpace);
// console.log("Ship: " + ship);

// let secondRow = board[1];
// let emptySpace = secondRow[0,2,4];
// let ship = secondRow[1,3];

// console.log("Empty Space: " + emptySpace);
// console.log("Ship: " + ship);

// let thirdRow = board[2];
// let emptySpace = thirdRow[1,2,3,4];
// let ship = secondRow[0];

// console.log("Third row, first col: " + board[2][0]);
// console.log("Third row, second col: " + board[2][0]);
// console.log("Third row, third col: " + board[2][0]);
// console.log("Third row, fourth col: " + board[2][0]);
// console.log("Third row, fifth col: " + board[2][0]);


// let fourthRow = board[3];
// let emptySpace = fourthRow[0,2,3,4];
// let ship = secondRow[1];

// console.log("Fourth row, first col: " + board[3][0]);;
// console.log("Fourth row, second col: " + board[3][0]);
// console.log("Fourth row, third col: " + board[3][0]);;
// console.log("Fourth row, fourth col: " + board[3][0]);
// console.log("Fourth row, fifth col: " + board[3][0]);;

// let fifthRow = board[4];
// let emptySpace = fifthRow[0,1,2,3];
// let ship = secondRow[4];

// console.log("Fifth row, first col: " + board[4][0]);;
// console.log("Fifth row, second col: " + board[4][0]);
// console.log("Fifth row, third col: " + board[4][0]);;
// console.log("Fifth row, fourth col: " + board[4][0]);
// console.log("Fifth row, fifth col: " + board[4][0]);;