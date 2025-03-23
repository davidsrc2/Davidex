const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isOpen = content.style.maxHeight;

        document.querySelectorAll(".accordion-content").forEach((el) => {
            el.style.maxHeight = null;
        });

        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

const toggle = document.getElementById('themeSwitcher');
if (toggle) {
    toggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', this.checked);
    });
}