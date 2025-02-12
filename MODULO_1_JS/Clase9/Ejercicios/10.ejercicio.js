// Ejercicio 10:  
// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
// semana correspondiente. Si el número no está dentro de ese rango, 
// muestra un mensaje de error. 
const prompt = require("prompt-sync")({ sigint: true });

let dia= parseFloat(prompt("Introduce un número del 1 al 7: "));

if (dia == 1){
    console.log("El día de la semana es Lunes.");
    
} else if (dia == 2){
    console.log("El día de la semana es Martes.");

} else if (dia == 3){
    console.log("El día de la semana es Miércoles.");

} else if (dia == 4){
    console.log("El día de la semana es Jueves.");

} else if (dia == 5){
    console.log("El día de la semana es Viernes.");

} else if (dia == 6){
    console.log("El día de la semana es Sábado.");

} else if (dia == 7) {
    console.log("El día de la semana es Domingo.");

} else {
    console.log("El día de la semana no existe.");

}