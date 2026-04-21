// Manejo de eventos de la plataforma English 4 You (Edición Neobrutalista)

document.addEventListener('DOMContentLoaded', () => {
    
    const btnCta = document.getElementById('btn-cta-nav');

    // Acción para el botón de Prueba de Nivel
    btnCta.addEventListener('click', () => {
        // Un mensaje más directo y crudo
        alert('INICIANDO EVALUACIÓN. Sin rodeos. Muestra lo que sabes.');
    });

    // Gestión del scroll para la navegación (opcional, el neobrutalismo prefiere lo estático, pero esto ayuda a la UX)
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-neo-sm');
        } else {
            nav.classList.remove('shadow-neo-sm');
        }
    });

    // Log de inicialización con estilo
    console.log("%cE4Y: Estética Neobrutalista Activada.", "color: #ccff00; background: #000000; font-weight: bold; font-size: 16px; padding: 4px; border: 2px solid #ccff00;");
});