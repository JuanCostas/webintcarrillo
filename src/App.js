import React from 'react';
import logo from './logo1.png';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <p>
         Bienvenido a la web interna del <code>Carrillo</code>
        </p>
        <a
          className="App-link2"
          href="http://192.168.195.250"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sistema de Gestión de Turnos
        </a>
        <p></p>
        <a
          className="App-link"
          href="https://www.google.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Búsqueda en Google
        </a>
      </header>
    </div>
  );
}

export default App;