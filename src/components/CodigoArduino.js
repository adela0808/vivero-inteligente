import React from 'react';
import '../assets/css/components/codigoArduino.css';
import BarraNav from './barraNavegacion';


const CodigoArduino = () => {
  return (
    <div> 
      <BarraNav/>
    <div className='container'>
      
      <h2 className='titulo'>Código Arduino</h2>
      <pre className='codigo_container'>
        <code>
          {`
          #include <DHT.h>
#include <DHT_U.h>

// Define el pin donde está conectado el sensor DHT
#define DHTPIN 4

// Define el tipo de sensor DHT (DHT11, DHT22, DHT21)
#define DHTTYPE DHT11 

// Inicializa el sensor DHT
DHT dht(DHTPIN, DHTTYPE);

int SensorPin = A0;
int bomba = 8;
int ventilador = 9;

void setup() {
 
  Serial.begin(9600); // Inicializa la comunicación serie

  pinMode(5,OUTPUT); //pin donde esta conectado el led verde
  pinMode(7,OUTPUT);  //pin donde esta conectado el led rojo
  pinMode(3,OUTPUT); //pin donde esta conectado el led naranja

  pinMode(ventilador,OUTPUT);// Inicializa la ventilación
  pinMode(bomba,OUTPUT);// Inicializa la bomba
  
  dht.begin();// Inicializa el sensor DHT
}

void loop() {
  // Lee la humedad como número entero
  int humedadAmbiente = dht.readHumidity();

  // Verifica si hay errores en la lectura del sensor DHT
  if (isnan(humedadAmbiente)) {
    Serial.println("Error al leer el sensor DHT!");
    return;
  }
  // Imprime los valores leídos
  Serial.print("humedad del ambiente:");
   Serial.println(humedadAmbiente);

 // Lee la temperatura del ambiente
  float temp = dht.readTemperature();
  //temp = (0.5* temp *100.0)/1024.0;
   // Imprime los valores leídos
  Serial.print("temperatura:");
  Serial.println(temp);
 
    
 // Lee la humedad del suelo
 int humedad = analogRead(SensorPin);
 Serial.print("humedad:");
 Serial.println(humedad);
    if(humedad <=550)            //Si la humedad es menor a 400 encender la luz 5(verde)
   {
     digitalWrite(5,HIGH);
   }
   else
   {
     digitalWrite(5,LOW);

   }
   if(humedad>=800)           //Si humedad es mayor o igual a 800 encender la luz 7(roja)
   {
    digitalWrite(7,HIGH); 
    digitalWrite(bomba, HIGH);
   }
   else
   {
     digitalWrite(7,LOW);
     digitalWrite(bomba, LOW);
   }
   if(humedad>=1000)
   {
      Serial.println("Error al leer el sensor!!");// si la humedad es mayor a 950 el sensor está desconectado
      digitalWrite(bomba, LOW);
      digitalWrite(7,LOW);
      digitalWrite(3,HIGH); 
   }  
    if(temp >= 23)
    {
    digitalWrite(ventilador,HIGH);
    Serial.println("Ventilación encendida!");
   }
   else
   {
       digitalWrite(ventilador,LOW);
   }
 

  delay(5000);  // Espera unos 2 segundos entre lecturas


}

          `}
        </code>
      </pre>
    </div>
     </div>
  );
};

export default CodigoArduino;
