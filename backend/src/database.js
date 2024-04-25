const mongoose = require('mongoose')

// Cadena de conexion
const URI = process.env.MONGODB_URI
            ? process.env.MONGODB_URI
            : 'mongodb://localhost/dbtest'