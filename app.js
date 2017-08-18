var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const mongo = require('./db');

const onRegistrate = require('./registraion');
const onLogin = require('./login');

mongo.connect();

server.listen(3100);

const activeUsers = 

io.on('connection', (socket) => {
    onRegistrate(socket);
    onLogin(socket);  
})

process.on('SIGINT', () => {
    mongo.close();
})
