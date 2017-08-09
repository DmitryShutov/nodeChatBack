const app = require('http').createServer();
const mongo = require('./db');
const socket = require('socket.io')(app);
mongo.connect();
//app.listen(3100);

socket.on('connection', () => {
    console.log('connect to socket');
})

mongo.db.on('connected', () => console.log('connect'));
