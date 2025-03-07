/*Ejercicio 4: Sistema de Autenticación con UUID y JSON 
Consigna: 
Crea un sistema de autenticación básico donde los usuarios puedan 
registrarse e iniciar sesión. Cada usuario debe tener un ID único 
generado con UUID y sus datos deben guardarse en un archivo JSON. 
Pasos: 
• Usa el módulo uuid para generar IDs únicos. 
• Usa fs para guardar y leer los usuarios en un archivo JSON. 
• Implementa funciones para registrar usuarios y validar 
credenciales. */
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const filePath = './usuarios.json';


const leerUsuarios = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { usuarios: [] };
    }
};


const escribirUsuarios = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const registrarUsuario = (nombreUsuario, contrasena) => {
    const usuarios = leerUsuarios();
    const nuevoUsuario = {
        id: uuidv4(),
        nombreUsuario,
        contrasena
    };
    usuarios.usuarios.push(nuevoUsuario);
    escribirUsuarios(usuarios);
    console.log('Usuario registrado:', nuevoUsuario);
};


const validarCredenciales = (nombreUsuario, contrasena) => {
    const usuarios = leerUsuarios();
    const usuarioValido = usuarios.usuarios.find(usuario => 
        usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena
    );
    if (usuarioValido) {
        console.log('Inicio de sesión exitoso para:', nombreUsuario);
        return true;
    } else {
        console.log('Credenciales inválidas para:', nombreUsuario);
        return false;
    }
};


registrarUsuario('usuario1', 'contrasena1');
validarCredenciales('usuario1', 'contrasena1'); 
validarCredenciales('usuario1', 'contrasenaIncorrecta');