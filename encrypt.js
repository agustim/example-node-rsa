const NodeRSA = require('node-rsa');
const fs = require('fs')

var key = new NodeRSA(fs.readFileSync('private.pem'));

var text = 'Hello RSA!';
var encrypted = key.encrypt(text, 'base64');
console.log(encrypted);
