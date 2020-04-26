const fs = require('fs')

const book = {
  title: 'Gardens of the Moon',
  author: 'Steven Erikson'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

fs.writeFileSync('1-json.json', bookJSON);

const parsedBook = JSON.parse(bookJSON);
console.log(parsedBook.author);

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
const data = JSON.parse(dataJSON);
console.log(data);