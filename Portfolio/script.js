document.getElementById('toggle-info').addEventListener('click', function() {
    const aboutSection = document.getElementById('about-me');
    
    // Verifica si la sección está oculta
    if (aboutSection.classList.contains('hidden')) {
        aboutSection.classList.remove('hidden');
        aboutSection.style.maxHeight = aboutSection.scrollHeight + "px"; // Establece la altura máxima al contenido
    } else {
        aboutSection.style.maxHeight = "0"; // Coloca la altura máxima a 0
        setTimeout(() => {
            aboutSection.classList.add('hidden'); // Agrega la clase oculta después de que la animación termine
        }, 500); // Tiempo que coincide con la duración de la transición
    }
});
