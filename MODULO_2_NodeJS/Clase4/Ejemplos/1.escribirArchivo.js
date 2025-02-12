const fs = require('fs'); // PASO 1: importamos el modulo

//PASO 2: configuramos una variable de nombre de datos que conteine los datos a persistir
datos = 'Ejemplo de datos que podemos escribir en un archivo';

// PASO 3: Utilizamos el modulo fs ''writeFile' que nos permita escribir datos en un archivo
// 1. wF crea el archivo por nosotros, el nombre de dicho archivo
// 2 Segundo parametro es donde guardamos los datos, en este cado es una variable
// 3. Tercer parametro hace referencia a que hacer si ocurre un error. en el cado de error, va a dar lugar a qie se lance un error.

fs.writeFile('archivo.txt', datos, function(err){
    if (!err){
        console.log('Los datos han sido escritos a archivo.txt');
        
    } else {
        throw err;
    }
})

// PASO 4. / EXTRAS:
// Errores: En este tipo de archivos tienen que ver principalmente con intentar escribir
// en un archivo dentro de un directorio en el cual no
// tenemos acceso/permisos para escribir

// Donde se guarda el archivo: El archivo se va a guardar exactamente en 
// el mismo lugar donde se encuentra el script que lo ejecuta. En este caso
// este archivo si quisierams que se guardara en otra ruta, tenemos
// que indicar antes del nombre 'archivo.txt'(la ruta completa)

// Throw:se utiliza para lanzar una execepcion que es una forma de manejar
// errores o situaciones excepcionales en el codigo. Cuando se uasa el throw
// podemos detener la ejecucion norma del codigo y transferir el control a
// un bloque de codigo que maneje el error, normalente en un bloque try catch

