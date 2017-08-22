const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongo = require('./db')

const registration = require('./registraion')
const login = require('./login')
const users = require('./user')

mongo.connect()

this.currentUsers = []

server.listen(3100)

io.on('connection', (socket) => {
  registration.onRegistrate(socket)
  login.onLogin(socket)
  users.onGetUsersList(socket)
})

process.on('SIGINT', () => {
  mongo.close()
})
