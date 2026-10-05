document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de aparición al hacer scroll (Intersection Observer)
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 2. Lógica del Acordeón de Preguntas Frecuentes (FAQ)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los elementos abiertos
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Abrir el elemento clickeado si no estaba activo
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 3. Simulación de Verificación de Cobertura
    const coverageForm = document.getElementById('coverageForm');
    const coverageMessage = document.getElementById('coverageMessage');

    if (coverageForm) {
        coverageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const addressInput = document.getElementById('addressInput').value;
            
            coverageMessage.textContent = 'Verificando disponibilidad...';
            coverageMessage.style.color = 'var(--text-light)';

            setTimeout(() => {
                // Simulación: Si la dirección tiene menos de 5 caracteres, decimos que no hay cobertura.
                // En la vida real, aquí conectarías con una API o base de datos.
                if (addressInput.length > 5) {
                    coverageMessage.textContent = '¡Buenas noticias! Tenemos cobertura en tu zona. Un asesor te contactará.';
                    coverageMessage.style.color = '#10b981'; // Verde
                } else {
                    coverageMessage.textContent = 'Lo sentimos, por el momento no tenemos cobertura en esa dirección.';
                    coverageMessage.style.color = '#ef4444'; // Rojo
                }
                coverageForm.reset();
            }, 1500);
        });
    }

    // 4. Manejo del formulario de contacto (Simulación)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            setTimeout(() => {
                formMessage.textContent = '¡Gracias! Un asesor de Mikronet Fibra te contactará pronto.';
                formMessage.style.color = '#10b981';
                
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
            }, 1500);
        });
    }

    // 5. Efecto de scroll en el header
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
