// Banner slider: show one slide at a time
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides[current].classList.remove('active');
  current = (index + slides.length) % slides.length; // loops around
  slides[current].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => showSlide(current + 1));
document.getElementById('prev').addEventListener('click', () => showSlide(current - 1));
