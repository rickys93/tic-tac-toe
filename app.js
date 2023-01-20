const tiles = document.querySelectorAll(".clickable-tile")

function initializeBoard() {
    let board = []
    for (let i = 0; i < tiles.length; i++) {
        board[i] = tiles[i]
    }
    return board;
}

const board = initializeBoard()