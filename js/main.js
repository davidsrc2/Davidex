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


// Scroll fade-in effect
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
faders.forEach(el => observer.observe(el));

// Accordion toggle
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

// Chart.js skills radar
const ctx = document.getElementById('skillsChart');
if (ctx) {
    new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Python', 'C/C++', 'Java', 'JavaScript', 'SQL'],
          datasets: [{
            label: 'Skill Level',
            data: [85, 85, 100, 90, 100], // Java y SQL al tope
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)'
      }]
    },
    options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              backdropColor: 'transparent',
              color: '#666'
            },
            grid: {
              color: 'rgba(0,0,0,0.1)'
            },
            angleLines: {
              color: 'rgba(0,0,0,0.2)'
            },
            pointLabels: {
              color: '#333',
              font: {
                size: 13
              }
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#333',
              font: {
                size: 14
              }
            }
          }
        }
      }
  });
}

// Theme toggle using moon button
document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.getElementById("themeSwitcher");
  if (!themeSwitcher) return;

  // Apply stored theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  themeSwitcher.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});