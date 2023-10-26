// Asignar una función al evento "submit" del formulario
document.querySelector('form').addEventListener('submit', function (event) {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault(); // Evita el envío del formulario
    }

    // Validar el formato de la dirección de correo electrónico
    if (!isValidEmail(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        event.preventDefault(); // Evita el envío del formulario
    }
});

// Función para validar el formato de una dirección de correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
