const net = require('net');


const client = net.createConnection({port: 4000}, () => {
    console.log('Conectado al servidor');
    const bookId = '3';
    client.write(bookId); 
})


client.on('data', (data) =>{
    console.log('Respuesta del servidor:', data.toString());
    client.end();
})

client.on('end', () =>{
    console.log('Conexion cerrada');
    
})