const schema = require('./models/user');
class UsersClass {
    constructor() {
        this.schema = schema;
        this.activeUsers = [];
    }

    addUser(user) {
        this.activeUsers.push(user);
    }

    saveUser(user) {
        const schema = new this.schema(user);
        scheme.save();
    }

    getActiveUsersList() {
        return this.activeUsers;
    }

    hasUser(user, onSuccess) {
        this.schema.findOne({login: user.login, password: user.password}, (err, user) => {
            if (err) {
                console.error('error', err);
            } else {
                onSuccess({login: user.login, id: user._id});
            }
        });
    }

    getUsersList(onSuccess) {
        this.schema.find({}, (err, usersList) => {
            if (err) {
                console.error(err);
            } else {
                usersList.forEach(user => console.log(user));
                onSuccess(usersList);
            }
        });
    }
}

const UserList = new UsersClass();

module.exports = UserList;
