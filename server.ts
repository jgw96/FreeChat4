/// <reference path="typings/node/node.d.ts" />

const express = require("express");
const app = express();
const port: number = 8080;

app.use(express.static(__dirname + '/public'));
app.use("/modules/", express.static(__dirname + "/node_modules"))

const io: any = require('socket.io').listen(app.listen(process.env.PORT || port));

io.sockets.on('connection', (socket: any) => {
    //this happens whenever a user connects to the chat
    console.log("user connected");
    socket.emit('newUser');
    
    socket.broadcast.emit("userLogged");
    
    //this happens when a user has sent out a message
    socket.on('send', (data: Object) => {
        //send the message to everyone, including myself
        io.sockets.emit('message', data);
        
        socket.broadcast.emit("messageAdded", data);
    });
});

const news: any = io.of("/News");

news.on("connection", (socket: any) => {
    console.log("Someone connected to news");
    
    socket.emit("newNewsUser");
    
    socket.broadcast.emit("newsUserLogged");
    
    socket.on("newsSend", (data: Object) => {
        news.emit("newsMessage", data);
        
        socket.broadcast.emit("newsMessageAdded", data);
    })
})

const firefoxOS: any = io.of("/FirefoxOS");

firefoxOS.on("connection", (socket: any) => {
    console.log("Someone connected to Firefox OS");
    
    socket.emit("newFirefoxOSUser");
    
    socket.broadcast.emit("firefoxOSUserLogged");
    
    socket.on("firefoxOSSend", (data: Object) => {
        firefoxOS.emit("firefoxOSMessage", data);
        
        socket.broadcast.emit("firefoxOSMessageAdded", data);
    })
})

const sports: any = io.of("/Sports");

sports.on("connection", (socket: any) => {
    console.log("Someone connected to Sports");
    
    socket.emit("newSportsUser");
    
    socket.broadcast.emit("sportsUserLogged");
    
    socket.on("sportsSend", (data: Object) => {
        sports.emit("sportsMessage", data);
        
        socket.broadcast.emit("sportsMessageAdded", data);
    })
})


console.log("Listening on port " + port);