const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('login', registerSchema);