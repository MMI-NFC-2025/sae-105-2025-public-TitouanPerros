// ========================================
// CAROUSEL ÉCORESPONSABLE - SCROLL NATIF
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.getElementById('carouselWrapper');
  const slides = document.querySelectorAll('.carousel-slide');
  const indicatorsContainer = document.getElementById('carouselIndicators');
  const totalSlides = slides.length;

  // Vérifier que les éléments existent
  if (!wrapper || !indicatorsContainer) {
    console.error('Éléments du carousel introuvables');
    return;
  }

  // Ajouter des IDs aux slides pour les ancres
  slides.forEach((slide, index) => {
    slide.id = `carousel-slide-${index}`;
  });

  // Créer les indicateurs
  function createIndicators() {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      dot.setAttribute('aria-label', `Aller à la slide ${i + 1}`);
      dot.onclick = () => goToSlide(i);
      indicatorsContainer.appendChild(dot);
    }
    updateIndicators();
  }

  // Aller à une slide spécifique avec smooth scroll
  function goToSlide(index) {
    const targetSlide = document.getElementById(`carousel-slide-${index}`);
    if (targetSlide) {
      targetSlide.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'start' 
      });
    }
  }

  // Mettre à jour les indicateurs en fonction du scroll
  function updateIndicators() {
    const scrollLeft = wrapper.scrollLeft;
    const slideWidth = wrapper.offsetWidth;
    const currentIndex = Math.round(scrollLeft / slideWidth);

    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  // Écouter les événements de scroll
  let scrollTimeout;
  wrapper.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      updateIndicators();
    }, 100);
  });

  // Initialisation
  createIndicators();
});