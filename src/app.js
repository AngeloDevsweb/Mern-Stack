const express = require('express')
const cors = require('cors')
const app = express();

//settings

app.set('port', process.env.PORT || 4000)

//middlewares

app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi aplicacion')
})
// ruta para la api de usuarios
app.use('/api/users', require('./routes/user'))
// ruta para la api de notas
app.use('/api/notes', require('./routes/notes'))

module.exports=app;