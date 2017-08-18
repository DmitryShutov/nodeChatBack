const User = require('./models/user');
const onRegistrate = (socket) => {
    return socket.on('registrate', function(userData){
        const user = new User(userData);
        user.save();
        socket.emit('success'); 
    });
}

module.exports = onRegistrate;