let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = cart.find(p => p.name === name);

    if (item) {
        item.qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart");
}

function loadCart() {
    let box = document.getElementById("cartItems");
    let total = 0;

    box.innerHTML = "";

    cart.forEach(item => {
        let price = item.price * item.qty;
        total += price;

        box.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (x${item.qty})</span>
                <span>₹${price}</span>
            </div>
        `;
    });

    document.getElementById("total").innerText =
        "Total Amount: ₹" + total;
}

function clearCart() {
    localStorage.clear();
    location.reload();
}
