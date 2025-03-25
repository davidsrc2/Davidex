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

    // Verificar el tamaño de la pantalla
    const isSmallScreen = window.innerWidth <= 768;  // Definir el umbral de pantalla pequeña (por ejemplo, 768px)

    // Si la pantalla es pequeña, mostrar todas las entradas sin esperar al scroll
    if (isSmallScreen) {
        const faders = document.querySelectorAll('.fade-in');
        faders.forEach(el => el.classList.add('show'));  // Añadir la clase 'show' a todos los elementos
    } else {
        // Animación de entrada con desplazamiento solo en pantallas grandes
        const faders = document.querySelectorAll('.fade-in');  // Seleccionar todos los elementos con la clase .fade-in
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');  // Se agrega la clase 'show' cuando el elemento entra en vista
                }
            });
        }, {
            threshold: 0.5  // 50% del elemento debe estar visible para activar la animación
        });

        faders.forEach(el => observer.observe(el));  // Aplicar el observer a todas las entradas
    }
});
