const plushies = {
  popular: [
    { name: "Ado", price: 200, image: "images/ado_plushy.png", description: "Ado" },
    { name: "GFreddy", price: 185, image: "images/GFreddy.png", description: "GFreddy" },
    { name: "Miku", price: 250, image: "images/miku.png", description: "Miku" },
    { name: "Foxy", price: 185, image: "images/Foxy.png", description: "Foxy" },
    { name: "Teto", price: 250, image: "images/teto.png", description: "Teto" },
  ],

  specials: [
    { name: "Ado", price: 200, image: "images/ado_plushy.png", description: "Ado" },
    { name: "Miku", price: 250, image: "images/miku.png", description: "Miku" },
    { name: "Teto", price: 250, image: "images/teto.png", description: "Teto" },
  ],

  fnaf: [
    { name: "GFreddy", price: 185, image: "images/GFreddy.png", description: "GFreddy" },
    { name: "Foxy", price: 185, image: "images/Foxy.png", description: "Foxy" },
    { name: "Springtrap", price: 185, image: "images/springtrap.png", description: "Springtrap" },
  ],

  anime: [
    { name: "Marin", price: 195, image: "images/marin.png", description: "Marin" },
    { name: "L", price: 195, image: "images/L.png", description: "L" },
    { name: "Misa", price: 195, image: "images/misa.png", description: "Misa" },
  ],
};

function createPlushCard(plush) {
  return `
    <div class="plush_card">
      <img src="${plush.image}" alt="${plush.name}">
      <div class="name">${plush.name}</div>
      <div class="description">${plush.description}</div>
      <div class="buy_container">
        <div class="price">${plush.price} LEI</div>
        <button class="add-to-cart" data-name="${plush.name}" data-price="${plush.price}" data-image="${plush.image}">
          <img src="images/cart.png" alt="Add to cart">
        </button>
      </div>
    </div>
  `;
}

function loadPlushies() {
  Object.keys(plushies).forEach(category => {
    const container = document.getElementById(category);
    if (container) {
      container.innerHTML = plushies[category].map(createPlushCard).join("");
    }
  });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(plush) {
  const existingItem = cart.find(item => item.name === plush.name);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...plush, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${plush.name} added to cart!`);
}

document.addEventListener("DOMContentLoaded", () => {
  loadPlushies();

  document.body.addEventListener("click", (e) => {
    if (e.target.closest(".add-to-cart")) {
      const button = e.target.closest(".add-to-cart");
      const plush = {
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        image: button.dataset.image
      };
      addToCart(plush);
    }
  });
});
