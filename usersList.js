const schema = require('./models/user')
class UsersClass {
  constructor () {
    this.Schema = schema
    this.activeUsers = []
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
    this.Schema.findOne({login: user.login, password: user.password}, (err, user) => {
      if (err) {
        console.error('error', err)
      } else {
        onSuccess({login: user.login, id: user._id})
      }
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
