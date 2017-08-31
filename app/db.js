const mongoose = require('mongoose')
const dbUrl = 'mongodb://62.173.145.68/chat'

const mongo = {
  connect: () => { mongoose.connect(dbUrl, {useMongoClient: true}) },
  db: mongoose.connection,
  close: () => {
    mongoose.connection.close(function () {
      console.log('dbconnection closed')
      process.exit(0)
    })
  }
}

mongo.db.on('connected', function () {
  console.log('connect')
})

module.exports = mongo
