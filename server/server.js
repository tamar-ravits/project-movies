var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
var cors = require('cors')

var moviesRouter = require('./routes/movies');

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname + '/public')));

app.use('/movies', moviesRouter);
var port = process.env.PORT || '9000';
server.listen(port);
module.exports = app;
