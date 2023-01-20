const tiles = document.querySelectorAll(".clickable-tile")

function initializeBoard() {
    let board = [[],[],[]]
    for (let i = 0; i < tiles.length; i++) {
        board[Math.floor(i / 3)][Math.floor(i % 3)] = tiles[i]
    }
    return board;
}

console.log(initializeBoard())