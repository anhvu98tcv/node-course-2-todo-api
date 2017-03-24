// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb')

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err, db) =>{
  if (err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) =>{
  //   if (err) {
  //     return console.log('Unable to insert to do', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Anh Vu',
  //   age: 24,
  //   location: 'Ha Noi'
  // }, (err, result) =>{
  //   if (err) {
  //       return console.log('Unable to insert to do', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined,2));
  //     console.log(result.ops[0]._id);
  //     console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
