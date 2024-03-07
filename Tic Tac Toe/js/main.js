console.log('Your JS is linked up. Be the person you needed when you were little.');

/*----- constants -----*/
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]            // diagonals
];

/*----- app's state (variables) -----*/
let board;
let turn = 'X';

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2'); // Assuming you'll use h2 to display messages.

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', init); // Add this to reset the game.

/*----- functions -----*/
function init() {
    board = ['', '', '', '', '', '', '', '', '']; // Reset the board
    turn = 'X'; // Start with player 'X'
    document.getElementById('board').addEventListener('click', handleTurn, { once: false }); // Re-enable click events on the board
    render(); // Update the UI based on the reset state
    messages.textContent = `It's ${turn}'s turn!`; // Reset the message
}


function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark; // Update square content based on board state
    });
    messages.textContent = `It's ${turn}'s turn!`; // Update turn message
}

function getWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    if (!board.includes('')) {
        return 'T'; // Indicates a tie
    }
    return null; // No winner yet
}

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    if (board[idx] === '') { // Only allow marking empty squares
        board[idx] = turn;
        const winner = getWinner();
        if (winner) {
            messages.textContent = winner === 'T' ? `It's a tie!` : `${winner} wins the game!`;
            // Optionally disable further clicks if the game is over
            document.getElementById('board').removeEventListener('click', handleTurn);
        } else {
            turn = turn === 'X' ? 'O' : 'X'; // Toggle turn
            render(); // Update the board UI
        }
    }
}

// Call init function to initiate the game
init();
