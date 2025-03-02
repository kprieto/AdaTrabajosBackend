// Importamos el modulo y la vista
const taskModel = require('../models/taskModel')
const taskView = require('../views/taskView')

//funcion para mostrar tareas
function showTasks(){
    const tasks = taskModel.readTasks() // leermos las tareas desde el modelo
    taskView.displayTasks()// mostramos las tareas usando la vista
}

// Funcion para agregar una tarea
function addTask(){
    const taskDescription = taskView.prompForTask() // pedimos al usuario que ingrese la descripcion de la tareas
    const tasks = taskModel.readTasks()//leemos las tareas actuales
    tasks.push({description: taskDescription, completed: false})//agregamos la nueva tarea a la lista
    taskModel.saveTasks(tasks) // guardamos las tareas actualizadas en el json
    taskView.confirmationMessage('Tarea agregada') // mostramos un mensaje de confirmacion
}
// Funcion para eliminar una tarea
function removeTask(){
    const task = taskModel.readTasks() // leemos la tarea
    if (tasks.length === 0){
        taskView.addTask('No hay tareas para eliminar')
        return
    } 
    const taskID = taskView.prompForTaskId(tasks) // pedimos al usuario que elija un tarea para eliminar
    tasks.splice(taskID, 1) //eliminamos la tarea seleccionada
    taskModel.saveTasks(tasks) // guardamos las tareas actualizadas en el json
    tasksView.confirmationMessage('Tarea eliminada') // mostramos un mensaje de confirmacion
}

// exportacion de las funciones
module.exports = {showTasks, addTask, removeTask}