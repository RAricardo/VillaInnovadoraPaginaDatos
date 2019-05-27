var mongoose = require("mongoose");

var partidasSchema = new mongoose.Schema({
    codigo: Number,
    tipoPartida: Number,
    jugadores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "jugadores"
    }],
    ganadoresPartida: String
})

module.exports = mongoose.model("partidas", partidasSchema);