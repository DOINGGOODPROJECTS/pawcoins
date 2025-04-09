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

// Get the modal
var modal = document.getElementById("inviteModal");

// Get the button that opens the modal
var btn = document.getElementById("inviteBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Submit form function with redirection
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  var message = document.getElementById("message").value;
  var mailtoLink = "mailto:team@adinkrafellowship.com?subject=Zoo Invitation&body=" + encodeURIComponent(message);

  // Simulate sending the email by opening the mailto link
  window.location.href = mailtoLink;

  // Redirect to PawCoins site after submission
  window.location.href = "https://pawcoins.vercel.app";
}


