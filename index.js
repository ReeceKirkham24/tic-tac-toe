const {Human} = require(`./Human.js`)
const { Player } = require('./Player.js')

let grid = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

const prompt = require('prompt-sync')()

function editGrid(x,y,arg){
    grid[y][x] = arg
}

// editGrid(1,1,"O")

// console.log(grid);
// console.log(grid[1][1]);

let running = true

while(running){
    let playerOne = new Player()
    let answer = prompt("Do you want to go first? Y/N ")
    if(answer.toLowerCase() == "y"){
        playerOne.typeOfChar = "X"
    }
    answer = prompt("Choose your first X position! row column ")
    let x = answer.split(" ")[0]
    let y = answer.split(" ")[1]
    editGrid(x, y, "X") 
    console.log(grid)
    


    answer = prompt("Do you want to quit? Y/N ")
    if(answer.toLowerCase() == "y"){
        running = false
    }
}

