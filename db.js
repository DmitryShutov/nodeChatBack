const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/chat';
const databaseInstance = null;

const mongo = {
    connect: () => {
        mongoose.connect(dbUrl, {useMongoClient: true});
    },
    db: mongoose.connection,
    close: () => mongoose.connection.close(() =>{ console.log('db connection closed'), process.exit(0) })
}

mongo.db.on('connected', () => console.log('connect'));


module.exports = mongo;