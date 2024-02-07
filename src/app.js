//Practica de la Clase 16:
//1.- Indexacion: es una tecnica para hacer una busqueda mas rapida.

const mongoose = require("mongoose");

/*const userModel = require("./models/user.js");

const main = async () => {
    await mongoose.connect("mongodb+srv://aleortega:coderhouse@cluster0.oprbhbr.mongodb.net/tienda?retryWrites=true&w=majority");

    const respuesta = await userModel.find({edad: {$lt:19}}).explain("executionStats");
    console.log(respuesta);
}

main();
*/

//2.- Population:

const alumnoModel = require("./models/alumno.js");
const cursoModel = require("./models/curso.js");

const start = async () => {
    await mongoose.connect("mongodb+srv://aleortega:coderhouse@cluster0.oprbhbr.mongodb.net/Instituto?retryWrites=true&w=majority");

    /*
    //Buscamos un alumno y un curso:
    const cursoBackend = await cursoModel.findById("65c39e1731976f2cabce292b");
    
    const estudiante = await alumnoModel.findById("65c39df531976f2cabce2924");
    
    console.log(cursoBackend);
    console.log(estudiante);

    //Pusheamos el curso al array del alumno
    estudiante.cursos.push(cursoBackend);

    //Ahora actualizamos la base de datos:
    await alumnoModel.findByIdAndUpdate(estudiante._id, estudiante);
    */

    const estudianteConCursos = await alumnoModel.findById("65c39df531976f2cabce2924");
    console.log(JSON.stringify(estudianteConCursos, null, 2))
}

start();

//Populate es una funcion de mongoose que permite relacionar documentos de diferentes colecciones.