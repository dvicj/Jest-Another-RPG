const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
        //10.5.6 - call parent constructor here 
        super(name); //10.5.6 - passes name argument to the constructor of the character class

        this.weapon = weapon;
        this.potion = new Potion();
  
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }    
};


module.exports = Enemy; 