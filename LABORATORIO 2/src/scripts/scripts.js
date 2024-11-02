
const numeros = [];
let contraseñaGuardada = null;

function agregarNumero() {
    const numInput = document.getElementById('num');
    const numero = parseFloat(numInput.value);
    const mensaje = document.getElementById('mensaje');

    if (!isNaN(numero)) {
        numeros.push(numero);
        numInput.value = '';
        mensaje.innerText = `Número agregado: ${numero}`;
    } else {
        mensaje.innerText = "Por favor, ingresa un número válido.";
    }
}

function calcularSuma() {
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    document.getElementById('resultadoSuma').innerText = `La suma total es: ${suma}`;
}

function solicitarNumeroNegativo() {
    const numeroInput = document.getElementById('numeroNegativo');
    const numero = parseFloat(numeroInput.value);
    const resultado = document.getElementById('resultadoNegativo');

    if (numero >= 0) {
        resultado.innerText = `Número ingresado: ${numero}. Por favor, ingresa un número negativo.`;
    } else {
        resultado.innerText = `¡Número negativo (${numero}) ingresado! El bucle ha terminado.`;
    }

    numeroInput.value = '';
}

function establecerContraseña() {
    const nuevaContraseña = document.getElementById('nuevaContraseña').value;
    const mensajeEstablecer = document.getElementById('mensajeEstablecer');

    if (nuevaContraseña.trim() !== "") {
        contraseñaGuardada = nuevaContraseña;
        mensajeEstablecer.innerText = "Contraseña establecida con éxito.";
    } else {
        mensajeEstablecer.innerText = "Por favor, ingresa una contraseña válida.";
    }

    document.getElementById('nuevaContraseña').value = '';
}

function verificarContraseña() {
    const verificarContraseña = document.getElementById('verificarContraseña').value;
    const mensajeVerificar = document.getElementById('mensajeVerificar');

    if (contraseñaGuardada === null) {
        mensajeVerificar.innerText = "Primero establece una contraseña.";
    } else if (verificarContraseña === contraseñaGuardada) {
        mensajeVerificar.innerText = "Contraseña correcta. ¡Acceso concedido!";
    } else {
        mensajeVerificar.innerText = "Contraseña incorrecta. Inténtalo de nuevo.";
    }

    document.getElementById('verificarContraseña').value = '';
}
