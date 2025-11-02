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
        <a href="index.html" class="cart">
          <img src="images/cart.png" alt="Add to cart">
        </a>
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

document.addEventListener("DOMContentLoaded", loadPlushies);
