/*Actividad 9: Registro de eventos 
Consigna: Crea un programa para registrar eventos. El programa debe 
permitirte: 
1. Agregar un evento: Registrar un evento con nombre, fecha y 
lugar. 
2. Listar los eventos: Mostrar todos los eventos registrados. 
3. Eliminar un evento: Eliminar un evento de la lista. 
Pistas: 
• Usa un archivo JSON para guardar los eventos. 
• Si el archivo no existe, comienza con un arreglo vacío. 
• Cada evento debe tener un ID único. */
const fs = require('fs');
const filePath = './eventos.json';

const leerEventos = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { eventos: [] };
    }
};


const escribirEventos = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const agregarEvento = (nombre, fecha, lugar) => {
    const data = leerEventos();
    const nuevoEvento = {
        id: data.eventos.length + 1,
        nombre,
        fecha,
        lugar
    };
    data.eventos.push(nuevoEvento);
    escribirEventos(data);
    console.log('Evento agregado:', nuevoEvento);
};


const listarEventos = () => {
    const data = leerEventos();
    console.log('Listado de eventos registrados:', data.eventos);
};


const eliminarEvento = (id) => {
    const data = leerEventos();
    const index = data.eventos.findIndex(e => e.id === id);
    if (index !== -1) {
        const eventoEliminado = data.eventos.splice(index, 1);
        escribirEventos(data);
        console.log('Evento eliminado:', eventoEliminado);
    } else {
        console.log('Evento no encontrado:', id);
    }
};


agregarEvento('Concierto de Rock', '2025-07-15', 'Auditorio Nacional');
agregarEvento('Feria del Libro', '2025-09-20', 'Centro de Convenciones');
listarEventos();
eliminarEvento(1); 
listarEventos();