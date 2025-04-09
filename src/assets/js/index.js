const images = document.querySelector('.carousel-images');
const items = document.querySelectorAll('.carousel-item');
const total = items.length;
let index = 0;

function showSlide(i) {
  if (i >= total) index = 0;
  else if (i < 0) index = total - 1;
  else index = i;

  images.style.transform = `translateX(-${index * 100}%)`;
}

// Boutons
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));

// Auto slide toutes les 5 secondes
setInterval(() => {
  showSlide(index + 1);
}, 5000);

document.getElementById('menu-toggle').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active'); // Ajoute ou enlève la classe 'active' qui affiche le menu
});
