function validarCVV(input) {
    // Eliminar cualquier carácter que no sea un número
    input.value = input.value.replace(/\D/g, '');

    // Limitar la longitud del campo a 3 dígitos
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
}

function validarNumeroTarjeta(input) {
    // Eliminar cualquier carácter que no sea un número
    input.value = input.value.replace(/\D/g, '');

    // Limitar la longitud del campo a 16 dígitos
    if (input.value.length > 16) {
        input.value = input.value.slice(0, 16);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const expirationDateInput = document.getElementById("expirationDate");

    expirationDateInput.addEventListener("input", function (event) {
        let input = event.target;
        let value = input.value.replace(/\D/g, ''); // Eliminar cualquier carácter que no sea un número
        let formattedValue = "";

        // Agregar "/" después de los primeros dos caracteres si hay más de dos caracteres
        if (value.length > 2) {
            formattedValue = value.substring(0, 2) + "/" + value.substring(2);
        } else {
            formattedValue = value;
        }

        // Limitar la longitud del campo a 5 caracteres (incluyendo el "/")
        if (formattedValue.length > 5) {
            formattedValue = formattedValue.slice(0, 5);
        }

        input.value = formattedValue;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function (event) {
        var inputValue = event.target.value;

        // Eliminar caracteres no permitidos, manteniendo solo números y el símbolo "+"
        var cleanInput = inputValue.replace(/[^\d+]/g, "");

        // Limitar la longitud a 12 caracteres (incluido el símbolo "+")
        cleanInput = cleanInput.slice(0, 12);

        // Actualizar el valor del campo de entrada
        phoneInput.value = cleanInput;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('idrut').addEventListener('input', function(evt) {
        let rut = evt.target.value.replace(/\D/g, ''); // Elimina caracteres que no sean números
        if (rut.length >= 9) {
            let rutFormateado = rut.slice(0, 2) + '.' + rut.slice(2, 5) + '.' + rut.slice(5, 8) + '-' + rut.slice(-1);
            evt.target.value = rutFormateado;
        }
    });
});