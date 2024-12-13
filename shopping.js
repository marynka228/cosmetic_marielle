
function handleAddToCart(event) {
    event.preventDefault(); 
  
    const productCard = event.target.closest(".product-item");
    if (!productCard) {
      console.error("Карточка продукта не найдена.");
      return;
    }
  
    const productHTML = productCard.outerHTML;
  
    
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productHTML); 
    localStorage.setItem("cart", JSON.stringify(cart)); 
  
    console.log("Карточка добавлена в корзину.");
  }
  
 
  function setupBuyButtons() {
    const buyButtons = document.querySelectorAll(".button"); 
    if (buyButtons.length === 0) {
      console.error("Кнопки 'придбати' не найдены.");
      return;
    }
  
    buyButtons.forEach((button) => {
      button.addEventListener("click", handleAddToCart);
    });
  
    console.log("Обработчики кнопок настроены.");
  }
  
  
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
  
    main.innerHTML = ""; 
    main.appendChild(cartList);
  
    
    setupRemoveButtons();
  }
  
 
  function setupRemoveButtons() {
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1); 
        localStorage.setItem("cart", JSON.stringify(cart)); 
        displayCartItems(); 
      });
    });
  }
  
  
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
      
      const emptyMessage = document.createElement("div");
      emptyMessage.className = "empty-cart-message";
      emptyMessage.innerHTML = "<p>Ваш кошик порожній</p>";
      main.innerHTML = ""; 
      main.appendChild(emptyMessage); 
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
  
    main.innerHTML = ""; 
    main.appendChild(cartList);
  
    
    setupRemoveButtons();
  }
  
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