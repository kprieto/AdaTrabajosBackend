/*Actividad 6: Gestión de un diario personal 
Consigna: Crea un programa que te permita gestionar un diario 
personal. El programa debe permitirte: 
1. Agregar una entrada al diario: Registrar una nueva entrada con 
la fecha y el texto. 
2. Listar las entradas: Mostrar todas las entradas registradas. 
3. Eliminar una entrada: Eliminar una entrada específica por su ID. 
Pistas: 
• Usa un archivo JSON para guardar las entradas del diario. 
• Cada entrada tendrá una fecha y un texto. 
• Si el archivo no existe, comienza con un arreglo vacío.*/
const fs = require('fs');


const filePath = './diario.json';


const leerDiario = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { diarios: [] };
    }
};

const escribirDiario = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const agregarEntrada = (texto) => {
    const data = leerDiario();
    const nuevaEntrada = {
        id: data.diarios.length + 1,
        fecha: new Date().toISOString(),
        texto
    };
    data.diarios.push(nuevaEntrada);
    escribirDiario(data);
    console.log('Entrada agregada:', nuevaEntrada);
};


const listarEntradas = () => {
    const data = leerDiario();
    console.log('Listado de entradas registradas:', data.diarios);
};


const eliminarEntrada = (id) => {
    const data = leerDiario();
    const index = data.diarios.findIndex(e => e.id === id);
    if (index !== -1) {
        const entradaEliminada = data.diarios.splice(index, 1);
        escribirDiario(data);
        console.log('Entrada eliminada:', entradaEliminada);
    } else {
        console.log('Entrada no encontrada:', id);
    }
};


agregarEntrada('Hoy fue un día increíble en la playa.');
agregarEntrada('Aprendí mucho sobre Node.js hoy.');
listarEntradas();
eliminarEntrada(1); 
listarEntradas();