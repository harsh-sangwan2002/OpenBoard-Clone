const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 3000;

app.use(express.static("public"));

const server = app.listen(port, () => {

    console.log("Listening on port 3000.");
})

let io = socket(server);

io.on("connection", (socket) => {

    console.log("Made socket connection");

    socket.on("beginPath", (data) => {

        io.sockets.emit("beginPath", data);
    })

    socket.on("drawStroke", data => {

        io.sockets.emit("drawStroke", data);
    })

    socket.on("redoUndo", data => {

        io.sockets.emit("redoUndo", data);
    })
})