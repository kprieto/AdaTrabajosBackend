/*Actividad 3: Registro de tareas pendientes 
Consigna: Crea un programa para gestionar tus tareas pendientes. El 
programa debe permitirte: 
1. Agregar una tarea: Registrar una tarea pendiente con su 
descripción. 
2. Listar las tareas: Mostrar todas las tareas registradas. 
3. Eliminar una tarea: Eliminar una tarea de la lista. 
Pistas: 
• Usa un archivo JSON para guardar las tareas. 
• Si el archivo no existe, comienza con un arreglo vacío. 
• Eliminar una tarea se puede hacer por su ID. */
const fs = require('fs');
const filePath = './tareas_pendientes.json';


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


const eliminarTarea = (id) => {
        const data = leerTareas();
        const index = data.tareas.findIndex(t => t.id === id);
        if (index !== -1) {
        const tareaEliminada = data.tareas.splice(index, 1);
        escribirTareas(data);
        console.log('Tarea eliminada:', tareaEliminada);
        } else {
        console.log('Tarea no encontrada:', id);
        }
};


agregarTarea('Leer un libro');
agregarTarea('Ir al gimnasio');
listarTareas();
eliminarTarea(1); 
listarTareas();