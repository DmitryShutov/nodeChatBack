const UserList = require('./usersList');

const onLogin = (socket) => {
    return socket.on('login', (credentials) => {
        UserList.hasUser({login: credentials.login, password: credentials.password}, (data) => {
            socket.emit('login', {result: 'success', user: data});
        });
    })
};

module.exports = {
    onLogin: onLogin,
}

