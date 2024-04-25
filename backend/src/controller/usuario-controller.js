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
usuarioCtrl.getUsuario = async(req, res) =>{
    
}
usuarioCtrl.getUsuario = async(req, res) =>{
    
}
usuarioCtrl.getUsuario = async(req, res) =>{
    
}