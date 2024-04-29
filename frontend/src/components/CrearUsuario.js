import React from 'react'

const CrearUsuario = () => {
    return (
        <div className='col-md-6 offset-md-3'>
            <div className='card card-body'>
                <form>
                    <h2 className='text-center mb-3'>Craer usuario</h2>
                    <div className='mb-3'>
                        <label>Nombre:</label>
                        <input type='text' className='form-control' placeholder='Ingrese el nombre' required />
                    </div>
                    <div className='mb-3'>
                        <label>Apellido:</label>
                        <input type='text' className='form-control' placeholder='Ingrese el apellido' required />
                    </div>
                    <div className='mb-3'>
                        <label>Edad:</label>
                        <input type='number' className='form-control' placeholder='Ingrese la edad' required />
                    </div>
                    <div className='mb-3'>
                        <label>Telefono:</label>
                        <input type='number' className='form-control' placeholder='Ingrese el número' required />
                    </div>
                    <div className='mb-3'>
                        <label>Correo:</label>
                        <input type='text' className='form-control' placeholder='Ingrese el correo' required />
                    </div>
                    <button className='btn btn-primary form-control'>Guardar</button>
                </form>
            </div>
        </div>
    )
}
export default CrearUsuario