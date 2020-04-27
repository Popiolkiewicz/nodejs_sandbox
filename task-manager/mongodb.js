const { MongoClient, ObjectID } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }

  const db = client.db(databaseName);

  // db.collection('users').insertOne({
  //   name: 'Hubert',
  //   age: '128'
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user');
  //   }

  //   console.log(result.ops);
  // });

  db.collection('users').insertMany([
    {
      description: 'Clean the house',
      completed: true
    }, {
      description: 'Renew inspection',
      completed: false
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert tasks!')
    }

    console.log(result.ops)
  });

  const id = new ObjectID();
  console.log(id);
});