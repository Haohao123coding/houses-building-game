// SPDX-License-Identifier: MIT
// Copyright (c) 2025 Haohao123coding

let wood = 0;
let brick = 0;
let stone = 0;

let money = 0;
let score = 0;

let startResource = 0;
let additionalResource = 0;
let difficulty = 0;

let curWood = 0;
let curBrick = 0;
let curStone = 0;

let remainingTime = 20;

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
            document.getElementById("difficulty-id").textContent = "简单";
            break;
        case 2: // 15 + 10 = 25 total
            startResource = 5;
            additionalResource = 10;
            document.getElementById("difficulty-id").textContent = "普通";
            break;
        case 3: // 9 + 5 = 14 total
            startResource = 3;
            additionalResource = 5;
            document.getElementById("difficulty-id").textContent = "困难";
            break;
        case 4: // 0 + 0 = 0 total
            startResource = 0;
            additionalResource = 0;
            document.getElementById("difficulty-id").textContent = "极难";
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

function renewStats(){
    document.getElementById("wood-id").textContent = wood;
    document.getElementById("brick-id").textContent = brick;
    document.getElementById("stone-id").textContent = stone;
    document.getElementById("money-id").textContent = money;
    document.getElementById("remaining-time").textContent = remainingTime;
    document.getElementById("score-id").textContent = score;
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
        return;
    };

    if(total < additionalResource){
        alert(`未将资源分配完成！`);
        return;
    };

    wood += values.wood;
    brick += values.brick;
    stone += values.stone;

    renewStats();

    document.querySelector(".allocate-board").style.display = "none";
    document.querySelector(".game-board").style.display = "block"; // [todo] flexbox (maybe no)
}

function showAnotherBoard(boardNum){
    document.querySelector(".game-main-board").style.display = "none";
    switch(boardNum){
        case 1:
            document.querySelector(".game-get-board").style.display = "block";
            break;
        case 2:
            document.querySelector(".game-market-board").style.display = "block";
            break;
    }
}

function backToMainBoard(){
    document.querySelector(".game-get-board").style.display = "none";
    document.querySelector(".game-market-board").style.display = "none";

    document.querySelector(".game-main-board").style.display = "block";
}

function getResource(typOf){
    if(remainingTime === 0){
        alert(`时间点不足，无法获得资源！`);
        return;
    }
    switch(typOf){
        case 1:
            wood += 1;
            break;
        case 2:
            brick += 1;
            break;
        case 3:
            stone += 1;
            break;
    }
    remainingTime -= 1;
    renewStats();
    backToMainBoard();
}

function showOneMarketBoard(boardNum){
    document.querySelector(".market-main-board").style.display = "none";
    document.querySelector(".market-buy-board").style.display = "none";
    document.querySelector(".market-sell-board").style.display = "none";
    switch(boardNum){
        case 1:
            document.querySelector(".market-main-board").style.display = "block";
            break;
        case 2:
            document.querySelector(".market-buy-board").style.display = "block";
            break;
        case 3:
            document.querySelector(".market-sell-board").style.display = "block";
            break;
    }
}
