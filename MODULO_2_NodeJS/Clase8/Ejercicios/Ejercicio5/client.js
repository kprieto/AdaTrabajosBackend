/*Ejercicio 5: Detectar cuando el servidor cierra la conexión 
Conexión 
Consigna 
Crea un cliente que: 
1. Se conecte y envíe "¿Sigues ahí, servidor?". 
2. Cuando el servidor cierre la conexión, muestre "    
la conexión". 
Pistas 
Servidor cerró 
• El evento 'end' se activa cuando el servidor finaliza la conexión. */

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectado al servidor');

    client.write('¿Sigues ahí, servidor?');

    client.setTimeout(5000, () => {
        console.log(' Tiempo de espera agotado...');
        client.end();
        
    })

    setTimeout(() => {
        console.log('Pausando la recepcion de datos...');
        client.pause();

        setTimeout(()=>{
            console.log('Reanudando la recepcion de datos...');
            client.resume();

            
        },3000)
    },3000)
})

