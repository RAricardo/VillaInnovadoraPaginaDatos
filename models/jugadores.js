var mongoose = require("mongoose");
var jugadorSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    edad: Number,
    sexo:String,
    carrera:String,
    semestre: Number,
    carta: String,
    pensamiento:Number,
    amplitud:Number,
    orientacion:Number,
    inteligencia:Number,
    innovacion:Number,
    motivacion:Number,
    tiempoRespuesta:Number,
    postulaciones: Number,
    cluster: String
});

module.exports = mongoose.model("jugadores", jugadorSchema);