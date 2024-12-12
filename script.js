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

  // Функция для фильтрации карточек
  function filterProducts() {
    const query = searchInput.value.toLowerCase(); // Получаем текст из поля ввода и приводим к нижнему регистру

    productItems.forEach((item) => {
      const title = item.querySelector(".product-title").textContent.toLowerCase();
      
      // Проверяем, содержит ли текст заголовка введённый запрос
      if (title.includes(query)) {
        item.style.display = "block"; // Показываем карточку
      } else {
        item.style.display = "none"; // Скрываем карточку
      }
    });
  }

  // Добавляем обработчик события ввода в поле поиска
  searchInput.addEventListener("input", filterProducts);
});