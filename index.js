var express = require('express');
var app = express();
var server = require('http').Server(app);

// Use correct file directory
app.use(express.static(__dirname + '/My_Game'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
 
server.listen(8080, function () {
  console.log(`Listening on ${server.address().port}`);
});