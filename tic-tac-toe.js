window.addEventListener('DOMContentLoaded', function(){

    const board = document.getElementById('board');

    const status = document.getElementById('status');

    const squares = board.querySelectorAll('div');

    const newgame = document.querySelector('.btn');

    let firstPlayer = "X"
    let isGameState = false

    const inputCells = [ '', '', '',
                         '', '', '',
                         '', '', '', ] 

    const conditionWin = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    squares.forEach(function(square, index){

        square.classList.add('square');

        square.addEventListener('mouseover', function(e){
            e.target.classList.add('hover');
        });

        square.addEventListener('mouseout', function(e){
            e.target.classList.remove('hover');
        });

        square.addEventListener('click', function(){
            if (inputCells[index] == ''){
                square.textContent = firstPlayer;
                square.classList.add(firstPlayer);
                inputCells[index] = firstPlayer;

                firstPlayer = firstPlayer == 'X' ? 'O' : 'X';
            }

        });
    });

});