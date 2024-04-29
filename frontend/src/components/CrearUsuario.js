import React from 'react'

const CrearUsuario = () => {
    // creacion de objeto para valor incial para variable de estado
    const valorInicial = {
        nombre: '',
        apellido: '',
        edad: 18,
        telefono: 0,
        correo: ''
    }
    // creamos funcion para actualizar y almacenamos a traves de useState (Variable de estado)
    const [usuario, setUsuario] = useState(valorInicial)
    return (
        <div className='col-md-6 offset-md-3'>
            <div className='card card-body'>
                <form>
                    <h2 className='text-center mb-3'>Crear usuario</h2>
                    <div className='mb-3'>
                        <label>Nombre:</label>
                        <input type='text' className='form-control' placeholder='Ingrese el nombre' required name='nombre' value={usuario.nombre}/>
                    </div>
                    <div className='mb-3'>
                        <label>Apellido:</label>
                        <input type='text' className='form-control' placeholder='Ingrese el apellido' required name='apellido' value={usuario.apellido}/>
                    </div>
                    <div className='mb-3'>
                        <label>Edad:</label>
                        <input type='number' className='form-control' placeholder='Ingrese la edad' required name='edad' value={usuario.edad} />
                    </div>
                    <div className='mb-3'>
                        <label>Telefono:</label>
                        <input type='number' className='form-control' placeholder='Ingrese el número' required name='telefono' value={usuario.telefono} />
                    </div>
                    <div className='mb-3'>
                        <label>Correo:</label>
                        <input type='text' className='form-control' placeholder='Ingrese el correo' required name='correo' value={usuario.correo}/>
                    </div>
                    <button className='btn btn-primary form-control'>Guardar</button>
                </form>
            </div>
        </div>
    )
}
export default CrearUsuario