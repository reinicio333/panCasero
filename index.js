window.onload = function() {
    // Ocultar el loader
    document.getElementById('loader').style.display = 'none';
    // Mostrar el contenido de la página
    document.getElementById('content').style.display = 'block';
};
function showModal(id) {
    var div = document.getElementById(id);
    var divMenu = document.getElementById("menuProductos");

    // Inicia la animación de salida para divMenu
    divMenu.classList.remove("scale-in");
    divMenu.classList.add("scale-out");

    // Espera el tiempo de la transición para ocultar el divMenu
    setTimeout(function() {
        divMenu.classList.add("d-none"); // Oculta el div del menú

        // Configura el divAlfa para que esté listo para la animación
        div.classList.remove("d-none");
        
        // Forzar reflow para aplicar la animación de entrada
        div.offsetHeight; // Forzar reflow

        // Usar requestAnimationFrame para asegurarse de que la transición se aplique
        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                div.classList.add("scale-in");
            });
        });

    }, 200); // 500ms coincide con la duración de la transición en CSS
}

function btnMenu(id) {
    var div = document.getElementById(id);
    var divMenu = document.getElementById("menuProductos");

    // Inicia la animación de salida para divAlfa
    div.classList.remove("scale-in");
    div.classList.add("scale-out");

    // Espera el tiempo de la transición para ocultar el divAlfa
    setTimeout(function() {
        div.classList.add("d-none"); // Oculta el div Alfa

        // Configura el divMenu para que esté listo para la animación
        divMenu.classList.remove("d-none");
        
        // Forzar reflow para aplicar la animación de entrada
        divMenu.offsetHeight; // Forzar reflow

        // Usar requestAnimationFrame para asegurarse de que la transición se aplique
        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                divMenu.classList.add("scale-in");
            });
        });

    }, 200); // 500ms coincide con la duración de la transición en CSS
}


$(document).ready(function() {
  
    setTimeout(function() {
      $('#ctn-preloader').addClass('loaded');
      // Una vez haya terminado el preloader aparezca el scroll
      $('body').removeClass('no-scroll-y');
  
      if ($('#ctn-preloader').hasClass('loaded')) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $('#preloader').delay(1000).queue(function() {
          $(this).remove();
        });
      }
    }, 3000);
    
  });