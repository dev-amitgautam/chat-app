const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const appServer = http.createServer(app);
const io = new Server(appServer)

// Socket.io
io.on('connection', (socket) => {
    console.log("A new user have connected ", socket.id)
    socket.on('user-message', (message) => {
        io.emit('message', message)
        console.log(socket.id, ':', message);
    })
});

app.use(express.static('public'));

appServer.listen(9000, () => console.log(`Server started at port 9000`));