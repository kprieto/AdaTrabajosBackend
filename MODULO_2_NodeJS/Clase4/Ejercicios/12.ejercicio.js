/*Ejercicio 12: Sistema de registro de tareas           
Consigna: 
Crea un programa que maneje un archivo tareas.json con las siguientes 
funcionalidades: 
1. Agregar una tarea: Cada tarea debe tener nombre, descripcion y 
estado (pendiente o completa). 
2. Completar una tarea: Cambia el estado de una tarea a completa. 
3. Listar tareas por estado: Muestra las tareas agrupadas por su 
estado (pendiente o completa). 
Pista: Utiliza métodos como filter y map para manipular la lista de 
tareas. */

const fs = require('fs');

const leerTareas = () => {
    try {
        const data = fs.readFileSync('tareas.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { tareas: [] };
    }
};


const escribirTareas = (data) => {
    try {
        fs.writeFileSync('tareas.json', JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const agregarTarea = (nombre, descripcion, estado = 'pendiente') => {
    const data = leerTareas();
    const nuevaTarea = { nombre, descripcion, estado };
    data.tareas.push(nuevaTarea);
    escribirTareas(data);
    console.log('Tarea agregada:', nuevaTarea);
};


const completarTarea = (nombre) => {
    const data = leerTareas();
    const tarea = data.tareas.find(t => t.nombre === nombre);
    if (tarea) {
        tarea.estado = 'completa';
        escribirTareas(data);
        console.log('Tarea completada:', tarea);
    } else {
        console.log('Tarea no encontrada:', nombre);
    }
};


const listarTareasPorEstado = (estado) => {
    const data = leerTareas();
    const tareasFiltradas = data.tareas.filter(t => t.estado === estado);
    console.log(`Tareas ${estado}:`, tareasFiltradas);
};


agregarTarea('Estudiar Node.js', 'Estudiar los fundamentos de Node.js');
agregarTarea('Hacer ejercicio', 'Hacer ejercicio durante 30 minutos');
agregarTarea('Relajación', 'Practicar la relajación durante 30 minutos');
completarTarea('Estudiar Node.js');
listarTareasPorEstado('pendiente');
listarTareasPorEstado('completa');