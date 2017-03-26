const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "58d69a30d44540cc1ebcf0ad";
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// };
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch ((e) =>{
//   console.log(e);
// });

var email = 'anhvu869492@gmail.com';

User.find({
  email: 'anhvu869492@gmail.com'
}).then( (users) => {
  console.log(users);
});

User.findOne({
  email: 'anhvu869492@gmail.com'
}).then( (users) => {
  console.log(users);
});

User.findById('58d5df3867688f941e85405a').then((user) =>{
  if (!user){
      return console.log('Id not found');
    }
    console.log('User by Id', user);
}).catch((e) =>{
  console.log(e);
});
