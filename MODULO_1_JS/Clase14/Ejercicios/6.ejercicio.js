/*Ejercicio 6: El deportista 
Para este ejercicio deberán definir un objeto literal “deportista”, con los 
siguientes atributos: nombre, energía, experiencia. 
Ademas queremos poder pedirle al deportista que entrene. Para esto, 
nuestro trabajo va a ser realizar una función “entrenarHoras.” 
La función entrenarHoras tiene las siguientes tres características: 
✓ Recibe por parámetro la cantidad de horas. 
✓ Resta a su energía (this.energia) la cantidad de horas x 5. 
✓ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2. 
Una vez definida la función, podemos ejecutar el código y ver cómo va 
variando la energía y experiencia del deportista por consola. */

const deportista ={
    nombre: "Leonel Messi",
    energia: 100,
    experiencia: 100
}

function entrenarHoras (horas){
    let restarEnergia = deportista.energia - (horas * 5);
    console.log(`La energía del deportista ${deportista.nombre} es de: ${restarEnergia} %`);
    let incrementarExp = (horas * 2) + deportista.experiencia;
    console.log(`La experiencia del deportista ${deportista.nombre} es de: ${incrementarExp}`);
    
}

entrenarHoras(5);