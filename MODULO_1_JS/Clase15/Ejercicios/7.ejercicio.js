/*Ejercicio 7: Verificar si una lista contiene un elemento 
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si 
"Sushi" está en la lista y muestra un mensaje que confirme si está o no. */

let comidas = ["Pizza", "Hamburguesa", "Tacos"];
let contieneSushi = comidas.includes("Sushi");
let resultado =  contieneSushi === true ? "Si" : "No"
console.log("Esta la comida Sushi?", resultado );
