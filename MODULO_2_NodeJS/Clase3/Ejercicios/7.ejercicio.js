/*Actividad 7: Control de tareas diarias 
Consigna: Crea un programa para gestionar tus tareas diarias. El 
programa debe permitirte: 
1. Agregar una tarea diaria: Registrar una nueva tarea con su 
descripción y estado. 
2. Listar las tareas diarias: Mostrar todas las tareas con su estado. 
3. Marcar una tarea como completada: Cambiar el estado de una 
tarea de "pendiente" a "completada". 
Pistas: 
• Usa un archivo JSON para guardar las tareas. 
• El estado de cada tarea puede ser "pendiente" o "completada". 
• Si el archivo no existe, comienza con un arreglo vacío. */

const fs = require('fs');
const filePath = './tareas_diarias.json';


const leerTareas = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { tareas: [] };
    }
};


const escribirTareas = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const agregarTarea = (descripcion) => {
    const data = leerTareas();
    const nuevaTarea = {
        id: data.tareas.length + 1,
        descripcion,
        estado: 'pendiente'
    };
    data.tareas.push(nuevaTarea);
    escribirTareas(data);
    console.log('Tarea agregada:', nuevaTarea);
};


const listarTareas = () => {
    const data = leerTareas();
    console.log('Todas las tareas registradas:', data.tareas);
};


const completarTarea = (id) => {
    const data = leerTareas();
    const tarea = data.tareas.find(t => t.id === id);
    if (tarea) {
        tarea.estado = 'completada';
        escribirTareas(data);
        console.log('Tarea completada:', tarea);
    } else {
        console.log('Tarea no encontrada:', id);
    }
};


agregarTarea('Estudiar para el examen de programación');
agregarTarea('Ir a la playa');
listarTareas();
completarTarea(1); 
listarTareas();