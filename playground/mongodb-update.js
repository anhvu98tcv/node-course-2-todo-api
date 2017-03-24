// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb')

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err, db) =>{
  if (err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58d5362fd85e596be359a0ca')
  // }, {
  //   $set: {
  //   completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58d541f8d85e596be359a333')
  }, {
    $set : {
      name: 'Anh Vu'
    },
    $inc : {
      age:100
    }
  }, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });
  //db.close();
});
