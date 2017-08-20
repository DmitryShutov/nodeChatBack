var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const mongo = require('./db');

const registration = require('./registraion');
const login = require('./login');
const usersList = require('./usersList');

mongo.connect();

this.currentUsers = [];

server.listen(3100);

io.on('connection', (socket) => {
    registration.onRegistrate(socket);
    login.onLogin(socket);
    socket.on('users', (socket) => {
        console.log(socket)
        const list = usersList.getUsersList(socket.emit('users', list));
        console.log(list);
    })
})

process.on('SIGINT', () => {
    mongo.close();
})
