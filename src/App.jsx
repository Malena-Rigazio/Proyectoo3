import { Formulario } from './componentes/Formulario';
import { Home } from './componentes/Home';
import { useState } from 'react';
import './estilo.css';

import atracc1 from './imgAtracciones/atraccion1.jpg';
import atracc2 from './imgAtracciones/atraccion2.jpg';
import atracc3 from './imgAtracciones/atraccion3.jpg';
import atracc4 from './imgAtracciones/atraccion4.jpg';
import rest1 from './imgGastronomia/bar1.jpg';
import rest2 from './imgGastronomia/bar2.jpg';
import rest3 from './imgGastronomia/bar3.jpg';
import rest4 from './imgGastronomia/bar4.jpg';
import hospe1 from './imgHospedaje/hospedaje1.jpg';
import hospe2 from './imgHospedaje/hospedaje2.jpg';
import hospe3 from './imgHospedaje/hospedaje3.jpg';
import hospe4 from './imgHospedaje/hospedaje4.jpeg';
import turis1 from './imgTurismo/turismo1.jpeg';
import turis2 from './imgTurismo/turismo2.jpg';
import turis3 from './imgTurismo/turismo3.jpg';
import turis4 from './imgTurismo/turismo4.jpg';

function App() {

  const [user, setUser] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [imagenesMostradas, setImagenesMostradas] = useState([]);
  const [cajaSeleccionada, setCajaSeleccionada] = useState(null);
  const [mostrarCajaNueva, setMostrarCajaNueva] = useState(false);

 
  return (
      <div className='App'>

        {
          user.length > 0 ? (
            <Formulario setUser={setUser} />
            ) : (
            <Home
            user={user} setUser={setUser}
            messages={messages} setMessages={setMessages}
            inputText={inputText} setInputText={setInputText}
            menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto}
            menuVisible={menuVisible} setMenuVisible={setMenuVisible}
            cajaSeleccionada={cajaSeleccionada} setCajaSeleccionada={setCajaSeleccionada}
            mostrarCajaNueva={mostrarCajaNueva} setMostrarCajaNueva={setMostrarCajaNueva}
            imagenesMostradas={imagenesMostradas} setImagenesMostradas={setImagenesMostradas} />
            )
        }
      
    </div>

  )
}

export default App
