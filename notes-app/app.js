// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'This file was created by node.js!');
// fs.appendFileSync('notes.txt', 'data to append');

// const add = require('./utils.js');
// const getNotes = require('./notes.js');

// console.log(add(1, 2));

// const notes = getNotes();
// console.log(notes);

const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding note!');
    }
});

//Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing the note!');
    }
});

//Create list command
yargs.command({
    command:'list',
    describe:'List notes',
    handler: () => {
        console.log('Listing the notes!');
    }
});

//Create read command
yargs.command({
    command:'read',
    describe:'Read notes',
    handler: () => {
        console.log('Reading the notes!');
    }
});
console.log(yargs.argv);