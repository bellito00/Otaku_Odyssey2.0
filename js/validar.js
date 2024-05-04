document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password === confirmPassword) {
        message.innerHTML = "";
    } else {
        message.innerHTML = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.";
    }

    if (password !== confirmPassword) {
        message.innerHTML = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.";
        return false; // Evita que el formulario se envíe
    }

    window.location.href = "confirmacion.html";


});

function validar(){
    document.getElementById('passwordForm2').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const message = document.getElementById('message');
    
        if (password === confirmPassword) {
            message.innerHTML = "";
        } else {
            message.innerHTML = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.";
        }
    
        if (password !== confirmPassword) {
            message.innerHTML = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.";
            return false; // Evita que el formulario se envíe
        }
    
        window.location.href = "login.html";
    
    
    });
}

document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirmPassword').addEventListener('input', validatePassword);

function validatePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password === confirmPassword) {
        message.innerHTML = "";
    } else {
        message.innerHTML = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.";
    }

}
