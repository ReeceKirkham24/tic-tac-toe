const { Player } = require('./Player.js')
const { Human } = require(`./Human.js`)

let grid = [
    [0,"X",0],
    [0,"X",0],
    [0,"X",0]
]

const prompt = require('prompt-sync')()

function editGrid(x,y,arg){
    grid[y][x] = arg
}

function winCondition(playerOne, playerTwo){
    let x = playerOne.typeOfChar
    let y = playerTwo.typeOfChar
    for(let i = 0; i < 3; i++){
        if(grid[i] == [x,x,x]){
            console.log("Player One Wins!");
            break
        }
        else if (grid[i] == [y,y,y]){
            console.log("Player Two Wins");
            break
        }
        else if(grid[0][i] == x && grid[1][i] == x && grid[2][i] == x){
            console.log("Player One Wins!");
            break
        }
        else if(grid[0][i] == y && grid[1][i] == y && grid[2][i] == y){
            console.log("Player One Wins!");
            break
        }
    }
    if((grid[0][0] == x && grid[1][1] == x && grid[2][2] == x) || (grid[0][2] == x && grid[1][1] == x && grid[2][0] == x)){
        console.log("Player One Wins!");
    }
    else if((grid[0][0] == y && grid[1][1] == y && grid[2][2] == y) || (grid[0][2] == y && grid[1][1] == y && grid[2][0] == y)){
        console.log("Player Two Wins!");
    }
}

let running = true

while(running){
    let playerOne = new Human()
    let answer = prompt("Do you want to go first? Y/N " )
    if(answer.toLowerCase() == "y"){
        playerOne.typeOfChar = "X"
    }
    else{
        playerOne.typeOfChar = "O"
    }

    answer = prompt("Choose your first X position! row column ")
    let x = answer.split(" ")[0]
    let y = answer.split(" ")[1]
    editGrid(x, y, playerOne.typeOfChar) 
    console.log(grid)

    winCondition(playerOne,playerOne)

    answer = prompt("Do you want to quit? Y/N ")
    if(answer.toLowerCase() == "y"){
        running = false
    }
}

