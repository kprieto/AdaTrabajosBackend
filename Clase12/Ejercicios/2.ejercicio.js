// Ejercicio 2: Do While 
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario 
// ingrese la correcta. La contraseña correcta es "1234". 

const prompt = require("prompt-sync")({ sigint: true });

let password = "1234";
let pass = prompt("Introduce una contraseña: ");

if (pass === password){
    console.log(`Haz adivinado la contraseña correcta.`);
    
} else {
    console.log("¡¡¡Intenta de nuevo!!!");
    do{
        pass = prompt("Introduce una contraseña: ");
        if (pass === password){
            console.log(`Haz adivinado la contraseña correcta.`);
            
        } else {
            console.log("¡¡¡Intenta de nuevo!!!");
            
        }
    } while (pass != password);
}
