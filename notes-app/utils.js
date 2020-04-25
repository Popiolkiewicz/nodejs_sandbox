const validator = require('validator');
const chalk = require('chalk');

console.log('utils.js');

const name = 'Mike';

console.log(validator.isEmail('hpop@example.pl'));
console.log(validator.isEmail('hpopexample.pl'));
console.log(validator.isURL('https:/asdf.pl'));

console.log(chalk.green.inverse('Success!'));

console.log(process.argv);

const command = process.argv[2];
if (command === 'add') {
    console.log('Adding note!');
} else if (command === 'remove') {
    console.log('Removing');
}

const add = (a, b) => a + b;

module.exports = add;