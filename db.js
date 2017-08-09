const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/chat';
const databaseInstance = null;

const Mongo = {
    connect: () => {
        mongoose.connect(dbUrl, {useMongoClient: true});
    },
    db: mongoose.connection,
}


module.exports = Mongo;