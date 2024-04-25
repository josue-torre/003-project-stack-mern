const app = require ('./app')
// Arrancamos logica para ejecutar el servidor 
async function main(){
    await app.listen(app.get('port'))
    console.log('El servidor se esta ejecutando en el puerto: ', app.get('port'));
}
// Arrancamos la configuracion o archivo de anclaje 
main();