const net = require('net');

const client = net.createConnection({port: 8080}, () =>{
    console.log('conectado al servidor');

    client.write('/home/user/documento.txt'); // Ruta absoluta
    client.write('documento.txt'); //Ruta relativa
    client.write('/home/usuarios/file.txt') // Ruta absoluta
    
});

client.on('data', (data) =>{
    console.log(data.toString());
    client.end();
    
})

client.on('end', ()=>{
    console.log('Desconectado del servidor');
    
})
