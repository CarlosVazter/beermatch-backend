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

// Obteniendo las cervezas
app.get('/api/v1/cervezas', (req, res) => {
    let sabor = req.query.sabor;
    let color = req.query.color;
    
    if (sabor && color) {
        Cerveza.find({sabor: `${sabor}`, color:`${color}` }, (error, cerveza) => {
            if (cerveza.length == 0) {
                res.status(404).send('No hay cervezas que coincidan')
            }else{
                res.send(cerveza)
            }
        })
    } else {
        res.status(404).send('No tienes match')
    }

})


app.listen(3000, () => console.log('servidor funcionando'));
