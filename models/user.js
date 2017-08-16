const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
})

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
