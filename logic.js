let player1 = true;
const WIN_COMBS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cells = document.querySelectorAll('.cell');
const msgEl = document.getElementById('winMsg');

cells.forEach(cell => {
    cell.addEventListener('click', (cell) => {
        if (cell.target.innerText === '') {
            if (player1) {
                cell.target.innerText = 'X';
                if(checkWinner('X')){
                    msgEl.innerText = "X Won!";
                    document.getElementById('table').classList.add('over');
                    document.getElementById('gameOver').classList.remove('hide');
                }
                player1 = !player1;
            }
            else {
                cell.target.innerText = 'O';
                if(checkWinner('O')){
                    msgEl.innerText = "O Won!";
                    document.getElementById('table').classList.add('over');
                    document.getElementById('gameOver').classList.remove('hide');
                }
                player1 = !player1;
            }
        }
        if(checkDraw()){
            msgEl.innerText = "Draw!";
            document.getElementById('table').classList.add('over');
            document.getElementById('gameOver').classList.remove('hide');
        }
    })
});
function checkDraw(){
    for(let cell of cells){
        if(cell.innerText == '') return false;
    }
    return true;
}

function checkWinner(player) {
    return WIN_COMBS.some(combination => {
        return combination.every(index => {
            return cells[index].innerHTML == player;
        })
    })
}

function startGame(){
    cells.forEach(cell => cell.innerHTML = '');
    document.getElementById('table').classList.remove('over');
    document.getElementById('gameOver').classList.add('hide');

}