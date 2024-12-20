import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SensorInfo from './components/SensorInfo';
import Circuito from './components/Circuito';
import CodigoArduino from './components/CodigoArduino';
import Resultados from './components/Resultados';
import './assets/css/base/base.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sensor-info" element={<SensorInfo />} />
        <Route path="/circuito" element={<Circuito />} />
        <Route path="/codigo-arduino" element={<CodigoArduino />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
    </Router>
  );
}

export default App;

