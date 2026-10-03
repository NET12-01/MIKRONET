document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de aparición al hacer scroll (Intersection Observer)
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Dejar de observar una vez que ya se mostró
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 2. Manejo del formulario de contacto (Simulación)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            // Simular envío de datos
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Mostrar mensaje de éxito
                formMessage.textContent = '¡Gracias! Un asesor de Mikronet Fibra te contactará pronto.';
                formMessage.style.color = '#10b981'; // Verde éxito
                
                // Resetear formulario
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
            }, 1500);
        });
    }

    // 3. Efecto de scroll en el header (cambiar sombra)
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            header.style.padding = '15px 0';
        }
    });
});