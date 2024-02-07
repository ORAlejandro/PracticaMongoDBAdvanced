const mongoose = require("mongoose");

const collection = "cursos";

const cursoSchema = new mongoose.Schema({
    dias: [],
    nombre: {
        type: String,
        index: true
    },
    horario: String,
    numeroComision: String
})

const cursoModel = mongoose.model(collection, cursoSchema);

module.exports = cursoModel;