window.addEventListener("load", function (){

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product");

    const product = products[productId];

    if (!product) {
        console.log("Product not found");
        return;
    }

    document.getElementById("detailName").textContent = product.name;
    document.getElementById("detailPrice").textContent = product.price;
    const ratingBox = document.querySelector(".detail-rating");

    if (product.rating === null) {
        ratingBox.style.display = "none";
    }
    else {
        document.getElementById("detailRating").textContent = Number(product.rating).toFixed(1);
    }

    document.getElementById("detailSize").textContent = "Size: " + product.size;
    document.getElementById("detailIngredients").textContent = "Ingredients: " + product.ingredients;
    document.getElementById("introDescription").textContent = product.description;
    document.getElementById("detailImage").src = product.detailImage;
    document.getElementById("reviewTitle").textContent = "Reviews (" + product.reviewCount + ")";
    const seeMoreBtn = document.getElementById("seeMoreBtn");

    if (product.reviews.length <= 3) {
        seeMoreBtn.style.display = "none";
    }
    else {
        seeMoreBtn.style.display = "block";
    }

    const reviewContainer = document.getElementById("reviewContainer");

    reviewContainer.innerHTML = "";

    if (product.reviews.length === 0) {

        reviewContainer.innerHTML =
        `
        <article class="review-card">
            <p class="review-text">
                No reviews yet.
            </p>
        </article>
        `;
    }
    else {

        product.reviews.forEach(function(review){

            let stars = "";

            for (let i = 0; i < review.rating; i++) {
                stars += "★";
            }

            for (let i = review.rating; i < 5; i++) {
                stars += "☆";
            }

            reviewContainer.innerHTML +=
            `
            <article class="review-card">

                <div class="review-stars">
                    ${stars}
                </div>

                <p class="review-text">
                    ${review.text}
                </p>

                <p class="review-user">
                    -- ${review.user} ${review.date}
                </p>

            </article>
            `;
        });

    }

    const recommendContainer = document.getElementById("recommendContainer");

    recommendContainer.innerHTML = "";

    product.recommendations.forEach(function(id){

        const recommend = products[id];

        if (!recommend) {
            return;
        }

        let ratingHtml = "";

        if (recommend.rating !== null) {

            ratingHtml =
            '<p class="rating">' +
            '<i class="fa-solid fa-star"></i>' +
            Number(recommend.rating).toFixed(1) +
            '</p>';

        }

        recommendContainer.innerHTML +=
        '<figure class="product-card" onclick="window.location.href=\'detail.html?product=' + id + '\'">' +
            '<img src="' + recommend.shopImage + '" alt="' + recommend.name + '">' +
            '<figcaption>' +
                '<h3>' + recommend.name + '</h3>' +
                '<section class="product-bottom">' +
                    '<p>' + recommend.price + '</p>' +
                    ratingHtml +
                '</section>' +
            '</figcaption>' +
        '</figure>';

    });

    const quantityValue = document.getElementById("quantityValue");

    let quantity = 1;

    updateQuantity();
    updateCartBadge();

    const addCartBtn = document.getElementById("addCartBtn");

    addCartBtn.addEventListener("click", function (){

        let cartCount = localStorage.getItem("cartCount");

        if (cartCount === null) {
            cartCount = 0;
        }

        cartCount = Number(cartCount) + quantity;

        localStorage.setItem("cartCount", cartCount);

        updateCartBadge();

        const cartMessage = document.getElementById("cartMessage");

        cartMessage.textContent =
            '✓ "' + product.name + '" added to cart';

        cartMessage.style.display = "block";

        setTimeout(function(){

            cartMessage.style.display = "none";

        }, 2000);

    });

    document.getElementById("quantityPlus").addEventListener("click", function (){

        quantity++;
        updateQuantity();

    });

    document.getElementById("quantityMinus").addEventListener("click", function (){

        if (quantity > 1) {
            quantity--;
        }
        updateQuantity();

    });

    function updateQuantity() {
        if (product.unit === "day") {

            if (quantity === 1) {
                quantityValue.textContent = quantity + " Day";
            }
            else {
                quantityValue.textContent = quantity + " Days";
            }

        }
        else {
            quantityValue.textContent = quantity;
        }

    }

    function updateCartBadge() {
        let cartCount = localStorage.getItem("cartCount");
        if (cartCount === null) {
            cartCount = 0;
        }

        const cartBadge = document.getElementById("cartBadge");
        const mobileCartBadge = document.getElementById("mobileCartBadge");

        if (cartBadge) {
            cartBadge.textContent = cartCount;
        }

        if (mobileCartBadge) {
            mobileCartBadge.textContent = cartCount;
        }

    }

});