import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import '../assets/css/components/resultado.css';


const socket = io('http://localhost:4000'); // Conectar con el servidor

const Resultados = () => {
  const [humedad, setHumedad] = useState(null);
  const [temperatura, setTemperatura] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    console.log('Conectado al servidor WebSocket');

    socket.on('sensor-data', (data) => {
      console.log('Datos recibidos:', data);
      console.log('Humedad:', data.humedad, 'Temperatura:', data.temperatura);

    const humedadValue = data.humedad ? parseFloat(data.humedad.trim()) : null;
    const temperaturaValue = data.temperatura ? parseFloat(data.temperatura.trim()) : null;

    if (humedadValue !== null) setHumedad(humedadValue);
    if (temperaturaValue !== null) setTemperatura(temperaturaValue);
  

      // Verifica que los datos existan y sean números
      if (typeof data.humedad === 'number' && typeof data.temperatura === 'number') {
        // Mostrar el mensaje si la humedad llega a 500 y no se ha mostrado ya
        if (data.humedad >= 500 && !alertShown) {
          setMensaje('¡La humedad es muy baja!');
          setAlertShown(true);
        } else if (data.humedad < 500) {
          setMensaje('');
          setAlertShown(false);
        }

        setHumedad(data.humedad);
        setTemperatura(data.temperatura);
      } else {
        console.error('Datos inválidos recibidos:', data);
      }
    });

    return () => {
      socket.off('sensor-data');
    };
  }, [alertShown]);

  return (
    <div className='title container'>
      <div className='principal'>
        <h2>Visualización de datos recolectados en Tiempo Real</h2>
      </div>
      <div className='resultado'>
        <p>Humedad del Suelo: {humedad !== null ? humedad : 'Cargando...'}</p>
        <p>Temperatura: {temperatura !== null ? `${temperatura} °C` : 'Cargando...'}</p>
      </div>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Resultados;
