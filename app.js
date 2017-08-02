const app = require('http').createServer();
const socket = require('socket.io')(app);

app.listen(3100);

socket.on('connection', () => {
    console.log('connect');
})




