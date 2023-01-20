const tiles = document.querySelectorAll(".clickable-tile")
let playerTurn = 1

function takeTurn(element) {
    if (playerTurn === 1) {
        element.target.setAttribute("style", "background-image: url('./assets/cross.png')")
        playerTurn = 2
    } else {
        element.target.background = element.target.setAttribute("style", "background-image: url('./assets/nought.png')")
        playerTurn = 1
    }
    element.target.removeEventListener("click", takeTurn)
}

function initializeBoard() {
    let board = []
    for (let i = 0; i < tiles.length; i++) {
        board[i] = tiles[i]
        board[i].addEventListener("click", takeTurn)
    }
    return board;
}

const board = initializeBoard()