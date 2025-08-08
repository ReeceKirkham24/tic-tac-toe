const { Player } = require('./Player.js')
const { Human } = require(`./Human.js`)

let grid = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

const prompt = require('prompt-sync')()

function editGrid(x,y,arg){
    grid[y][x] = arg
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

    editGrid(1,1,playerOne.typeOfChar)

    console.log(grid);
    console.log(grid[1][1]);


    answer = prompt("Do you want to quit? Y/N ")
    if(answer.toLowerCase() == "y"){
        running = false
    }
}