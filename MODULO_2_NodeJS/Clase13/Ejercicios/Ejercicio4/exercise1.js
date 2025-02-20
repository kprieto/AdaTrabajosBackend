/*Ejercicio 1: Crear y Mostrar un Objeto JSON 
Objetivo: Crear un objeto JSON simple y mostrarlo en la consola. 
Instrucciones: 
1. Crea un archivo llamado exercise1.js. 
2. Define un objeto JSON que represente a una persona (incluye 
campos como nombre, edad, y email). 
3. Convierte el objeto JSON a una cadena y muéstralo en la consola. */

const persona = {
    nombre: "Ana Karen",
    edad: 30,
    email: "ana.karen@gmail.com"
};

const personaJSON = JSON.stringify(persona, null, 2);

console.log(personaJSON);