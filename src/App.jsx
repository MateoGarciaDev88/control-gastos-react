import { useState } from 'react';
import Header from './Components/Header';
import Modal from './Components/Modal';
import { generarId } from './helpers'
import iconoNuevoGastos from './img/nuevo-gasto.svg';
import ListadoGastos from './Components/ListadoGastos';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  const guardarGasto = (gasto) => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    
    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  return (
    <div className={ modal ? 'fijar' : '' }>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
        <main>
          <ListadoGastos
            gastos={gastos}
          />
        </main>
        <div className='nuevo-gasto'>
          <img 
            src={iconoNuevoGastos} 
            alt='Nuevo gasto' 
            onClick={handleNuevoGasto}
          />
        </div>
        </>
      )}

      {modal && (
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  )
}

export default App
