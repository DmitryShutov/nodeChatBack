const User = require('./models/user');
const onLogin = (socket) => {
    return socket.on('login', (credentials) => {
        User.findOne({login: credentials.login, password: credentials.password}, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                // add auth token next
                socket.emit('login', {result: 'success'}); 
                console.log(user);
            }            
        })
    })
}

module.exports = onLogin;