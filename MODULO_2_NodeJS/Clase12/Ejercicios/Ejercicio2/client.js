const net = require('net');


const client = net.createConnection({port: 4001}, () => {
    console.log('Conectado al servidor');
    const hotelId = '2';
    client.write(hotelId); 
})


client.on('data', (data) =>{
    console.log('Respuesta del servidor:', data.toString());
    client.end();
})

client.on('end', () =>{
    console.log('Conexion cerrada');
    
})