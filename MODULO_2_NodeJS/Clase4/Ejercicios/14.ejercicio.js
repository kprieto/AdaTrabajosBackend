/*Ejercicio 14: Diario personal        
Consigna: 
Desarrolla un programa para escribir entradas de un diario en un archivo 
diario.json. Cada entrada debe incluir fecha, titulo y contenido. Además: 
1. Permite listar todas las entradas. 
2. Filtra entradas por una palabra clave en el título. 
Pista: Usa new Date() para registrar la fecha automáticamente. */
const fs = require('fs');



const leerDiario = () => {
    try {
        const data = fs.readFileSync('diario.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { entradas: [] };
    }
};


const escribirDiario = (data) => {
    try {
        fs.writeFileSync('diario.json', JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const agregarEntrada = (titulo, contenido) => {
    const data = leerDiario();
    const nuevaEntrada = {
        fecha: new Date().toISOString(),
        titulo,
        contenido
    };
    data.entradas.push(nuevaEntrada);
    escribirDiario(data);
    console.log('Entrada agregada:', nuevaEntrada);
};


const listarEntradas = () => {
    const data = leerDiario();
    console.log('Todas las entradas:', data.entradas);
};


const filtrarEntradasPorTitulo = (palabraClave) => {
    const data = leerDiario();
    const entradasFiltradas = data.entradas.filter(entrada => entrada.titulo.includes(palabraClave));
    console.log(`Entradas que contienen "${palabraClave}" en el título:`, entradasFiltradas);
};


agregarEntrada('Un día en la playa', 'Hoy fui a la playa y fue maravilloso.');
agregarEntrada('Estudio intensivo', 'Pasé todo el día estudiando Node.js.');
listarEntradas();
filtrarEntradasPorTitulo('playa');