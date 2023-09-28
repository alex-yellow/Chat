const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
    socket.on('chat message', function(data){
        io.emit('chat message', {message: data.message, name:data.name})
    });
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

server.listen(3000, function(){
    console.log('server is start');
});