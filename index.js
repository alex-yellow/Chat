const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(http);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});



server.listen(3000, function(){
    console.log('server is start');
});