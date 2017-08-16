var app = require('express')();
var server = require('http').Server(app);
var socket = require('socket.io')(server);
const mongo = require('./db');

const onRegistrate = require('./registraion');
const onLogin = require('./login');

mongo.connect();

server.listen(3100);

const activeUsers = 

socket.on('connection', (client) => {
    onRegistrate(client);
    onLogin(client);  
})

process.on('SIGINT', () => {
    mongo.close();
})
