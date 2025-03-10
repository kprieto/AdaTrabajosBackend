const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();

client.connect(8080, 'localhost', () =>{
    console.log('Conectando al servidor TCP.');
    
    rl.question('Escribe un comando (Por ejemplo: GET VEHICLES o ADD VEHICLE {"marca": "Nissan", "modelo":"Sentra", "anio": 2022 }', (command) =>{
        client.write(command);
    });
});

client.on('data', (data) =>{
    console.log('Respuesta del servidor:');
    console.log(data.toString());
    rl.close();
    client.destroy();
    
    
});

client.on('close', () => {
    console.log('Conexión cerrada.');
    
});