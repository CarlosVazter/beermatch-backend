const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const {
    Cerveza
} = require('./client.js');

app.get('/', (req, res) => {
    res.send(Cerveza.json());
})

app.get('/cerveza', (req, res) => {
    const {nombre, cerveceria, imagen, sabor, color, precio, estilo} = req.body
    let nuevaCerveza = Cerveza({
        nombre,
        cerveceria,
        imagen,
        sabor,
        color,
        precio,
        estilo
    })

    //app.get('/cerveza', (req, res) => {
      //  Cerveza.find({}, (error, res) => {

        //})
    //})

})

app.listen(6000, () => console.log('servidor funcionando'));