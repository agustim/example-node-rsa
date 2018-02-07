const NodeRSA = require('node-rsa');
const fs = require('fs')
const readline = require('readline');

var key = new NodeRSA(fs.readFileSync('private.pem'));


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  var decrypted = key.decrypt(line, 'utf8');
  console.log(decrypted);
})
