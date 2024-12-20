const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); // Importa Server desde socket.io
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
const server = http.createServer(app);

// Asegúrate de que esta línea solo se declare una vez
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // La URL de tu aplicación React
    methods: ["GET", "POST"]
  }
});

const port = new SerialPort({ path: 'COM6', baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

parser.on('data', (data) => {
  console.log('Datos crudos del sensor:', data);

  // Aquí asumimos que `data` es una cadena como "humedad:XX,temperatura:YY"
  const parsedData = data.trim().split(',');
  const sensorData = {};

  parsedData.forEach((item) => {
    const [key, value] = item.split(':');
    sensorData[key] = value;
  });

  console.log('Datos procesados:', sensorData);

  // Emitir los datos de sensor al cliente
  io.emit('sensor-data', {
    humedad: sensorData.humedad,
    temperatura: sensorData.temperatura
  });
});

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(4000, () => console.log('Servidor escuchando en el puerto 4000'));

