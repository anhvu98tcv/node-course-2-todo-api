// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb')

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err, db) =>{
  if (err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58d4e55174533a0f14310bec')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch dotos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count:  ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch dotos', err);
  // });

  db.collection('Users').find({name: 'Anh Vu'})
    .toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined,2));
    } , (err) => {
      console.log('Unable to fetch Users', err);
    })

  //db.close();
});
