// Funcionalidad del acordeón
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Alternar la clase 'active'
        button.classList.toggle('active');

        // Mostrar u ocultar el contenido
        if (button.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});



// script.js
document.getElementById('proyectos-button').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar la acción predeterminada
    const submenu = document.getElementById('proyectos-submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // Alternar visibilidad
});
