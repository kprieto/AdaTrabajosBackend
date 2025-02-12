/*
Ejercicio 5: Convierte temperaturas como un profesional 
Consigna: 
Crea un programa interactivo que permita convertir temperaturas de 
grados Celsius a Fahrenheit. Este ejercicio te ayudará a practicar el uso 
del módulo readline para manejar entradas del usuario y aplicar cálculos 
básicos. Además, incluye un mensaje personalizado de bienvenida 
configurado a través de variables de entorno. 
Requisitos del programa: 
1. Usa una variable de entorno llamada WELCOME_MESSAGE para 
mostrar un mensaje inicial. Si no se define, usa "¡Bienvenido al 
conversor de temperaturas!" por defecto. 
2. Usa el módulo readline para solicitar al usuario una temperatura en 
grados Celsius. 
3. Calcula la conversión a Fahrenheit usando la fórmula: 
        Fahrenheit = Celsius x 9/5 + 32
(Se pueden ayudar buscando como es la fórmula en código en 
internet) 
4. Muestra el resultado en la consola. 
5. Despídete del usuario al final. 
*/
const readline = require('readline');

require('dotenv');

const defaultMessage = process.env.WELCOME_MESSAGE || 'Bienvenidos al conversor de temperatura';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa una temperatura en grados celsius: ", (grado) => {
    console.log(`${defaultMessage}`);
    console.log("Conversion a Fahrenheit:");
    let fahrenheit = grado * 9/5 + 32
    console.log(fahrenheit);
    
    rl.on('close', () =>{
        console.log(`Gracias por utilizar el convertidor de temperaturas.`);
        process.exit(0);
    })
    rl.close();
})
