/*Ejercicio 9: Servidor de Transferencia de Archivos 
Consigna: 
Crea un servidor TCP que permita a los clientes enviar un archivo de 
texto al servidor. El servidor debe guardar el archivo en el sistema y 
notificar al cliente cuando la transferencia se haya completado. Además, 
el servidor debe verificar que el archivo no exceda un tamaño máximo 
de 1 MB. 
Requisitos: 
• Usa el evento data para recibir el archivo en trozos (chunks). 
• Usa el método socket.write() para notificar al cliente sobre el 
progreso de la transferencia. 
• Usa el método fs.writeFile() para guardar el archivo en el servidor. 
• Si el archivo excede 1 MB, cierra la conexión y notifica al cliente. */
const net = require('net');
const fs = require('fs');
const path = require('path');

const MAX_FILE_SIZE = 1 * 1024 * 1024;

const server = net.createServer((socket) =>{
    console.log('¡Un cliente se ha conectado!');
    let fileBuffer = Buffer.alloc(0);
    let fileName = '';
    let fileSize = 0;
    socket.on('data', (data) =>{
        console.log(`Datos recibidos del cliente ${data.toString()}`);
        fileBuffer = Buffer.concat([fileBuffer, data]);
        fileSize += data.length;

        if (fileSize > MAX_FILE_SIZE) {
            socket.write('El archivo excede el tamaño máximo de 1 MB.\n');
            socket.end();
            return;
        }

        socket.write(`Recibido ${fileSize} bytes...\n`);
    })

    socket.on('end', () => {
        fileName = `uploaded_file_${Date.now()}.txt`;
        fs.writeFile(path.join(__dirname, fileName), fileBuffer, (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
                socket.write('Error al guardar el archivo.\n');
                return;
            }
            console.log(`Archivo guardado: ${fileName}`);
            socket.write(`Transferencia completada. Archivo guardado como ${fileName}.\n`);
        });
    });

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