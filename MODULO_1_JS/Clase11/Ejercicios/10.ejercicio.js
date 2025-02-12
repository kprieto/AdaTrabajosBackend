// Ejercicio 10: Adivina el número 
// Consigna: 
// Crea un programa donde la computadora seleccione un número al azar entre 1 
// y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario 
// acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén 
// los intentos restantes. Si no acierta después de los 3 intentos, muestra el 
// número secreto. Usa un for para resolver este ejercicio. 

const prompt = require("prompt-sync")({ sigint: true });

let numAleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

for (let i = 1; i <= 3; i++){
    let numero = parseFloat(prompt("Introduce un número entero: "));
    if (numero == numAleatorio){
        console.log("Felicidades haz adivinado el número secreto!!!");
        
    }

    if (i == 3){
        console.log(`Lo siento haz fallado, el número secreto es ${numAleatorio}.`);
        
    }
}