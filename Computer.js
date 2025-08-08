const {Player} = require(`./Player.js`)

class Computer extends Player{
    constructor(name, typeOfChar){
        super(name, typeOfChar)
    }
}

module.exports = {
    Computer
}