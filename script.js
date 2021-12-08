let board = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
];

let playerOneTurn = false;


(function createBoard() {
    const divBoard = document.querySelector(".board");

    for (let i = 0; i < board.length; i++){

        let row = document.createElement("div");

        for (let j = 0; j < board[i].length; j++){
            let btn = document.createElement("button");
            btn.id = `${i}${j}`;
            let b = document.createTextNode(board[i][j]);
            btn.appendChild(b);
            row.appendChild(btn);
        }

        divBoard.appendChild(row);
    }
})();

(function addListeners() {
    const butts = document.querySelectorAll('button');
    let len = butts.length;

    for (let i = 0; i < len; i++) {
        butts[i].addEventListener('click', play);       
    }
})();

function play(e){
    console.log(e.currentTarget.id);
    let btn = document.getElementById(e.currentTarget.id)
    let ifPlayed = btn.textContent
    let str = e.currentTarget.id.split("")
    if (ifPlayed != "X" && ifPlayed != "O"){
    
        if (playerOneTurn === true){
            btn.textContent = "X";
            playerOneTurn = false;
            board[str[0]][str[1]] = "X";
        }   

        else {
            btn.textContent = "O"; 
            playerOneTurn = true;
            board[str[0]][str[1]] = "O";
        }
    }

    else{
        console.log("turn already used");
    }

}


function CheckWinner() {
    let P1 = "X";
    let P2 = "O";

    
}

const Player = (name) => {
    
}
