import './App.css';
import React, { useState } from 'react';
import Keyboard from './componentes/keyboard';
import Result from './componentes/result';


function App() {
  const [textoInsertado, setTextoInsertado] = useState("")
  return <div className='general'>
    <Result valor={textoInsertado} />
    <Keyboard textoInsertado={textoInsertado} setTextoInsertado={setTextoInsertado} />
      
  </div>
}

export default App;
