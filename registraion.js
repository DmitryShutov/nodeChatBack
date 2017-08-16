const User = require('./models/user');
const onRegistrate = (client) => {
    return client.on('registrate', function(userData){
        const user = new User(userData);
        user.save();   
    });
}

module.exports = onRegistrate;