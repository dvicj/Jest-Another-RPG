function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() *this.types.length)]; //10.1.7 - if no name give, choose a random name from the "types" array 

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30); //if health is chosen 
    } else {
        this.value = Math.floor(Math.random() * 5 + 7); //if anyother potion type is chosen
    }
};

module.exports = Potion;