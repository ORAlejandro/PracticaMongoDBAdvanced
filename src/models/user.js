const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    apellido: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    edad: {
        type: Number,
        index: true
    }
})

const UserModel = mongoose.model("usuarios", userSchema);

module.exports = UserModel;