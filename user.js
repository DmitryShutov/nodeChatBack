const usersList = require('./usersList');

const onGetUsersList = (socket) => {
    return socket.on('users', () => {
        const list = usersList.getUsersList((userList) => {
            socket.emit('users', userList);
        });
    })
}

module.exports = {
    onGetUsersList: onGetUsersList,
}