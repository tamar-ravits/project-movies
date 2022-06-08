var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
var http = require('http');
var server = http.createServer(app);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');

var port = process.env.PORT || '3000';

server.listen(port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);



module.exports = app;
