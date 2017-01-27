// NPM Modules import
var express = require('express');
var hbs = require('hbs');
var fs = require('fs');

// Modules from node
var path = require('path')

var app = express();

// Import from files
var routes = require('./routes');

// Setting handlebars to render files
app.set('views', path.join(__dirname, '/../public'));
app.set('view engine', 'hbs');

// Setting handlebars partials
hbs.registerPartials(__dirname + '/../public/partials');
hbs.registerPartial('header', fs.readFileSync(__dirname + '/../public/partials/header.hbs', 'utf8'));
hbs.registerPartial('footer', fs.readFileSync(__dirname + '/../public/partials/footer.hbs', 'utf8'));

// Makes every files in public/ visible by the express server
app.use(express.static(path.join(__dirname, '/../public')));

// Routes set up
app.use(routes);

// Enables Heroku Outbound or 3000 local port
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
