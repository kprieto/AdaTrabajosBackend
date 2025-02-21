// Importamos el modulo readline-sync
const readlineSync = require ('readline-sync')

const lenguajes = ['java','javascript','python','c++' ]

const indiceSeleccionado = readlineSync.keyInSelect(lenguajes, 'Cual es tu lenguaje de programacion?')

if (indiceSeleccionado === -1){
    console.log('No has selecciona ningun lenguaje');
    
} else {
    console.log(`Has seleccionado ${lenguajes[indiceSeleccionado]}`);
    
}