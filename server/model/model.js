const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;