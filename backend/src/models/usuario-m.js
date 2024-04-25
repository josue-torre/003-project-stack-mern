// Nos permite decirle al backend cual es el tipo de dato o el documento
// Destructuración
const {Schema, model} = require('mongoose')

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: String
},
{
    // Podremos almacenar de manera automatica la fecha y hora del registro de usaurio
    timestamps: true 
})

module.exports = model('Usuario', usuarioSchema)