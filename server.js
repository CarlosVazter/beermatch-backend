const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const {
    Cerveza
} = require('./client.js');

app.get('/', (req, res) => {
    res.send('Bienvenido a Beermatch');
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

// Creando una cerveza
app.post('/api/v1/crearCerveza', (req, res) => {
    const {nombre, estilo, cerveceria, imagen, sabor, color, precio} = req.body;
    
    let nuevaCerveza = Cerveza ({
        nombre,
        estilo,
        cerveceria,
        imagen,
        sabor,
        color,
        precio
    })

    nuevaCerveza.save((req, cerveza) => {
        res
            .status(201)
            .send(cerveza);
    })
})


app.listen(6000, () => console.log('servidor funcionando'));