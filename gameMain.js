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
    const ans = {};

    for(const [key, val] of Object.entries(values)){
        if(!val || val.trim() === ""){
            alert(`${key}值不能为空！`);
            return;
        }
    }

    for(const [key, val] of Object.entries(values)){
        const cur = parseInt(val);
        if(isNaN(cur) || !Number.isInteger(cur) || cur.toString() !== val.trim()){
            alert(`值必须是整数！`);
            return;
        }
        ans[key] = cur;
    }
document.querySelector(".start-board").style.display = "block";
    for(const val of Object.values(values)){
        if(val < 0){
            alert(`值不能为负数！`);
            return;
        }
    }

    const total = Object.values(ans).reduce((summ, v) => summ + v, 0); // 求和

    if(total > additionalResource){
        alert(`分配超出限制！`);
    };

    if(total < additionalResource){
        alert(`未将资源分配完成！`);
    };

    wood += ans.wood;
    brick += ans.brick;
    stone += ans.stone;

    document.querySelector(".start-board").style.display = "block";
}