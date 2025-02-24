const net = require('net');

const client = net.createConnection({port: 8082}, () =>{
    console.log('conectado al servidor');

    client.write('/home/user/docs/file.txt'); 
    
});

client.on('data', (data) =>{
    console.log(data.toString());
    client.end();
    
})

client.on('end', ()=>{
    console.log('Desconectado del servidor');
    
})