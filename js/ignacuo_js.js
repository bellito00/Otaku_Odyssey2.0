document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('cart');
    const toggleCart = document.getElementById('toggleCart');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');

    // Al cargar la página, se verifica si hay elementos en el carrito almacenados en el localStorage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
        savedCartItems.forEach(item => {
            addToCart(item.name, item.price);
        });
    }

    toggleCart.addEventListener('click', function () {
        cart.classList.toggle('active');
    });

    closeCart.addEventListener('click', function () {
        cart.classList.remove('active');
    });

    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const name = this.dataset.name;
            const price = this.dataset.price;
            addToCart(name, price);
        });
    });

    const clearCartBtn = document.getElementById('clearCart');
    clearCartBtn.addEventListener('click', clearCart);

    // Almacenar los elementos del carrito en el localStorage
    function saveCartItems() {
        const items = [];
        cartItems.querySelectorAll('li').forEach(item => {
            items.push({
                name: item.dataset.name,
                price: item.dataset.price
            });
        });
        localStorage.setItem('cartItems', JSON.stringify(items));
    }

    function addToCart(name, price) {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.dataset.name = name;
        li.dataset.price = price;
        const spanName = document.createElement('span');
        spanName.textContent = name;
        li.appendChild(spanName);
        const spanPrice = document.createElement('span');
        spanPrice.classList.add('cart-item-price');
        spanPrice.textContent = " - Precio: " + price + "$";
        li.appendChild(spanPrice);
        cartItems.appendChild(li);
        updateTotalPrice();
        saveCartItems(); // Guardar en localStorage
    }

    function clearCart() {
        cartItems.innerHTML = '';
        updateTotalPrice();
        saveCartItems(); // Guardar en localStorage
    }

    function updateTotalPrice() {
        const totalPriceElement = document.querySelector('.total-price');
        let totalPrice = 0;
        cartItems.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.dataset.price);
            totalPrice += price;
        });
        totalPriceElement.textContent = `Total: ${Math.floor(totalPrice)}$`;
    }});
    document.addEventListener('click', function (event) {
        const isClickInsideCart = cart.contains(event.target);
        const isClickInsideToggleCart = toggleCart.contains(event.target);
        if (!isClickInsideCart && !isClickInsideToggleCart) {
            cart.classList.remove('active');
        }
    });