const mongoose = require('mongoose')

// aqui creamos la cadena de conexion a traves de una variable de entorno
const URI = process.env.MONGODB_URI
                ? process.env.MONGODB_URI
                : 'mongodb://localhost/databasetest';

mongoose.connect(URI)

const connection = mongoose.connection;
// una vez que la conexion este abierta que ejecute un mensaje para saber si es correcto
connection.once('open', ()=>{
    console.log('db is connected');
})