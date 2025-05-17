// SPDX-License-Identifier: MIT
// Copyright (c) 2025 Haohao123coding

let wood = 0;
let brick = 0;
let stone = 0;
let money = 0;
let startResource = 0;
let additionalResource = 0;

function showDifficulty(){
    document.querySelector(".difficulty-board").style.display = "block";
    document.querySelector(".start-board").style.display = "none";
}

function backToStart(){
    document.querySelector(".start-board").style.display = "block";
    document.querySelector(".difficulty-board").style.display = "none";
}

function readyGame(difficulty){
    switch(difficulty){
        case 1: // 30 + 15 = 45 total
            startResource = 10;
            additionalResource = 15;
            break;
        case 2: // 15 + 10 = 25 total
            startResource = 5;
            additionalResource = 10;
            break;
        case 3: // 9 + 5 = 14 total
            startResource = 3;
            additionalResource = 5;
            break;
        case 4: // 0 + 0 = 0 total
            startResource = 0;
            additionalResource = 0;
            break;
    }
    wood = startResource;
    brick = startResource;
    stone = startResource;
    money = startResource;

    document.querySelector(".start-board").style.display = "none";
    document.querySelector(".difficulty-board").style.display = "none";

    document.querySelector(".allocate-board").style.display = "block";
    document.getElementById("start-resource").textContent = startResource;
    document.getElementById("additional-resource").textContent = additionalResource;
}

function endAllocate(){
    const values = {
        wood: document.getElementById("wood").value,
        brick: document.getElementById("brick").value,
        stone: document.getElementById("stone").value
    }

    for (const [key, value] of Object.entries(values)){
        if(!value || value.trim() === ""){
            alert(`值不能为空！`);
            return;
        }
    }

    additionalWood = parseInt(document.getElementById("wood").value)
    additionalBrick = parseInt(document.getElementById("brick").value)
    additionalStone = parseInt(document.getElementById("stone").value)

    wood += startResource;
    brick += startResource;
    stone += startResource;
}