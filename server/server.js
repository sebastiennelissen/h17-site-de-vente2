// NPM Modules import
var express = require('express');

// Modules from node
var path = require('path')

var app = express();

// Makes every files in public/ visible by the express server
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', function (req, res) {
	// Can send directly index.html because of express.static
	res.sendFile('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
