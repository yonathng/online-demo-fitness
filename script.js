document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const currentItem = question.parentElement;
            
            // Cierra los otros acordeones abiertos (opcional, le da un toque premium)
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            // Alterna la clase activa en el elemento actual
            currentItem.classList.toggle("active");
        });
    });
});

// ANIMACIÓN AL HACER SCROLL (Intersection Observer)
const observerOptions = {
    root: null, // Usa el viewport del navegador como área de referencia
    rootMargin: '0px',
    threshold: 0.15 // El efecto se dispara cuando el 15% del elemento ya es visible
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si el elemento entra en la pantalla
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Una vez animado, dejamos de observarlo para ahorrar memoria
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Buscamos todos los elementos con la clase .reveal y los ponemos bajo la lupa del observador
document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach(el => scrollObserver.observe(el));
});