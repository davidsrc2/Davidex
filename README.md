# Davidex

Sitio web personal de currículum (CV interactivo) con sección de blog, desplegado en [davidsanroman.net](https://davidsanroman.net) mediante GitHub Pages.

## Descripción

Página estática de una sola persona (single-page CV) que presenta perfil profesional, experiencia laboral, formación, habilidades, proyectos, certificados y datos de contacto, con un gráfico de habilidades renderizado con Chart.js. Incluye además una página de blog independiente con anotaciones técnicas.

## Stack tecnológico

- HTML5 / CSS3 estático
- JavaScript vanilla
- [Chart.js](https://www.chartjs.org/) (vía CDN) para el gráfico de habilidades
- GitHub Pages para el despliegue (dominio personalizado configurado en `CNAME`)

## Estructura del proyecto

```
Davidex/
├── index.html          # Página principal (CV)
├── blog.html            # Página de blog
├── style/
│   ├── main.css          # Estilos del CV
│   └── blog.css          # Estilos del blog
├── js/
│   ├── main.js           # Lógica del CV (tema claro/oscuro, gráfico, acordeón)
│   └── blog.js           # Lógica del blog
├── images/               # Iconos e imágenes del sitio
├── assets/               # Foto de perfil
├── archives/             # CV en PDF y certificados descargables
└── CNAME                 # Dominio personalizado para GitHub Pages
```

## Uso local

No requiere build ni dependencias. Basta con abrir `index.html` en el navegador, o servir el directorio con cualquier servidor estático:

```bash
python3 -m http.server 8000
```

Y visitar `http://localhost:8000`.

## Despliegue

El sitio se publica automáticamente vía **GitHub Pages** apuntando al dominio personalizado definido en el archivo `CNAME` (`davidsanroman.net`).
