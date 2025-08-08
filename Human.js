const {Player} = require(`./Player.js`)

class Human extends Player{
    constructor(name, typeOfChar){
        super(name, typeOfChar)
    }
}

module.exports = {
    Human
}