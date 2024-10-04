
// Script para la validación básica del formulario de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores de los campos del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Validar que el usuario y la contraseña no estén vacíos
    if (username === "" || password === "") {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Por favor, completa ambos campos.";
    } else {
        errorMessage.style.display = "none";

        // Aquí podrías agregar la lógica para validar credenciales con una base de datos o API.
        // Por ahora, solo mostraremos un mensaje.
        alert("Login exitoso! Usuario: " + username);
    }
});
