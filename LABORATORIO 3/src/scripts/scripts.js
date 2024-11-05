
function mostrarMensaje() {
    const mensaje = "¡Bienvenido/a! Gracias por visitar mi página.";
    document.getElementById('mensajeBienvenida').innerText = mensaje;
}

function validarFormulario() {
    const nombre = document.getElementById('nombreContacto').value;
    const email = document.getElementById('emailContacto').value;

    if (nombre === "" || email === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    alert(`Gracias por contactarme, ${nombre}! Responderé a tu mensaje pronto.`);
    return true;
}
