const mongoose = require('mongoose');

let url = 'mongodb://admin:birrapedia1@ds137862.mlab.com:37862/beermatch';

mongoose.connect(url,{ useNewUrlParser: true }, () => {
    console.log('Conexión exitosa a la base de datos');
});

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const cervezaSchema = new Schema ({
    cerveza:ObjectId,
    nombre:String,
    estilo:String,
    cerveceria:String,
    imagen:String,
    sabor:String,
    color: String,
    precio:String,
})

var Cerveza = mongoose.model('Cerveza', cervezaSchema);

module.exports = {Cerveza};