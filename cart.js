function addToCart(itemId) {
    let size, quantity, name, price, image;

    if (itemId === 'aurora-grey-stripe-shirt') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "AURORA GREY STRIPE SHIRT";
        price = 1200;
        image = "shopdetail/shop11.png";
    } else if (itemId === 'linen-navy-stripe-shirt') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "LINEN NAVY STRIPE SHIRT";
        price = 1600;
        image = "shopdetail/shop21.png";
    } else if (itemId === 'crochet-white-shirt') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "CROCHET WHITE SHIRT";
        price = 800;
        image = "shopdetail/shop31.png";
    } else if (itemId === 'brown-checks-shirt') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "BROWN CHECKS SHIRT";
        price = 1000;
        image = "shopdetail/shop41.png";
    } else if (itemId === 'osprey-jet-black-jeans') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "OSPREY JET BLACK JEANS";
        price = 1700;
        image = "shopdetail/shop51.png";
    } else if (itemId === 'brown-baggy-cargo-jeans') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "BROWN BAGGY CARGO JEANS";
        price = 2000;
        image = "shopdetail/shop61.png";
    } else if (itemId === 'cream-linen-trouser') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "CREAM LINEN TROUSER";
        price = 800;
        image = "shopdetail/shop71.png";
    } else if (itemId === 'dagon-grey-cargo-pant') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "DAGON GREY CARGO PANT";
        price = 1699;
        image = "shopdetail/shop81.png";
    } else if (itemId === 'pure-cotton-kurta') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "PURE COTTON KURTA";
        price = 1600;
        image = "shopdetail/shop91.png";

    } else if (itemId === 'round-neck-straight-tunic') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "ROUND NECK STRAIGHT TUNIC";
        price = 1200;
        image = "shopdetail/shop111.png";
    } else if (itemId === 'embroidered-satin-saree') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "EMBROIDERED SATIN SAREE";
        price = 2200;
        image = "shopdetail/shop121.png";
    } else if (itemId === 'wide-leg-stretchable-jeans') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "WIDE LEG STRETCHABLE JEANS";
        price = 2500;
        image = "shopdetail/shop131.png";
    } else if (itemId === 'women-pleated-trousers') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "WOMEN PLEATED TROUSERS";
        price = 800;
        image = "shopdetail/shop141.png";
    } else if (itemId === 'black-pink-floral-puff-sleeves-dress') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "BLACK & PINK FLORAL PUFF SLEEVES DRESS";
        price = 1400;
        image = "shopdetail/shop151.png";
    } else if (itemId === 'mandarin-colar-cotton-tunic') {
        size = document.getElementById('size-select').value;
        quantity = document.getElementById('quantity').value;
        name = "MADARIN COLAR COTTON TUNIC";
        price = 700;
        image = "shopdetail/shop161.png";
    }

    if (size === "Select Size") {
        alert("Please select the size");
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let item = {
        name: name,
        price: price,
        size: size,
        quantity: parseInt(quantity),
        image: image
    };

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart');
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. <i class="fas fa-frown"></i></p > ';
        totalPriceElement.innerHTML = '<p class="tot">Total Price: &#8377;0</p>';

    } else {
        cart.forEach((item, index) => {
            totalPrice += item.price * item.quantity;
            cartItems.innerHTML += `
            <div class="disp">
                <div class="cart-item">
                    <p>${item.name}</p>
                    <p>Size: ${item.size}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: &#8377;${item.price}</p>
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <button onclick="increaseQuantity(${index})">+</button>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
                <div class="image">
                    <img src="${item.image}" alt="${item.name}">
                </div
            </div>    
             
            `;

        });
        totalPriceElement.innerHTML = `<p class="total">Total Price: &#8377;${totalPrice}</p>`;
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

window.onload = function () {
    if (document.getElementById('cart-items')) {
        displayCart();
    }
};


//shopdeatil

var main = document.getElementById("main");
var small = document.getElementsByClassName("small");

small[0].onclick = function () {
    main.src = small[0].src;
}
small[1].onclick = function () {
    main.src = small[1].src;
}
small[2].onclick = function () {
    main.src = small[2].src;
}
small[3].onclick = function () {
    main.src = small[3].src;
}



