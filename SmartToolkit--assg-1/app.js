const isEven = require('./modules/isEven.js')
const log = require('./modules/logger.js')
log('<------Starting Module Demo----------->')

const num = 78;
if (isEven(num)) {
    log(`${num} is Even`);
} else {
    log(`${num} is Odd`)
}