let board = []

const button = document.getElementById("start-game")
button.addEventListener('click', initializeBoard)

let squares = document.querySelectorAll("td")

function initializeBoard() {
    board = [null, null, null, null, null, null, null, null, null]
    button.style.display = "none";
    for (let i=0; i<squares.length; i++) {
        squares[i].addEventListener("click", playerTurn)
    }
}

function playerTurn(e) {
    if (!e.target.textcontent) {
        e.target.innerHTML = "X"
        let id_array = e.target.id.split('')
        let index = id_array[id_array.length-1]
        board[+index] = "X"
    }
    if (!checkGameOver()) {
        computerTurn()
    } else {
        determineOutcome()
    }
}

function computerTurn() {
    let validMove = false
    while (!validMove) {
        let index = Math.floor(Math.random() *8)
        if (!board[index]) {
            board[index] = "O"
            squares[index].innerHTML = "0"
            validMove = true
        }
    }
    checkGameOver()
}

function checkGameOver() {
    for (let k=0; k<board.length; k++) {
        if (board[k] && (k === 0 || k === 3 || k === 6)) {
            if (board[k] === board[k+1] && board[k] === board[k+2]) {
                determineOutcome(board[k])
                return true
            }
        } else if (board[k] && k === 0) {
            if (board[k] === board[k+4] && board[k] === board[k+8]) {
                determineOutcome(board[k])
                return true
            }
        } else if (board[k] && k === 2) {
            if (board[k] === board[k+2] && board[k] === board[k+4]) {
                determineOutcome(board[k])
                return true
            }
        } else if (board[k] && k < 3) {
            if (board[k] === board[k+3] && board[k] === board[k+6]) {
                determineOutcome(board[k])
                return true
            }
            
        }
    }
    for (let j=0; j<board.length; j++) {
        if (!board[j]) {
            return false
        }
    }
    determineOutcome("c")
    return true
}

function determineOutcome(winner) {
    let header = document.querySelector("h1")
    if (winner === "c") {
        header.textContent = "It's a tie!"
    } else {
        header.textContent = `${winner} Wins!`
    }
}

