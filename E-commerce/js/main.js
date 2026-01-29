const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");

function displayProducts(list) {
    productList.innerHTML = "";
    list.forEach(p => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${p.images[0]}" />
                <h3>${p.name}</h3>
                <p>GHS ${p.price}</p>
                <a href="product.html?id=${p.id}">View</a>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

function filterCategory(cat) {
    if (cat === "all") displayProducts(products);
    else displayProducts(products.filter(p => p.category === cat));
}

searchInput.addEventListener("input", e => {
    const val = e.target.value.toLowerCase();
    displayProducts(products.filter(p => p.name.toLowerCase().includes(val)));
});

displayProducts(products);
