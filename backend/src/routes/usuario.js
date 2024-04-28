const {Router} = require('express')
const router = Router()

// Requerimos desde nuestra direccion los variables creadas
const {getUsu, getUsuario, createUsuario, deleteUsuario, updateUsuario} = require('../controller/usuario-controller') 

// Se establecen las peticones que solicitara la api
router.route('/')
    .get(getUsuario)
    .post(createUsuario)
    // Recibira como parametro el id para ejecutar las peticones para el cliente o fin en especifico
router.route('/:id')
    .get(getUsu)
    .delete(deleteUsuario)
    .put(updateUsuario)

module.exports = router;