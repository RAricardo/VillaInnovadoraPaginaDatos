var express = require("express");
var router = express.Router();
var Partida = require("../models/partida");
var Jugador = require("../models/jugadores");

router.get("/", function (req, res) {
    Partida.find({}, function (err, partidas) {
        if (err) {
            console.log(err);
        } else {
            Jugador.find({}, function (err, jugadores) {
                if (err) {
                    console.log(err);
                } else {
                    res.render("landing", { partidas: partidas, jugadores: jugadores});
                }
            });;
        }
    });
});

router.get("/jugadores", function (req, res) {
    Jugador.find({}, function (err, jugadores) {
        if (err) {
            console.log(err);
        } else {
            res.render("jugadores", { jugadores: jugadores});
        }
    });;
});

router.get("/partidas/:id", function (req, res) {
    Partida.findById(req.params.id).populate("jugadores").exec(function (err, partida) {
        console.log(partida);
        if (err) {
            console.log(err);
        } else {
            res.render("jugadoresPartida", { partida: partida, jugadores: partida.jugadores});
        }
    });
});

router.get("/jugadores/:id", function (req, res) {
    Jugador.findById(req.params.id, function (err, jugador) {
        if (err) {
            console.log(err);
        } else {
            res.render("showJugador", { jugador: jugador});
        }
    });
});

router.get("/partidas", function (req, res) {
    Partida.find({}, function (err, partidas) {
        if (err) {
            console.log(err);
        } else {
            res.render("partidas", { partidas: partidas});
        }
    });
});

module.exports = router;
