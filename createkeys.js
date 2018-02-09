const NodeRSA = require('node-rsa');

var key = new NodeRSA();

key.generateKeyPair(2048);

console.log(key.exportKey());
