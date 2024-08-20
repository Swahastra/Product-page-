document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.getElementById('add-to-cart');
    const buyNowButton = document.getElementById('buy-now');
    const heartIcon = document.getElementById('heart-icon');
    const cartIcon = document.getElementById('cart-icon');
    const quantityDisplay = document.getElementById('quantity');
    const productImage = document.querySelector('.product-image img');

    let isAddedToCart = false;
    let isPurchased = false;
    let quantity = 1;
    let totalPrice = 100;
    let cartItems = [];

    // Increment quantity
    function increment() {
        quantity++;
        quantityDisplay.innerText = quantity;
        totalPrice = quantity * 100;
    }

    // Decrement quantity
    function decrement() {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.innerText = quantity;
            totalPrice = quantity * 100;
        }
    }

    // Add to Cart functionality
    addToCartButton.addEventListener('click', function() {
        if (!isAddedToCart) {
            const item = {
                name: "Product Name",
                price: 100,
                quantity: quantity
            };
            cartItems.push(item);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            heartIcon.classList.remove('icon-inactive');
            heartIcon.classList.add('icon-active');
            isAddedToCart = true;
        }
    });

    // Buy Now functionality
    buyNowButton.addEventListener('click', function() {
        if (!isPurchased) {
            cartIcon.classList.remove('icon-inactive');
            cartIcon.classList.add('icon-active');
            isPurchased = true;
            window.location.href = 'payment.html';
        }
    });

    // Wishlist redirection on heart icon click
    heartIcon.addEventListener('click', function() {
        if (isAddedToCart) {
            window.location.href = 'wishlist.html';
        }
    });

    // Toggle image forward and backward
    productImage.addEventListener('click', function() {
        if (this.classList.contains('forward')) {
            this.classList.remove('forward');
            this.classList.add('back');
        } else {
            this.classList.remove('back');
            this.classList.add('forward');
        }
    });

    // Attach increment and decrement functions to respective buttons
    document.getElementById('increment-button').addEventListener('click', increment);
    document.getElementById('decrement-button').addEventListener('click', decrement);
});
