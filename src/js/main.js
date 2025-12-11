// Menu Burger
document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.burger-btn');
  const nav = document.querySelector('.mobile-nav');
  const body = document.body;

  // Toggle menu
  burgerBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Empêche la propagation du clic
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  // Fermer le menu lors du clic sur un lien
  const navLinks = document.querySelectorAll('.mobile-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      burgerBtn.classList.remove('active');
      nav.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });

  // Fermer le menu lors du clic sur l'overlay (en dehors du menu)
  document.addEventListener('click', function(e) {
    const isClickInsideNav = nav.contains(e.target);
    const isClickOnBurger = burgerBtn.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnBurger && nav.classList.contains('active')) {
      burgerBtn.classList.remove('active');
      nav.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });
});