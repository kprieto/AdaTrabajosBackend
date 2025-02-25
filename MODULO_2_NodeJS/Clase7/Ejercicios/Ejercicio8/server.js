/*Ejercicio 8: Servidor con Autenticación Simple 
Consigna: 
Crea un servidor TCP que requiera que los clientes se autentiquen antes 
de poder enviar mensajes. El servidor debe solicitar un nombre de 
usuario y una contraseña. Si las credenciales son correctas, el servidor 
debe permitir que el cliente envíe mensajes. Si no, debe cerrar la 
conexión. 
Requisitos: 
• Usa el evento data para recibir las credenciales y validarlas. 
• Usa el método socket.write() para solicitar credenciales y enviar 
mensajes de éxito/error. 
• Usa el método socket.end() para cerrar la conexión si las 
credenciales son incorrectas.*/

const net = require('net');
const usuarios = {
    'usuario1': 'password123',
    'usuario2': 'password456'
};
const server = net.createServer((socket) =>{
    console.log('¡Un cliente se ha conectado!');
    socket.write('Ingrese su nombre de usuario: ');


    let autenticado = false;
    let nombreUsuario = ''

    socket.on('data', (data) =>{
        console.log(`Datos recibidos del cliente ${data.toString()}`);
        const mensaje = data.toString().trim();

        if (!autenticado) {
            if (!nombreUsuario) {
                nombreUsuario = mensaje;
                socket.write('Ingrese su contraseña: ');
            } else {
                
                const contraseña = mensaje;
                if (usuarios[nombreUsuario] === contraseña) {
                    autenticado = true;
                    socket.write('Autenticación exitosa. Puede enviar mensajes.\n');
                } else {
                    socket.write('Credenciales incorrectas. Cerrando la conexión.\n');
                    socket.end();
                }
            }
        } else {
            console.log(`Mensaje de ${nombreUsuario}: ${mensaje}`);
            socket.write(`Servidor recibió: ${mensaje}\n`);
        }
    })

    socket.on('close', () =>{
        console.log(`Un cliente se ha desconectado.`);
    })

    socket.on('error', (err) =>{
        console.error(`Error en la conexion con el cliente: ${err.message}`);
        socket.destroy();
    })
    
})

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando desde el puerto ${PORT}`);
    
})