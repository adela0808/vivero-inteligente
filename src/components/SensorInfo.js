import React from 'react';
import Resultados from './Resultados';
import '../assets/css/components/resultado.css';
import RectaHumedad from '../assets/img/RectaHumedad.png'
import BarraNav from './barraNavegacion';


const SensorInfo = () => {
  return (
    <div className='title'>
    <BarraNav/>
    <Resultados/>
      <div className='sensor'>
       <h2>Información del Sensor de Humedad</h2> 
        <p>
        El sensor de humedad mide la cantidad de agua en el suelo. Se conecta al Arduino para leer los valores de humedad.
      </p>
      <p>Si estamos utilizando el sensor en modo analógico, la placa Arduino detectará el nivel de voltaje entregado por este, y lo convertirá en un número equivalente a la cantidad de humedad detectada entre 0 y 1023. Cuando el sensor detecta nada de humedad (seco) entrega un valor de 1023 y cuando detecta un valor de alta humedad entrega un valor de 0 (o cercano a 0).

      </p>
      <img src={RectaHumedad} alt="React Humedad" className="sensor-image" /> 
      </div>
      
    </div>
  );
};

export default SensorInfo;
