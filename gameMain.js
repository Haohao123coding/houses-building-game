// SPDX-License-Identifier: MIT
// Copyright (c) 2025 Haohao123coding

let wood = 0;
let brick = 0;
let stone = 0;

let money = 0;

let startResource = 0;
let additionalResource = 0;
let difficulty = 0;

let curWood = 0;
let curBrick = 0;
let curStone = 0;

function showDifficulty(){
    document.querySelector(".difficulty-board").style.display = "block";
    document.querySelector(".start-board").style.display = "none";
}

function backToStart(){
    document.querySelector(".start-board").style.display = "block";
    document.querySelector(".difficulty-board").style.display = "none";
}

function readyGame(difficulty_){
    difficulty = difficulty_;
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

    document.getElementById("cur-wood").textContent = curWood;
    document.getElementById("cur-brick").textContent = curBrick;
    document.getElementById("cur-stone").textContent = curStone;
}

function allocateAddResource(typ){
    switch(typ){
        case 1:
            curWood += 1;
            break;
        case 2:
            curBrick += 1;
            break;
        case 3:
            curStone += 1;
            break;
    }
    document.getElementById("cur-wood").textContent = curWood;
    document.getElementById("cur-brick").textContent = curBrick;
    document.getElementById("cur-stone").textContent = curStone;
}

function allocateMinusResource(typ){
    switch(typ){
        case 1:
            if(curWood === 0) break;
            curWood -= 1;
            break;
        case 2:
            if(curBrick === 0) break;
            curBrick -= 1;
            break;
        case 3:
            if(curStone === 0) break;
            curStone -= 1;
            break;
    }
    document.getElementById("cur-wood").textContent = curWood;
    document.getElementById("cur-brick").textContent = curBrick;
    document.getElementById("cur-stone").textContent = curStone;
}

function endAllocate(){
    
    const values = {
        wood: parseInt(curWood),
        brick: parseInt(curBrick),
        stone: parseInt(curStone)
    }

    let total = 0;

    total += values.wood;
    total += values.brick;
    total += values.stone;

    if(total > additionalResource){
        alert(`分配超出限制！`);
    };

    if(total < additionalResource){
        alert(`未将资源分配完成！`);
    };

    wood += values.wood;
    brick += values.brick;
    stone += values.stone;
}
