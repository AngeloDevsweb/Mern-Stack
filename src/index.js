// lo primero que debe ejcutarse son la variables de entorno por eso se pone primero
require('dotenv').config();

const app = require('./app')
require('./database')

// aqui se esta ejecutando el servidor
async function main() {
    await app.listen(app.get('port'))
    console.log('server on port: ', app.get('port'))
}

main();
