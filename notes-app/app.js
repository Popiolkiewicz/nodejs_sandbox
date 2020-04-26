// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'This file was created by node.js!');
// fs.appendFileSync('notes.txt', 'data to append');

// const add = require('./utils.js');
const notes = require('./notes.js');

// console.log(add(1, 2));

// const notes = getNotes();
// console.log(notes);

const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log('Adding note:', argv);
    // console.log('Title:', argv.title);
    // console.log('Body: ', argv.body);
    notes.addNote(argv.title, argv.body);
  }
});

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Title of the note to be removed',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log('Removing the note!');
    notes.removeNote(argv.title);
  }
});

//Create list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler() {
    // console.log('Listing the notes!');
    notes.listNotes();
  }
});

//Create read command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  builder: {
    title: {
      describe: 'Title of the note to be red',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log('Reading the notes!');
    notes.readNote(argv.title)
  }
});

// console.log(yargs.argv);
yargs.parse();