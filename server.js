var express = require('express');
var app = express();

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(__dirname)); //  "public" off of current is root

app.listen(3000);
console.log('Listening on port 3000');