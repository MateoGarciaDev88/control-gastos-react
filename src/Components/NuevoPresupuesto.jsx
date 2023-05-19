/* eslint-disable react/prop-types */
import { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ 
  presupuesto, 
  setPresupuesto, 
  setIsValidPresupuesto 
}) => {
  const [mensaje, setMensaje] = useState('');
  
  const handelPresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje('No es un presupuesto valido.');
      return;
    }
    setMensaje('');
    setIsValidPresupuesto(true);
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handelPresupuesto} className='formulario'>
        <div className='campo'>
          <label>Definir Presupuesto</label>
          <input 
            className='nuevo-presupuesto'
            type='number' 
            placeholder='Aniade tu Presupuesto' 
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
          <input 
            type="submit"
            value="Aniadir"
          />
        </div>
        {mensaje && <Mensaje tipo="error">{ mensaje }</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto