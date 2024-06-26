// lo primero que debe realizar el programa es requerir nuestras variables de entorno desde el archivo principal
require('dotenv').config()

const app = require ('./app')
// llamamos la base de datos
require('./database')

// Arrancamos logica para ejecutar el servidor 
async function main(){
    await app.listen(app.get('port'))
    console.log('El servidor se esta ejecutando en el puerto: ', app.get('port'));
}
// Arrancamos la configuracion o archivo de anclaje 
main();