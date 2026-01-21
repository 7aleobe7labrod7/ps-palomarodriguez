document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DEL FORMULARIO ---
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('formStatus');
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqekknke'; 

    if(form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

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
                    statusMsg.className = 'text-center text-sm mt-2 text-green-600';
                    form.reset();
                } else {
                    throw new Error('Error');
                }
            } catch (error) {
                statusMsg.innerText = 'Hubo un error. Intenta por WhatsApp.';
                statusMsg.className = 'text-center text-sm mt-2 text-red-600';
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                statusMsg.classList.remove('hidden');
            }
        });
    }

    // --- LÓGICA DEL CARRUSEL (SWIPER) ---
    // Inicializamos Swiper después de que el DOM esté cargado
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});