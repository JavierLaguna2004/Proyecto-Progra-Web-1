
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
});