// assets/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('formStatus');

    // ⚠️ REEMPLAZAR CON TU ID REAL DE FORMSPREE
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqekknke'; 

    if(form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Feedback visual de carga
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-75');

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    statusMsg.innerText = '¡Mensaje enviado con éxito!';
                    statusMsg.classList.remove('hidden', 'text-red-600');
                    statusMsg.classList.add('text-green-600');
                    form.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                statusMsg.innerText = 'Hubo un error. Intenta por WhatsApp.';
                statusMsg.classList.remove('hidden', 'text-green-600');
                statusMsg.classList.add('text-red-600');
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-75');
            }
        });
    }
});