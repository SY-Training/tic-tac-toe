let board = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
];

function createBoard() {
    const divBoard = document.querySelector(".board");

    for (let i = 0; i < board.length; i++){

        let row = document.createElement("div");

        
        board.forEach(el => {
        
        let btn = document.createElement("button");
        let b = document.createTextNode(el[x]);
        btn.appendChild(b);
        row.appendChild(btn);
            
        })
        
        divBoard.appendChild(row);
    }
}

createBoard();