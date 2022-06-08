var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
var cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname + '/public')));
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/build', 'index.html'));
//   });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
var port = process.env.PORT || '9000';
server.listen(port);
module.exports = app;
