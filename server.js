var express = require("express");
var app = express();
var port = 3700;

app.use(express.static(__dirname + '/public'));
app.use("/modules/", express.static(__dirname + "/node_modules"))

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
    //this happens whenever a user connects to the chat
    console.log("user connected");
    socket.emit('newUser');
    
    socket.broadcast.emit("userLogged");
    
    //this happens when a user has sent out a message
    socket.on('send', function (data) {
        //send the message to everyone, including myself
        io.sockets.emit('message', data);
        
        socket.broadcast.emit("messageAdded", data);
    });
});

var news = io.of("/News");

news.on("connection", function(socket) {
    console.log("Someone connected to news");
    
    socket.emit("newNewsUser");
    
    socket.broadcast.emit("newsUserLogged");
    
    socket.on("newsSend", function(data) {
        news.emit("newsMessage", data);
        
        socket.broadcast.emit("newsMessageAdded", data);
    })
})


console.log("Listening on port " + port);