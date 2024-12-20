import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/components/app.css';

const Home = () => {
  return (
    <div className='title container'>
      <div  className='title-page'>
         <h1>Proyecto Vivero inteligente</h1>
      </div>
      <Link className='buton' to="/sensor-info">Comenzar</Link>
      <Link className='buton' to="/codigo-arduino">Código del Arduino </Link>
      <Link className='buton' to="/circuito">Conexión</Link>

    </div>
  );
};

export default Home;
