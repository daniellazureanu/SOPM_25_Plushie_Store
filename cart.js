// Load cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-container");
const totalDiv = document.getElementById("total");

function renderCart() {
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    container.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-details">
          <h1>${item.name}</h1>
          <p>Price: ${item.price} LEI</p>
          <p>Quantity: ${item.quantity}</p>
        </div>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `).join("");
  }

  // Always calculate and display total
  const total = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);
  totalDiv.innerHTML = `Total: ${total} LEI`;
}

// Remove item by index
function removeFromCart(index) {
    const removedItem = cart[index];
    if (!removedItem) return;

    if (removedItem.quantity > 1) {
    // Decrease quantity
    removedItem.quantity -= 1;
    } else {
    // Remove the item entirely
    cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Listen for remove button clicks
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
    const index = parseInt(e.target.dataset.index);
    removeFromCart(index);
    }
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  // Save total in localStorage (optional)
  const total = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);
  localStorage.setItem("checkoutTotal", total);

  // Navigate to checkout page
  window.location.href = "checkout.html";
});

// Initial render
renderCart();