let playerStats = {
    wood: 0,
    brick: 0,
    sand: 0,
    money: 0
}

function showDifficulty(){
    document.querySelector(".difficulty-board").style.display = "block";
    document.querySelector(".start-board").style.display = "none";
}

function backToStart(){
    document.querySelector(".start-board").style.display = "block";
    document.querySelector(".difficulty-board").style.display = "none";
}

function startGame(difficulty){
    let startResource;
    switch(difficulty){
        case 1:
            startResource = 10;
        case 2:
            startResource = 5;
        case 3:
            startResource = 3;
        case 4:
            startResource = 0;
    }
    wood = startResource;
    brick = startResource;
    sand = startResource;
    money = startResource;

    document.querySelector(".start-board").style.display = "none";
    document.querySelector(".difficulty-board").style.display = "none";

    document.querySelector(".allocate-board").style.display = "block";
}