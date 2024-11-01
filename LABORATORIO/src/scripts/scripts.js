
function verificarCalificaciones() {
    const nombre = document.getElementById('nombre').value;
    const nota = parseFloat(document.getElementById('nota').value);
    let mensaje;

    if (nota > 100 || nota < 0) {
        mensaje = `No es posible darte una nota válida. Ingrese una calificación válida.`;
    } else if (nota >= 90) {
        mensaje = `¡Hola ${nombre}! Gusto en saludarte. \n\nTú calificación es de ${nota}. \nAprobado con Honores. \n¡Fabuloso!`;
    } else if (nota >= 70) {
        mensaje = `¡Hola ${nombre}! Gusto en saludarte. \n\nTú calificación es de ${nota}. \nAprobado. \n¡Genial!`;
    } else {
        mensaje = `¡Hola ${nombre}! Gusto en saludarte. \n\nTú calificación es de ${nota}. \nReprobado. Esfuérzate más la próxima.`;
    }

    document.getElementById('resultadoEjercicio1').innerText = mensaje;
}

function determinarParImpar() {
    const num = parseInt(document.getElementById('numero').value);
    let mensaje;

    if (num % 2 === 0) {
        mensaje = `${num} es un número par.`;
    } else if (num % 3 === 0) {
        mensaje = `${num} es un número impar.`;
    } else if (num === 0) {
        mensaje = `${num} es un número neutro.`;
    }

    document.getElementById('resultadoEjercicio2').innerText = mensaje;
}

function Descuentos() {
    const compra = parseFloat(document.getElementById('compra').value);
    let mensaje;

    if (compra > 100) {
        const descuento = compra * 0.10;
        const totalPagar = compra - descuento;
        mensaje = `Monto original: $${compra}\n\nDescuento: $${descuento}%\n\nMonto final a pagar: $${totalPagar}`;
    } else {
        mensaje = `Monto original: $${compra}\nNo aplica descuento.\n\nMonto final a pagar: $${compra}`;
    }

    document.getElementById('resultadoEjercicio3').innerText = mensaje;
}