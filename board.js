let fps = 60;
let cols = 10;
let rows = 10;
let playerTurn = true;
let playerShips = 5;
let computerShips = 5;
let playerGrid = [];
let computerGrid = [];

let isGameOver = false;

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
    if(playerTurn == true){
        checkCell(id);
        playerTurn = false;
        console.log("The player made a move!");
    }else{
        console.log("It is not your turn!");
    }
}

function checkCell(id){
    for(var i = 0; i<computerGrid.length; i++){
        for(var j = 0; j<computerGrid[i].length; j++){
            let cell = computerGrid[i][j];
            if(id == cell.id){
                if(cell.isShot == true){
                    console.log("You have already shot this cell, select another one!");
                }else{
                    cell.isShot == true;
                }
            }
        }
    }
}

function initializeGame(){
    playerGrid = initialize2DArray(cols, rows);
    computerGrid = initialize2DArray(cols, rows);
    displayBoard();
}

initializeGame();

//Start of the Game Loop
window.onload = () => {
    console.log("Game Loop!");
    loop = setInterval(() => {
        update();
    }, 1000/fps);
};

function update(){
    if(!isGameOver){
        if(!playerTurn){
            computerMove();
        } else if(playerShips == 0 || computerShips == 0){
            isGameOver = true;
        }
    }
    else { 
        clearInterval(loop);
    }
}

function computerMove(){
    let randomRow = Math.floor(Math.random() * rows);
    let randomColumn = Math.floor(Math.random() * cols);
    let cell = playerGrid[randomRow][randomColumn];

    if(!cell.isShot) {
        cell.isShot = true;
        playerTurn = true; 
        console.log("The computer made a move!");  
    }
}

/* 
    [0 0 0 1 1 1 1]
    [0 0 0 0 0 0 0]
    [0 0 0 0 0 0 0]
    [0 0 0 0 0 0 0]
*/