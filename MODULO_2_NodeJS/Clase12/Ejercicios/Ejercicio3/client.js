const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el título de la película que deseas consultar: ', (title) => {
    
    const client = net.createConnection({ port: 4002 }, () => {
        console.log('Conectado al servidor');
        client.write(title);
    });




client.on('data', (data) =>{
    console.log('Respuesta del servidor:', data.toString());
    client.end();
})

client.on('end', () =>{
    console.log('Conexion cerrada');
    
})
});