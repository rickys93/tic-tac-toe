function startRound(board) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  // go through the list of winning lines
  // if all the indexes of that line in array are Xs or Os, game over
  for (line of winningLines) {
    let count = {
      x: 0,
      o: 0,
    };
    for (index of line) {
      let element = board[index].toLowerCase();
      count[element]++;
    }
    let winner;
    if (count.x === 3 || count.o === 3) {
      if (count.x === 3) {
        winner = "X";
      } else {
        winner = "O";
      }
      return {
        finished: true,
        winner: winner,
      };
    }
    return { finished: false };
  }
}

// array representing the board
board = ["O", "X", "X", ".", ".", ".", ".", ".", "."];
// each array in winningLines represents a possible line to win
