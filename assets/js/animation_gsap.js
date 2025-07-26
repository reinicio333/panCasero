gsap.from('.gsap_hotdog_pasos', {
  y: 150,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: '.gsap_hotdog_pasos',
    start: 'top 100%',
    end: '10% 80%',
    scrub: 1,
    markers: false
  }
});

gsap.from('.gsap_hotdog_ingredientes', {
  y: 150,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: '.gsap_hotdog_ingredientes',
    start: 'top 100%',
    end: '10% 80%',
    scrub: 1,
    markers: false
  }
});

gsap.from('.gsap_historia', {
  duration: 1.2,
  y: -150,
  opacity: 0,
  delay: 0.1
});
gsap.from('.gsap_calidad', {
  duration: 1.2,
  opacity: 0,
  delay: 1.2
});
gsap.from('.gsap_palabras', {
  y: 300,
  opacity: 0,
  duration: 7,
  scrollTrigger: {
    trigger: '.gsap_palabras',
    start: 'top 25%',
    end: '20% 25%',
    scrub: 1,
    markers: false
  }
});

gsap.from(".mision_imagen", {
  x: -300, // Empieza 300px a la derecha
  opacity: 0,
  duration: 2,
    scrollTrigger: {
    trigger: '.mision_imagen',
    start: '62% 80%',
    end: '70% 80%',
    scrub: 1,
    markers: false
  }
});
gsap.from(".vision_imagen", {
  x: 300, // Empieza 300px a la derecha
  opacity: 0,
  duration: 2,
    scrollTrigger: {
    trigger: '.mision_imagen',
    start: '82% 80%',
    end: '90% 80%',
    scrub: 1,
    markers: false
  }
});

gsap.from('.gsap_palabras_movil', {
  duration: 1.2,
  opacity: 0,
  delay: 0.22
});
gsap.from('.mision_imagen_movil', {
   x: -300,
  duration: 1.2,
  opacity: 0,
  delay: 1.2
});
gsap.from('.vision_imagen_movil', {
   x: 300,
  duration: 1.2,
  opacity: 0,
  delay: 2.2
});
