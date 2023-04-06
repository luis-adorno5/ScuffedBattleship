let cols = 10;
let rows = 10;
let playerTurn = true;
let playerGrid = [];
let computerGrid = [];

function initialize2DArray(cols, rows){
    var arr = new Array(cols);
    for(var i = 0; i<arr.length; i++){
        arr[i] = new Array(rows);
    }
    return fillArray(arr);
}

function fillArray(arr){
    count = 1;
    for(var i = 0; i<arr.length; i++){
        for(var j = 0; j<arr[i].length; j++){
            arr[i][j] = {
                id: count,
                isShip: false,
                isShot: false
            };
            count++;
        }
    }
    console.log(arr);
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
        opponentSquare.setAttribute("onclick", "onPlayerTouch(this.id);");
        document.getElementById('OpponentBoard').appendChild(opponentSquare);
    }
}

function onPlayerTouch(id){
    document.querySelector('#OpponentBoard')
    .querySelector('#1')
    .hidden = true;
    console.log("Touched element with id: " + id);
}

function checkCell(id){

}

function initializeGame(){
    playerGrid = initialize2DArray(cols, rows);
    computerGrid = initialize2DArray(cols, rows);
    displayBoard();
}

initializeGame();