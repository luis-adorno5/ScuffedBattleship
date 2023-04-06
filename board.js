let cols = 10;
let rows = 10;
let playerGrid = [];
let computerGrid = [];

function initialize2DArray(cols, rows){
    var arr = new Array(cols);
    for(var i = 0; i<arr.length; i++){
        arr[0] = new Array(rows);
    }
    return arr;
}

function displayBoard(){
    for(var i = 1; i<cols*rows+1; i++){
        var playerSquare = document.createElement("div");
        playerSquare.className = "square";
        playerSquare.id = i;
        document.getElementById('PlayerBoard').appendChild(playerSquare);

        var opponentSquare = document.createElement("div");
        opponentSquare.className = "square";
        opponentSquare.id = i;
        document.getElementById('OpponentBoard').appendChild(opponentSquare);
    }
}

function initializeBoard(){
    playerGrid = initialize2DArray(cols, rows);
    computerGrid = initialize2DArray(cols, rows);
    displayBoard();
}

initializeBoard();