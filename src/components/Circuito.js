import React from 'react';
import '../assets/css/components/resultado.css';
import BarraNav from './barraNavegacion';
import sensorHumedad from '../assets/img/sensorHumedad.jpg'
import sensorTemp from '../assets/img/DHT 11.png'
import bombaConexion from '../assets/img/bombaConexion.png'
import Ventilador from '../assets/img/ventilador.png'
const Circuito = () => {
  return (
    <div>
      <BarraNav />
      <div className='conexion_info'>
        <h2>Conexión del Circuito</h2>
        <p>Sensor de Humedad:</p>
        <ul>
          <li>VCC del sensor al 5V del Arduino</li>
          <li>GND del sensor al GND del Arduino</li>
          <li>Salida digital (DO) o analógica (AO) a un pin del Arduino</li>
        </ul>
        <img src={sensorHumedad} alt="sensor Humedad" className="conexion-image" />
      </div>

      <div className='conexion_info'>
        <p>Sensor de Temperatura:</p>
        <ul>
          <li>VCC del sensor al 5V del Arduino</li>
          <li>data del sensor a un pin del Arduino</li>
          <li>GND del sensor al GND del Arduino</li>
        </ul>
        <img src={sensorTemp} alt="sensor Temp" className="conexion-image" />
      </div>
      <div className='conexion_info'>
        <p>Mini bomba sumergible:</p>
        <ul>
          <li>Tierra de la bomba al NO del Relé </li>
          <li>Positivo de la bomba a la fuente de energía 6v </li>
          <li>NC del Relé a la fuente de energía </li>
          <li>S del Relé al GND del arduino </li>
          <li>Positivo del Relé al 5v del arduino</li>
          <li>Negativo del Relé al pin digital del arduino</li>
        </ul>
        <img src={bombaConexion} alt="bomba Conexion" className="conexion-image" />
      </div>
      <div className='conexion_info'>
        <p>ventilador:</p>
        <ul>
          <li>Tierra del ventilador al NO del Relé </li>
          <li>Positivo del ventilador a la fuente de energía de 5v a 12v </li>
          <li>NC del Relé a la fuente de energía </li>
          <li>S del Relé al GND del arduino </li>
          <li>Positivo del Relé al 5v del arduino</li>
          <li>Negativo del Relé al pin digital del arduino</li>
        </ul>
       
        <img src={Ventilador} alt="ventilador" className="conexion-image" />
      </div>
    </div>

  );
};

export default Circuito;
