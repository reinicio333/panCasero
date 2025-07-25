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
    

 // CÓDIGO MÓVIL SIMPLIFICADO (SIN TOUCH)

    const carouselMovil = document.getElementById('imageContainer-movil');
    const prevBtnMovil = document.getElementById('prevBtn-movil');
    const nextBtnMovil = document.getElementById('nextBtn-movil');
    const imagesMovil = document.querySelectorAll('.carousel-image-movil');
    const mainImageMovil = document.querySelector('.main-image-movil');
    const tituloProductoMovil = document.querySelector('.titulo-producto-movil');
    const tituloProductoMovilUno = document.querySelector('.titulo-producto-movil-uno');

    let currentIndexMovil = 0;
    const itemWidthMovil = 100; // Ancho de cada item del carrusel

    function updateCarouselMovil() {
        // Asegurar que el índice esté dentro de los límites
        if (currentIndexMovil < 0) currentIndexMovil = imagesMovil.length - 1;
        if (currentIndexMovil >= imagesMovil.length) currentIndexMovil = 0;
        
        // Calcular desplazamiento
        let offsetMovil = -currentIndexMovil * itemWidthMovil;
        
        // Aplicar transformación
        if (carouselMovil) {
            carouselMovil.style.transform = `translateX(${offsetMovil}px)`;
        }
        
        // Actualizar clase active
        imagesMovil.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndexMovil);
        });
        
        // Actualizar imagen principal y título
        if (imagesMovil[currentIndexMovil]) {
            const activeImage = imagesMovil[currentIndexMovil];
            
            // Animación de transición
            if (mainImageMovil) {
                mainImageMovil.style.opacity = '0';
                setTimeout(() => {
                    mainImageMovil.src = activeImage.dataset.main;
                    mainImageMovil.style.opacity = '1';
                }, 300);
            }
            
            if (tituloProductoMovil) {
                tituloProductoMovil.classList.add('fade-out');
                setTimeout(() => {
                    tituloProductoMovil.textContent = activeImage.dataset.name.toUpperCase();
                    tituloProductoMovil.classList.remove('fade-out');
                    tituloProductoMovil.classList.add('fade-in');
                    
                    setTimeout(() => {
                        tituloProductoMovil.classList.remove('fade-in');
                    }, 500);
                }, 300);
            }
            if (tituloProductoMovilUno) {
                tituloProductoMovilUno.classList.add('fade-out');
                setTimeout(() => {
                    tituloProductoMovilUno.textContent = activeImage.dataset.uno.toUpperCase();
                    tituloProductoMovilUno.classList.remove('fade-out');
                    tituloProductoMovilUno.classList.add('fade-in');
                    
                    setTimeout(() => {
                        tituloProductoMovilUno.classList.remove('fade-in');
                    }, 500);
                }, 300);
            }
        }
    }

    // Eventos para flechas de navegación
    if (prevBtnMovil) {
        prevBtnMovil.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndexMovil--;
            updateCarouselMovil();
        });
    }

    if (nextBtnMovil) {
        nextBtnMovil.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndexMovil++;
            updateCarouselMovil();
        });
    }

    // Eventos para clic en imágenes
    imagesMovil.forEach((img, index) => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndexMovil = index;
            updateCarouselMovil();
        });
    });

    // Inicializar
    updateCarouselMovil();
});


