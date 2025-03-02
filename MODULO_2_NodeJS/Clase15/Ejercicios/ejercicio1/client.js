// paso 6: Importacion en el cliente
const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// paso 7: creamos al cliente
const client = net.createConnection({port: 3000}, () =>{
    console.log('Conectando al servidor');
    
        rl.question('Ingresa un mensaje (o /historial para ver el historial): ', (mensaje) => {
        client.write(mensaje);
        });
    
})

// Evento data
client.on('data', (data) =>{
    console.log('Respuesta del servidor: ', data.toString());
    
})

// evento end
client.on('end', () =>{
    console.log('Desconectado del servidor');
    
})



