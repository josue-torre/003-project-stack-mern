const usuarioCtrl = {}

const Usuario = require('../models/usuario-m')

usuarioCtrl.getUsuario = async(req, res) =>{
    const usuarios = await Usuario.find()
    res.json(usuarios)
}
usuarioCtrl.postUsuario = async(req, res) =>{
    // Destructuracion que venga de parte del cliente (request tiene un cuerpo que viene con todo json que es el objeto)
    const {nombre, apellido, correo, telefono, edad} = req.body;
    const newUsuario = new Usuario({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        edad: edad
    })

    await newUsuario.save();
    res.json({message: "El usuario ha sido creado"})

}
usuarioCtrl.getUsu = async(req, res) =>{
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)    

}
usuarioCtrl.deleteUsuario = async(req, res) =>{
    await Usuario.findOneAndDelete(req.params.id)
    res.json({message: 'Usuario ha sido eliminado'})
    
}
usuarioCtrl.getUsuario = async(req, res) =>{
    const {nombre, apellido, correo, telefono, edad} = req.body;
    // necesitamos nuevos parametros para pasar el cuerpo 
    await Usuario.findOneAndUpdate(req.params.id, {
        nombre,
        apellido,
        edad,
        correo,
        telefono
    })
    res.json({nessage: 'El usuario ha sido actualizado'})
}

module.exports = usuarioCtrl;