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

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const productItems = document.querySelectorAll(".product-item");

  function filterProducts() {
    const query = searchInput.value.toLowerCase(); 

    productItems.forEach((item) => {
      const title = item.querySelector(".product-title").textContent.toLowerCase();
      
      
      if (title.includes(query)) {
        item.style.display = "block"; 
      } else {
        item.style.display = "none"; 
      }
    });
  }

  searchInput.addEventListener("input", filterProducts);
});