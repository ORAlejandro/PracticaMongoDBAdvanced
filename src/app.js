//Practica de la Clase 16:
//1.- Indexacion: es una tecnica para hacer una busqueda mas rapida.

const mongoose = require("mongoose");
const userModel = require("./models/user.js");

const main = async () => {
    await mongoose.connect("mongodb+srv://aleortega:coderhouse@cluster0.oprbhbr.mongodb.net/tienda?retryWrites=true&w=majority");

    const respuesta = await userModel.find({edad: {$lt:19}}).explain("executionStats");
    console.log(respuesta);
}

main();