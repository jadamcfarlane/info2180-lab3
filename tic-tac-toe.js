window.addEventListener('DOMContentLoaded', function(){

    const board = document.getElementById('board');

    const squares = board.querySelectorAll('div');


    let firstPlayer = "X"
    let isGameState = true;

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
            if (inputCells[index] == '' && isGameState){
                square.textContent = firstPlayer;
                square.classList.add(firstPlayer);
                inputCells[index] = firstPlayer;

                winnerCheck();

                firstPlayer = firstPlayer == 'X' ? 'O' : 'X';
            }

        });

    });

    function winnerCheck(){
        let roundWon = false;

        for (let i = 0; i <= 7; i++){
            const checkWin = conditionWin[i];
            let a = inputCells[checkWin[0]];
            let b = inputCells[checkWin[1]];
            let c = inputCells[checkWin[2]];

            if (a == '' || b == '' || c == '') {
                continue;
            }

            if (a == b && b == c){
                roundWon = true;
                break
            }
        }
        
        if (roundWon){
            const status = document.getElementById('status');
            status.innerHTML = `Congratulations! ${firstPlayer} is the Winner!`;
            status.classList.add('you-won');
            isGameState = false;
        }

    }

});