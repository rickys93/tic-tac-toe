const tiles = document.querySelectorAll(".clickable-tile");
let playerTurn = 1;
const playerWins = document.getElementsByClassName("player-wins")[0];

function takeTurn(element) {
    if (playerTurn === 1) {
        element.target.setAttribute(
            "style",
            "background-image: url('./assets/cross.png')"
        );
        element.target.setAttribute("id", "X");
        playerTurn = 2;
    } else {
        element.target.background = element.target.setAttribute(
            "style",
            "background-image: url('./assets/nought.png')"
        );
        element.target.setAttribute("id", "O");
        playerTurn = 1;
    }
    element.target.removeEventListener("click", takeTurn);
    const board = getBoard();

    const result = startRound(board);
    console.log(result);

    if (result.finished) {
        roundFinised(result.winner);
    }
}

function roundFinised(winner) {
    let player;
    if (winner === "X") {
        player = "1";
    } else if (winner === "O") {
        player = "2";
    } else {
        player = "draw";
    }
    let winnerCount;
    if (player === "draw") {
        playerWins.textContent = `GAME DRAW!!`;
        winnerCount = document.getElementById("draw-count");
    } else {
        playerWins.textContent = `PLAYER ${player} WINS!!`;
        winnerCount = document.getElementById(`p${player}-count`);
    }
    winnerCount.textContent++;

    for (tile of tiles) {
        tile.removeEventListener("click", takeTurn);
    }
}

function getBoard() {
    let board = [];
    for (let i = 0; i < tiles.length; i++) {
        board[i] = tiles[i].id;
    }
    return board;
}

function initializeBoard() {
    let board = [];
    for (let i = 0; i < tiles.length; i++) {
        board[i] = tiles[i];
        board[i].addEventListener("click", takeTurn);
    }
    return board;
}

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
    let totalMoves = 0;
    for (line of winningLines) {
        let count = {
            X: 0,
            O: 0,
        };
        for (index of line) {
            let element = board[index];
            count[element]++;
            let winner;
            if (count["X"] === 3 || count["O"] === 3) {
                if (count["X"] === 3) {
                    winner = "X";
                } else {
                    winner = "O";
                }
                return {
                    finished: true,
                    winner: winner,
                };
            }
        }
    }
    totalMoves = findTotalMoves();
    if (totalMoves === 9) {
        return { finished: true, winner: "draw" };
    }
    return { finished: false };
}

function findTotalMoves() {
    let totalMoves = 0;
    for (tile of tiles) {
        if (tile.id === "X" || tile.id === "O") {
            totalMoves++;
        }
    }
    return totalMoves;
}

function resetBoard() {
    for (square of tiles) {
        square.style.backgroundImage = "";
        square.id = "";
    }
    initializeBoard();
    playerTurn = 1;
    playerWins.textContent = "";
}

initializeBoard();
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetBoard);
