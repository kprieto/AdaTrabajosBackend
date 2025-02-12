const net = require('net');
const readline = require('readline-sync');


const options = {
    port:5000,
    host:'localhost'
}

const client = net.createConnection(options);
client.on('connect', () =>{
    console.log('Conexion satisfactoria!');
    sendLine(); 
    
})

client.on('data', (data) =>{
    console.log('El servidor dice: ' + data.toString());
    sendLine();
    
})

client.on('error', (err) =>{
    console.log(err.message);
    
})

function sendLine() {
    
    let line = readline.question('\nIngresa cualquier cosa: \t');
    if (line == "0"){ 
        client.end(); 
    } else {
        client.write(line)
    }
}