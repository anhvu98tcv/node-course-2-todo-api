// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb')

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err, db) =>{
  if (err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // });
  //
  // deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
  //   console.log(result);
  // });
  //
  // db.collection('Users').deleteMany({name: 'Anh Vu'}).then((result) =>{
  //   console.log(result);
  // });
  //
  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("58d4e677034a5127e8ffbe62")
  // }).then((result) =>{
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  // db.collection('Users').deleteMany({name: 'Anh Vu'}).then((result) =>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("58d4e677034a5127e8ffbe62")
  }).then((result) =>{
    console.log(JSON.stringify(result, undefined, 2));
  });
  //db.close();
});
