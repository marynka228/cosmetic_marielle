let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slide');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  index += i;
  if (index < 0) {
    index = slide.length - 1;
  } else if (index >= slide.length) {
    index = 0;
  }
  slides.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener('click', () => showSlide(1));


