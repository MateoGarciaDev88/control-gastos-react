import { useState } from 'react';
import Header from './Components/Header';
import iconoNuevoGastos from './img/nuevo-gasto.svg';
import Modal from './Components/Modal';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img 
            src={iconoNuevoGastos} 
            alt='Nuevo gasto' 
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && (
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      )}
    </div>
  )
}

export default App
