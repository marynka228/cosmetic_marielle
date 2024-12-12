// Функция для добавления товара в корзину
function handleAddToCart(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
  
    // Находим родительский элемент товара (карточку)
    const productCard = event.target.closest(".product-item");
    if (!productCard) {
      console.error("Карточка продукта не найдена.");
      return;
    }
  
    // Сохраняем HTML карточки
    const productHTML = productCard.outerHTML;
  
    // Получаем корзину из localStorage или создаем новую
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productHTML); // Добавляем карточку в корзину
    localStorage.setItem("cart", JSON.stringify(cart)); // Сохраняем корзину
  
    console.log("Карточка добавлена в корзину.");
  }
  
  // Настройка обработчиков для кнопок "придбати"
  function setupBuyButtons() {
    const buyButtons = document.querySelectorAll(".button"); // Находим все кнопки
    if (buyButtons.length === 0) {
      console.error("Кнопки 'придбати' не найдены.");
      return;
    }
  
    buyButtons.forEach((button) => {
      button.addEventListener("click", handleAddToCart);
    });
  
    console.log("Обработчики кнопок настроены.");
  }
  
  // Отображение товаров в корзине на странице shopping.cart.html
  function displayCartItems() {
    const main = document.querySelector("main");
    if (!main) {
      console.error("Элемент <main> не найден на странице.");
      return;
    }
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      main.innerHTML = "<p>Ваш кошик порожній</p>";
      return;
    }
  
    const cartList = document.createElement("div");
    cartList.className = "cart-list";
  
    cart.forEach((itemHTML, index) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <div class="cart-content">
          ${itemHTML}
        </div>
        <button class="remove-button" data-index="${index}">Видалити</button>
      `;
      cartList.appendChild(cartItem);
    });
  
    main.innerHTML = ""; // Очищаем содержимое main перед добавлением
    main.appendChild(cartList);
  
    // Настройка обработчиков для удаления товаров
    setupRemoveButtons();
  }
  
  // Удаление товаров из корзины
  function setupRemoveButtons() {
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1); // Удаляем товар из массива
        localStorage.setItem("cart", JSON.stringify(cart)); // Обновляем localStorage
        displayCartItems(); // Обновляем отображение корзины
      });
    });
  }
  
  // Определяем, где мы находимся, и запускаем нужную логику
  document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("shopping.cart.html")) {
      displayCartItems();
    } else {
      setupBuyButtons();
    }
  });
  function displayCartItems() {
    const main = document.querySelector("main");
    if (!main) {
      console.error("Элемент <main> не найден на странице.");
      return;
    }
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      // Создаем элемент для сообщения о пустой корзине
      const emptyMessage = document.createElement("div");
      emptyMessage.className = "empty-cart-message";
      emptyMessage.innerHTML = "<p>Ваш кошик порожній</p>";
      main.innerHTML = ""; // Очищаем содержимое main перед добавлением
      main.appendChild(emptyMessage); // Добавляем сообщение в main
      return;
    }
  
    const cartList = document.createElement("div");
    cartList.className = "cart-list";
  
    cart.forEach((itemHTML, index) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <div class="cart-content">
          ${itemHTML}
        </div>
        <button class="remove-button" data-index="${index}">Видалити</button>
      `;
      cartList.appendChild(cartItem);
    });
  
    main.innerHTML = ""; // Очищаем содержимое main перед добавлением
    main.appendChild(cartList);
  
    // Настройка обработчиков для удаления товаров
    setupRemoveButtons();
  }
  