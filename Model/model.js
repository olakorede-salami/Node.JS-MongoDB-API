const mongoose = require('mongoose');

const Model = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
}
)

module.exports = mongoose.model('NewModel', Model)