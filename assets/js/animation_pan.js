document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('imageContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = document.querySelectorAll('.carousel-image');
    const mainImage = document.getElementById('mainImage');
    const mainImagePan = document.getElementById('mainImagePan');
    const backgroundImage = document.getElementById('imagenFondo');

    let currentIndex = 0;
    const itemWidth = 72 + 24; // width (7rem = 112px) + gap (1.5rem = 24px)
    const visibleItems = 3;

    function updateCarousel() {
        // Asegurarse que el índice esté dentro de los límites
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        
        // Calcular el desplazamiento para centrar la imagen activa
        let offset;
        if (images.length <= visibleItems) {
            // Si hay pocas imágenes, no necesitamos desplazamiento
            offset = 0;
        } else if (currentIndex < Math.floor(visibleItems/2)) {
            // Para los primeros elementos, alinear al inicio
            offset = 0;
        } else if (currentIndex > images.length - Math.ceil(visibleItems/2) - 1) {
            // Para los últimos elementos, alinear al final
            offset = -(images.length - visibleItems) * itemWidth;
        } else {
            // Para elementos en el medio, centrar la imagen activa
            offset = -(currentIndex - Math.floor(visibleItems/2)) * itemWidth;
        }
        
        carousel.style.transform = `translateX(${offset}px)`;
        
        // Actualizar clases activas y estilos
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
            
            // Asegurarse que la imagen activa siempre sea completamente visible
            if (index === currentIndex) {
                img.style.opacity = '1';
                img.style.transform = 'scale(1.05)';
            } else {
                img.style.opacity = '0.7';
                img.style.transform = 'scale(1)';
            }
        });

        if (images[currentIndex]) {
            const activeImage = images[currentIndex];

            // 1. Iniciar transición de opacidad
            mainImage.style.opacity = '0';

            // 2. Cambiar tamaño Y contenido AL MISMO TIEMPO
            setTimeout(() => {
                // Aplicar clases de tamaño
                if (activeImage.dataset.name === "Bizcocho") {
                    mainImage.classList.add('w-[90%]', 'mr-[10%]');
                    mainImage.classList.remove('w-[68%]', 'mr-[0rem]');
                } else {
                    mainImage.classList.add('w-[68%]', 'mr-[0rem]');
                    mainImage.classList.remove('w-[90%]', 'mr-[10%]');
                }

                // Cambiar imagen
                mainImage.src = activeImage.dataset.main;

                // Forzar recálculo para activar transición
                void mainImage.offsetWidth;

                // Restaurar opacidad
                mainImage.style.opacity = '1';
            }, 300);

            // 3. Imagen del pan (sin cambios)
            mainImagePan.style.opacity = '0';
            setTimeout(() => {
                mainImagePan.src = activeImage.dataset.pan;
                mainImagePan.style.opacity = '1';
            }, 300);

            // 4. Fondo
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
    const mainImageMovilUno = document.querySelector('.main-image-movil-uno');
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
                    if (activeImage.dataset.name === "BIZCOCHO") {
                        mainImageMovil.classList.add('w-[80%]', 'rotate-360' , 'pl-10');
                        mainImageMovil.classList.remove('w-[50%]', 'rotate-0' , 'p-0');
                    } else {
                        mainImageMovil.classList.add('w-[50%]', 'rotate-0' , 'p-0');
                        mainImageMovil.classList.remove('w-[80%]', 'rotate-360' , 'pl-10');
                    }
                    mainImageMovil.src = activeImage.dataset.main;
                    mainImageMovil.style.opacity = '1';
                }, 300);
            }
            if (mainImageMovilUno) {
                mainImageMovilUno.style.opacity = '0';
                setTimeout(() => {
                    mainImageMovilUno.src = activeImage.dataset.solo;
                    mainImageMovilUno.style.opacity = '1';
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
        img.addEventListener('click', function (e) {
            e.preventDefault();
            currentIndexMovil = index;
            updateCarouselMovil();
        });
    });

    // Inicializar
    updateCarouselMovil();
});


