const crypto = require('crypto')

// datos a autenticar
const data = 'Mensaje secreto'

// clave secreta oara hmac
const secretKey = 'mi_clave_secreta'

// creacion de un objeto hmac usando un algortimo sha256
const hmac = crypto.createHmac('sha256', secretKey)

// actualizamo el hmac con los datos
hmac.update(data)

// obtener el hmac en formato hexadecimal
const hmacOutput = hmac.digest('hex')

//leemos el hmac generado
console.log('HMAC de sha256:', hmacOutput);
