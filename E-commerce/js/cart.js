function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function addToCart(id) {
    const cart = getCart();
    const item = cart.find(p => p.id === id);
    if (item) item.qty++;
    else cart.push({ id, qty: 1 });
    saveCart(cart);
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    const el = document.getElementById("cart-count");
    if (el) el.textContent = count;
}

updateCartCount();
