var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./server/routes');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

routes.registerRoutes(app);

module.exports = app;
