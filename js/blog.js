document.addEventListener("DOMContentLoaded", () => {
    // Cambiar entre el modo oscuro y claro
    const switcher = document.getElementById("themeSwitcher");
    const isDark = localStorage.getItem("theme") === "dark";

    if (isDark) document.body.classList.add("dark-mode");

    switcher.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });

    // Animaciones al hacer scroll (fade-in)
    const faders = document.querySelectorAll('.fade-in');  // Seleccionar todos los elementos con la clase .fade-in
    const firstPost = document.querySelector('.first-post'); // Seleccionar el primer post

    // Mostrar el primer post inmediatamente
    if (firstPost) {
        firstPost.classList.add('show');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');  // Se agrega la clase 'show' cuando el elemento entra en vista
            }
        });
    }, {
        threshold: 0.5  // 50% del elemento debe estar visible para activar la animación
    });

    faders.forEach(el => observer.observe(el));  // Observar todos los elementos .fade-in
});
