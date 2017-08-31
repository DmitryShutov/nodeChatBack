const schema = require('./models/user')
const util = require('util')
class UsersClass {
  constructor () {
    this.Schema = schema
    this.activeUsers = []
    this.findUser = util.promisify(this.Schema.findOne)
  }

  addUser (user) {
    this.activeUsers.push(user)
  }

  saveUser (user) {
    const Schema = new this.Schema(user)
    Schema.save()
  }

  getActiveUsersList () {
    return this.activeUsers
  }

  hasUser (user, onSuccess) {
    this.findUser({login: user.login, password: user.password}).then((data) => {
      console.log('promisify', data)
    }).catch((err) => console.log(err))
    this.Schema.findOne({login: user.login, password: user.password}, (err, user) => {
      if (err) {
        console.error('error', err)
        return
      }
      onSuccess({login: user.login, id: user._id});
    })
  }

  getUsersList (onSuccess) {
    this.Schema.find({}, (err, usersList) => {
      if (err) {
        console.error(err)
      } else {
        usersList.forEach(user => console.log(user));
        onSuccess(usersList)
      }
    })
  }
}

const UserList = new UsersClass()

module.exports = UserList
