// order.js

const orderItemsDiv = document.getElementById("orderItems");
const totalPriceP = document.getElementById("totalPrice");

// Get saved orders from localStorage
const orders = JSON.parse(localStorage.getItem("orders")) || [];

let total = 0;

orders.forEach(item => {
  const div = document.createElement("div");
  div.className = "order-item";
  div.innerHTML = `<span>${item.name}</span><span>₹${item.price}</span>`;
  orderItemsDiv.appendChild(div);
  total += item.price;
});

totalPriceP.textContent = `Total: ₹${total}`;

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("orderName").value;
  const phone = document.getElementById("orderPhone").value;
  const mode = document.getElementById("orderMode").value;
  const address = document.getElementById("orderAddress").value;

  alert(`🎉 Thank you, ${name}! Your ${mode} order has been placed. Total: ₹${total}`);

  // Clear localStorage
  localStorage.removeItem("orders");

  // Optionally redirect
  // window.location.href = "success.html";
});
