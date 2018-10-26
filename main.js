console.log("Application Start");
var express = require('express');
var app = express();
var port = 8081;

app.get('/home/', function(req, res){
    res.sendfile('./public/home/index.html');
});

app.get('/remote/', function(req, res){
    res.sendfile('./public/remote/index.html');
});

app.listen(port, function(){
    console.log('listening on *:' + port);
});