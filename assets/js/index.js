document.addEventListener('DOMContentLoaded', function() {
  // Obtener la altura del navbar
  const navbar = document.querySelector('nav');
  const navbarHeight = navbar.offsetHeight - 7;
  
  // Aplicar margen superior al primer elemento después del navbar
  const firstContentElement = document.querySelector('.paraNavbar');
  if (firstContentElement) {
    firstContentElement.style.marginTop = `${navbarHeight}px`;
  }
});

