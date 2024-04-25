const {Router} = require('express')
const router = Router()

// Se establecen las peticones que solicitara la api
router.route('/')
    .get()
    .post()
    // Recibira como parametro el id para ejecutar las peticones para el cliente o fin en especifico
router.route('/:id')
    .get()
    .delete()
    .put()
module.exports = router;