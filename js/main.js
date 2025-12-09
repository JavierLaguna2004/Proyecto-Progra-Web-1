
document.addEventListener("DOMContentLoaded", ()=>{
    
    console.log("Sitio de Autismo Siguatepeque cargado");
    
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
           
            const requiredFields = form.querySelectorAll('[required]');
            let valid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!valid) {
                e.preventDefault();
                alert('Por favor, complete todos los campos requeridos.');
            }
        });
    });


    const metodo = document.getElementById("seleccionMetodo");
    const tarjetacard = document.getElementById("tarjetacard");
    const transferenciadonacion = document.getElementById("transferenciadonacion");
    const formDonacion = document.getElementById("formDonacion");

    if (metodo && tarjetacard && transferenciadonacion && formDonacion){
        metodo.addEventListener("change", () => {

            tarjetacard.style.display = "none";
            transferenciadonacion.style.display = "none";

            if (metodo.value === "tarjeta"){
                tarjetacard.style.display = "block";
            }

            if (metodo.value === "transferencia"){
                transferenciadonacion.style.display = "block";
            }

        });

        formDonacion.addEventListener("submit", function(e){

            const monto = document.getElementById("txtMontodonador").value;
            const metodoPago = metodo.value;

            if (!metodoPago){
                e.preventDefault();
                alert("Seleccione un método de pago.");
                return;
            }

            if (metodoPago === "paypal"){
                e.preventDefault();
                window.open("https://www.paypal.com/");
            }

            if (metodoPago === "tarjeta"){
                e.preventDefault();
                alert("Pago con tarjeta pendiente");
            }

            if (metodoPago === "transferencia"){
                e.preventDefault();
                alert("En breve será redirigido a whatsapp.");
                window.open("https:wa.me/5040000-0000", "_blank");
            }


        });
    }
    // Validar formulario
    const myForm = document.getElementById("contact-form");
    const nombreInput = document.getElementById("nombre");
    const nombreError = document.getElementById("nombreError");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const asuntoInput = document.getElementById("asunto");
    const asuntoError = document.getElementById("asuntoError");
    const mensajeInput = document.getElementById("mensaje");
    const mensajeError = document.getElementById("mensajeError");

    const isEmptyRegex = /^\s*$/;
    const isValidEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidMessage = /^\s*\S+(?:\s+\S+){2,}\s*$/; 

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        nombreError.style.display = "none";
        if (isEmptyRegex.test(nombreInput.value)) {
            nombreError.style.display = "block";
            isValid = false;
        }

        emailError.style.display = "none";
        if (!isValidEmailRegex.test(emailInput.value)) {
            emailError.style.display = "block";
            isValid = false;
        }

        asuntoError.style.display = "none";
        if (isEmptyRegex.test(asuntoInput.value)) {
            asuntoError.style.display = "block";
            isValid = false;
        }

        mensajeError.style.display = "none";
        if (!isValidMessage.test(mensajeInput.value)) {
            mensajeError.style.display = "block";
            isValid = false;
        }

        if (isValid) {
            console.log("Formulario válido. Datos a enviar:", {
                nombre: nombreInput.value,
                email: emailInput.value,
                asunto: asuntoInput.value,
                mensaje: mensajeInput.value
            });
            myForm.submit();
        }
    });
});