const crypto = require('crypto')

function rollDice() {
    const random = crypto.randomInt(1, 7)
    return random
}
console.log('Rolling dice 5 times ....\n');
for (let i = 1; i <= 5; i++) {
    const result = rollDice()
    console.log('Dice Rolled :', result);

}