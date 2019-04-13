const argv = require('yargs').array(['add', 'sub']).argv;
console.log(argv);
const validation = require('./validation');
const operations = require('./requires');

const { add, sub } = argv;


let mathOpe;
let numbers;

console.log(add);
if (add !== undefined) {
    mathOpe = 'add';
    numbers = add;
} else if (sub !== undefined) {
    mathOpe = 'sub';
    numbers = sub;
}
validation(...numbers);

const mathematicalOperation = operations[mathOpe];
const result = mathematicalOperation(...numbers);

console.log(result);

