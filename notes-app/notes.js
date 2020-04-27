const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicates = notes.filter((element) => title === element.title);
  const duplicate = notes.find((element) => title === element.title);

  debugger
  
  if (duplicate) {
    console.log('Note title taken!');
    return;
  }

  notes.push({
    title: title,
    body: body
  });

  saveNotes(notes);
  console.log('Note added!');
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const removeNote = (title) => {
  const notes = loadNotes();
  const notesWithoutGivenTitle = notes.filter((element) => title !== element.title);
  if (notes.length > notesWithoutGivenTitle.length) {
    console.log(chalk.green.inverse('Note deleted!'));
    saveNotes(notesWithoutGivenTitle);
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const listNotes = () => {
  console.log('Your notes: ');
  const notes = loadNotes();
  notes.forEach(element => console.log(element.title));
}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((element) => element.title === title);
  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Error - note not found!'));
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}