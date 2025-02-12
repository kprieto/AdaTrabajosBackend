// PASO 1: importamos el modulo
const fs = require('fs');

// PASO 2 : Usamos el metodo readfile
// 1 argumento: Archivo a leer. Si el archivo no esta en el mismo directorio, colocar la ruta
//2 Argumento: La codificacion, utf-8 (unicode transfromation format 8 bits y es una codificacion de catacteres que se utilizan para presentar texto en computadora y tambien en la web)
// 3 Aegumento: Callback:
// A. Paramentro 1: err Un objeto de error que indica si algo salio mal durante la lectura del archivo
// B. Parametro 2 data: contiene el contenido del archivo leiod di no hibo error
fs.readFile('archivo.txt', 'utf-8', function(err,data){
    if (!err){
        console.log(data);
        
    } else{
        throw err
    }
})

