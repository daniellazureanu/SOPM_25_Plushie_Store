// localStorage.clear();

const plushies = {
  popular: [
    { name: "Ado", price: 200, image: "images/ado_plushy.png", description: "Pluș Ado moale și pufos." },
    { name: "Golden Freddy", price: 185, image: "images/GFreddy.png", description: "Pluș Golden Freddy animatronic clasic." },
    { name: "Miku", price: 250, image: "images/miku.png", description: "Pluș Miku, colorat și drăguț." },
    { name: "Foxy", price: 185, image: "images/Foxy.png", description: "Pluș Foxy, animatronic clasic." },
    { name: "Teto", price: 250, image: "images/teto.png", description: "Pluș teto, colorat și drăguț." },
  ],

  specials: [
    { name: "Ado", price: 200, image: "images/ado_plushy.png", description: "Pluș Ado moale și pufos." },
    { name: "Miku", price: 250, image: "images/miku.png", description: "Pluș Miku, colorat și drăguț." },
    { name: "Teto", price: 250, image: "images/teto.png", description: "Pluș teto, colorat și drăguț." },
  ],

  fnaf: [
    { name: "GFreddy", price: 185, image: "images/GFreddy.png", description: "Pluș Golden Freddy animatronic clasic." },
    { name: "Foxy", price: 185, image: "images/Foxy.png", description: "Pluș Foxy, animatronic clasic." },
    { name: "Springtrap", price: 185, image: "images/springtrap.png", description: "Pluș SpringTrap, animatronic clasic." },
  ],

  anime: [
    { name: "Marin", price: 195, image: "images/marin.png", description: "Pluș anime Marin, moale și drăgălaș." },
    { name: "L", price: 195, image: "images/L.png", description: "Pluș anime L, detaliat și colecționabil." },
    { name: "Misa", price: 195, image: "images/misa.png", description: "Pluș anime Misa, moale și adorabil." },
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
