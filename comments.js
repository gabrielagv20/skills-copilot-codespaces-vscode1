// Create web server
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cookieParser());

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Create HTTP server

http.listen(port, function() {
  console.log('listening on *:' + port);
});