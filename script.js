let board = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
];




function createBoard() {
    const divBoard = document.querySelector(".board");

    for (let i = 0; i < board.length; i++){

        let row = document.createElement("div");

        for (let j = 0; j < board[i].length; j++){
            let btn = document.createElement("button");
            let b = document.createTextNode(board[i][j]);
            btn.appendChild(b);
            row.appendChild(btn);
        }

        divBoard.appendChild(row);
    }
}

createBoard();

addListeners();



function addListeners() {
    const butts = document.querySelectorAll('button');
    let len = butts.length;

    for (let i = 0; i < len; i++) {
        butts[i].addEventListener('click', play);       
    }
}

function play(){
    console.log("HIIIII");
}

