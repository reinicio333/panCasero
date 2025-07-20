document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('imageContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = document.querySelectorAll('.carousel-image');
    const mainImage = document.getElementById('mainImage');
    const backgroundImage = document.getElementById('imagenFondo');
    
    let currentIndex = 0;
    const itemWidth = 112 + 24; // width (7rem = 112px) + gap (1.5rem = 24px)
    const visibleItems = 3;
    
    function updateCarousel() {
        // Asegurarse que el índice esté dentro de los límites
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        
        // Calcular el desplazamiento para centrar la imagen activa
        let offset;
        if (currentIndex < visibleItems - 1) {
            offset = 0;
        } else if (currentIndex > images.length - visibleItems) {
            offset = -(images.length - visibleItems) * itemWidth;
        } else {
            offset = -(currentIndex - 1) * itemWidth;
        }
        
        carousel.style.transform = `translateX(${offset}px)`;
        
        // Actualizar clases activas
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
        
        // Actualizar imagen principal y fondo
        if (images[currentIndex]) {
            const activeImage = images[currentIndex];
            
            // Efecto de transición para la imagen principal
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.src = activeImage.dataset.main;
                mainImage.style.opacity = '1';
            }, 300);
            
            // Efecto de transición para el fondo
            backgroundImage.style.opacity = '0';
            setTimeout(() => {
                backgroundImage.style.backgroundImage = `url('${activeImage.dataset.bg}')`;
                backgroundImage.style.opacity = '1';
            }, 300);
        }
    }
    
    // Navegación con flechas
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });
    
    // Navegación al hacer clic en imágenes
    images.forEach(img => {
        img.addEventListener('click', function() {
            currentIndex = parseInt(this.dataset.index);
            updateCarousel();
        });
    });
    
    // Inicializar
    updateCarousel();
    
    // Opcional: Autoplay (puedes quitarlo si no lo necesitas)
    let autoplay = setInterval(() => {
        currentIndex++;
        updateCarousel();
    }, 20000);
    
    // Pausar autoplay al interactuar
    carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carousel.addEventListener('mouseleave', () => {
        autoplay = setInterval(() => {
            currentIndex++;
            updateCarousel();
        }, 20000);
    });
});


