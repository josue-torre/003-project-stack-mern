// Definimos la configuración del servidor
const express = require('express') 
const conrs = require('cors')
const app = express();

// Configuracion
app.set('port', process.env.PORT || 4000)

module.exports = app;