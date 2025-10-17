window.addEventListener('DOMContentLoaded', function(){

    const board = document.getElementById('board');

    const squares = board.querySelectorAll('div');

    squares.forEach(function(square){
        
        square.classList.add('square');

        square.addEventListener('mouseover', function(e){
            e.target.classList.add('hover');
        });

        square.addEventListener('mouseout', function(e){
            e.target.classList.remove('hover');
        });
    })

})