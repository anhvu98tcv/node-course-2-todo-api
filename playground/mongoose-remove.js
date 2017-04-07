const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then( (result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()
Todo.findOneAndRemove({_id:"58e7ac2c672e22fc101791f4"}).then( (todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('58e7ac2c672e22fc101791f4').then( (todo) => {
  console.log(todo);
});
