// Ejercicio 3: Clasificación de edades 
// Solicita al usuario una edad y usa una función flecha para clasificarla en niño, 
// adolescente, adulto o adulto mayor. 

const prompt= require("prompt-sync")();

let edad = parseFloat(prompt("Introduce tu edad: "));

const determinarEdad = (edad) => {
    if(edad <= 12){
        return "Nino.";
    } else if(edad >= 13 && edad <= 18){
        return "Adolescente.";
    } else if (edad >= 19 && edad <= 59){
        return "Adulto.";
    } else {
        return "Adulto Mayor.";
    }
}

console.log("Eres un", determinarEdad(edad));
