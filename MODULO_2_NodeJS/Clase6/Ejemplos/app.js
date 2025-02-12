// Paso 1: Importamos el modulo readline
const readline = require('readline');

// cargamos las V:E desde el archivo -env usando dotenv
require('dotenv').config();

//establecmeos un saludo predeterminado usando una VE
//si no se define en el archivo .env usamos este valor por defecto
const defaultGreeting = process.env.GREETING || "Hola sin mas"

// procesamos los argumentos de la linea de comando (process.argv)
// capturamos el primer argumento despues del nombre del archivo como el
// nombre de usuario
// si no se proporciona un argumento, usamos invitado como valor predeterminado
const args = process.argv.slice(2);
const userName = args[0] || 'Chicas de Back <3'

// mostramos saludo personalizado y el nombre del usuario
console.log(`${defaultGreeting}, ${userName}`);

// mostrar info sobre el entorno de ejecución
console.log('Informacion sobre el entorno de ejecucion: ');

//directorio actual
console.log(`Directorio actual: ${process.cwd()}`);
//plataforma
console.log(`Plataforma: ${process.platform}`);

// creamos la interfaz para interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// usamos metodo rl question para mostrar la pregunta al usuario
rl.question('Cuantos anios tienes?', (age) => {
    console.log(`Wow, ${age} es una gran edad.`);
    rl.close()
})

// mostramos el evento close
rl.on('close', () =>{
    console.log('Gracias por usar este programa. Adios!!');
    process.exit(0);
    
})

