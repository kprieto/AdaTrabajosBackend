const fs = require('fs');

//Definimos la ruta del archivo json que vamos a manipular
const rutaArchivo = './productos.json';

// Paso 1: Leer archivos JSON
fs.readFile(rutaArchivo, 'utf8', (err, data)=>{
    if(err){
        console.error('Error al leer al archivo:', err);
        return //detiene la ejecución
    }

    // convertimos el contenido del archivo json (texto) a un obj javascript utilizando "json.Parse()"
    const productos = JSON.parse(data);

    console.log("Productos actuales: ", productos);

    // Paso2: Agregar un nuevo producto al listado
    // Creamos un nuevo objeto que representa el nuevo producto
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: "Webcam",
        precio: 40
    }

    // agregamos el nuevo producto al array de productos existentes
    productos.push(nuevoProducto);
    console.log("Productos actualizaos: ", productos);

    // Paso 3: escribir al archivo JSON actualizado
    // comvertimos el objeto de js (productos) nuevamente a texto json utilizando json.stringify()
    const contenidoActualizado = JSON.stringify(productos, null, 2);

    // escribimos el nuevo contenido en el archivo, mostramos el error por consola
    fs.writeFile(rutaArchivo, contenidoActualizado, (err)=>{
        if(err){
            console.error('Error al escribir en el archivo: ', err);
            return 
        }
        console.log('Archivo actualizado correctamente.');
        
    })
    
})