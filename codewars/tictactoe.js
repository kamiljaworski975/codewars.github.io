let board = [
  [2, 1, 2],
  [2, 1, 1],
  [1, 2, 1],
];

function isSolved(board) {
  const rows = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];
  let x, y;
  let win;
  rows.forEach((el) => {
    x = el.filter((el) => el === 1);
    y = el.filter((el) => el === 2);
    if (x.length === 3) {
      return (win = 1);
    }
    if (y.length === 3) {
      return (win = 2);
    }
  });

  if (win) {
    return win;
  } else {
    let z = board[0].concat(board[1], board[2]);
   z.filter(el => el === 0).length > 0? win = -1: win = 0;
  }

  return win;
}

let h = isSolved(board);
console.log(h);
