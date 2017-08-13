var app = require('express')();
var server = require('http').Server(app);
var socket = require('socket.io')(server);
const mongo = require('./db');
mongo.connect();

server.listen(3100);

const activeUsers = [];

socket.on('connection', (client) => {
    onRegistrate(client);
    onLogin(client);  
})

process.on('SIGINT', () => {
    mongo.close();
})

const onRegistrate = (client) => {
    return client.on('registrate', function(userData){
        console.log(userData);   
    });
}

const onLogin = (client) => {
    return client.on('login', (credentials) => {
        console.log(credentials);
    })
}
