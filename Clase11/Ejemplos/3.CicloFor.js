//Programa que simula ser un lorito: REpite lo que oye 5 veces

// Paso 1: Importamos el modulo promp-sync
const prompt = require('prompt-sync')();

// Paso 2: Solicitamos al usuario que ingrese un texto
let texto = prompt("Ingrese el texto que quieres que el loro repita: ");

// Paso 3: Usamos el cliclo for para repetir el texto 5 veces
// Estrucutra del ciclo:
// - Inicializacion: let i= 0 (inicializa el contador en 0)
//- condicion: i < 5 (el ciclo continua mientras i sea mayor que 5)
// - Incremento: i ++ (una 1 al contador en cada iteracion)
for (let i = 0; i < 5; i++){
    console.log(`Repeticion ${i + 1} : ${texto}`);
    
}