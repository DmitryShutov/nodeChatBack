const User = require('./models/user');
const onLogin = (client) => {
    return client.on('login', (credentials) => {
        User.findOne({login: credentials.login, password: credentials.password}, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }            
        })
    })
}

module.exports = onLogin;