/* eslint-disable react/prop-types */
// import React from 'react'
import cerrarModal from '../img/cerrar.svg';

const Modal = ({ 
    setModal,
    animarModal,
    setAnimarModal,
  }) => {
  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
          src={cerrarModal}
          alt="cerrar"
          onClick={ocultarModal}
        />

      </div>
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input 
            id='nombre' 
            type='text'
            placeholder='Aniade el Nombre del Gasto'
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input 
            id='cantidad'
            type='number'
            placeholder='Aniade la Cantidad del Gasto: ej. 300'
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'>Categoria</label>
          <select
            id='categoria'
          >
            <option value=''>-- Seleccione --</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='hogar'>Hogar</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>            
            <option value='suscripciones'>Suscripciones</option>            
          </select>
        </div>
      </form>
    </div>
  )
}

export default Modal