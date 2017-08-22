const UserList = require('./usersList')
this.onRegistrate = (socket) => {
  return socket.on('registrate', (userData) => {
    UserList.saveUser(userData)
    socket.emit('success')
  })
}
