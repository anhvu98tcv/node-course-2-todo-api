const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);

// console.log(token);
// var message = "I'm number 3";
// var hash = SHA256(message).toString();
//
// console.log(message);
// console.log(hash);
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'key').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'key').toString();
//
// if (resultHash === token.hash) {
//   console.log("Data was not change");
// } else {
//   console.log("Data change");
// }