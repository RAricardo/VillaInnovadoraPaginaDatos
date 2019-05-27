var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    indexRoutes = require("./routes/index");
    app = express();

mongoose.connect("mongodb+srv://webApi:IxjpYbyed6de8WrC@clustervillainnovadora-ttwgu.mongodb.net/testN",{ useNewUrlParser: true })
    .then(() => {
        console.log('Conectado a Base de Datos')
    })
    .catch((error) => {
        console.log('Error al conectarse a Base de Datos')
        console.log(error);
});

process.env.PORT = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(indexRoutes);

app.listen(process.env.PORT, () => {
});