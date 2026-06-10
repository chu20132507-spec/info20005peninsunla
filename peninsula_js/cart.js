let selectedProducts = [];
//wait
window.addEventListener("load", function(){
    updateCartBadge();

    const cartContainer = document.getElementById("cartContainer");
    if (!cartContainer) {
        return;
    }

    renderCart();
});

//display all products currently stored in cartItems
function renderCart(){

    const cartContainer = document.getElementById("cartContainer");
    let cartItems = localStorage.getItem("cartItems");

    cartContainer.innerHTML = "";

    //stop if cart is empty
    if (cartItems === null || cartItems === "") {
         cartContainer.innerHTML =
        '<div class="empty-cart">' +
        'Your cart is currently empty.' +
        '</div>';

        renderSubtotal();
        return;
    }

    //convert string into an array
    cartItems = cartItems.split(",");

    //count quantity of each product
    let cartCounts = {};

    cartItems.forEach(function(id){

        if (id === "") {
            return;
        }

        if (cartCounts[id] === undefined) {
            cartCounts[id] = 1;
        }
        else {
            cartCounts[id] += 1;
        }

    });

    //create one cart card for each product
    for (let id in cartCounts){
        if (!selectedProducts.includes(id)) {
            selectedProducts.push(id);
        }
        const product = products[id];

        cartContainer.innerHTML +=
        '<article class="cart-card">' +

            '<button class="cart-select selected">' +
                '<i class="fa-solid fa-check"></i>' +
            '</button>' +
            '<a href="detail.html?product=' + id + '">' +
                '<img src="' + product.shopImage + '" alt="' + product.name + '" class="cart-image">' +
            '</a>' +

            '<section class="cart-info">' +
                '<h3>' + product.name + '</h3>' +
                '<p>' + product.price + '</p>' +
            '</section>' +

            '<section class="cart-quantity">' +
                '<button class="quantity-minus" data-id="' + id + '">-</button>' +
                '<span>' + cartCounts[id] + '</span>' +
                '<button class="quantity-plus" data-id="' + id + '">+</button>' +
            '</section>' +

        '</article>';

    }

    setupQuantityButtons();
    setupSelectButtons();
    renderSubtotal();
    updateCartBadge();

}

//quantity controller
function setupQuantityButtons(){

    const plusButtons = document.querySelectorAll(".quantity-plus");

    plusButtons.forEach(function(button){

        button.addEventListener("click", function(){

            const productId = button.dataset.id;

            let cartItems = localStorage.getItem("cartItems");
            cartItems = cartItems.split(",");
            //increase quantity
            cartItems.push(productId);
            //save cart
            localStorage.setItem(
                "cartItems",
                cartItems.join(",")
            );

            renderCart();

        });

    });

    const minusButtons = document.querySelectorAll(".quantity-minus");

    //minus
    minusButtons.forEach(function(button){

        button.addEventListener("click", function(){

            const productId = button.dataset.id;

            let cartItems = localStorage.getItem("cartItems");

            cartItems = cartItems.split(",");
            //remove item
            let removed = false;
            //filter product
            cartItems = cartItems.filter(function(id){

                if (
                    id === productId &&
                    removed === false
                ){
                    removed = true;
                    return false;
                }
                return true;
            });

            let newCartItems = cartItems.join(",");
            //empty cart check
            if (newCartItems === "") {
                localStorage.removeItem("cartItems");
            }
            else {
                localStorage.setItem(
                    "cartItems",
                    newCartItems
                );
            }

            renderCart();
            updateCartBadge();

        });

    });

}

//product selection
function setupSelectButtons(){

    const selectButtons = document.querySelectorAll(".cart-select");

    selectButtons.forEach(function(button){

        button.addEventListener("click", function(){
            //toggle selection
            button.classList.toggle("selected");
            const card = button.closest(".cart-card");
            const productId = card.querySelector(".quantity-plus").dataset.id;

            if (button.classList.contains("selected")) {
                //add selection
                if (!selectedProducts.includes(productId)) {
                    selectedProducts.push(productId);
                }

            }
            //remove selection
            else {
                selectedProducts =
                selectedProducts.filter(function(id){
                    return id !== productId;
                });

            }

            renderSubtotal();

        });

    });

}

//calculate subtotal
function renderSubtotal(){

    const subtotalContainer = document.getElementById("subtotalContainer");
    const totalPrice = document.getElementById("totalPrice");
    //clear subtotal
    subtotalContainer.innerHTML = "";

    let cartItems = localStorage.getItem("cartItems");

    if (cartItems === null || cartItems === "") {
        totalPrice.textContent = "$0.00";
        return;
    }

    cartItems = cartItems.split(",");

    let cartCounts = {};
    //quantity count
    cartItems.forEach(function(id){

        if (id === "") {
            return;
        }

        if (cartCounts[id] === undefined) {
            cartCounts[id] = 1;
        }
        else {
            cartCounts[id] += 1;
        }

    });

    let total = 0;

    for (let id in cartCounts){
        //skip unselected
        if (!selectedProducts.includes(id)) {
            continue;
        }
        const product = products[id];

        let price = Number(product.price.replace("$", ""));
        let quantity = cartCounts[id];
        //total calculation
        let subtotal = price * quantity;
        total += subtotal;
        subtotalContainer.innerHTML +=

        '<section class="subtotal-row">' +
            '<p>' + product.name + ' x ' + quantity + '</p>' +
            '<p>$' + subtotal.toFixed(2) + '</p>' +
        '</section>';

    }

    totalPrice.textContent = '$' + total.toFixed(2);

}

//update cart badge
function updateCartBadge(){

    let cartItems = localStorage.getItem("cartItems");
    let count = 0;

    if (cartItems !== null && cartItems !== "") {

        cartItems = cartItems.split(",");
        cartItems.forEach(function(id){

            if (id !== "") {
                count++;
            }

        });

    }

    const cartBadge = document.getElementById("cartBadge");

    if (cartBadge) {
        cartBadge.textContent = count;
    }

    const mobileCartBadge = document.getElementById("mobileCartBadge");

    if (mobileCartBadge) {
        mobileCartBadge.textContent = count;
    }
}

// checkout process
window.addEventListener("load", function(){
    const checkoutBtn = document.getElementById("checkoutBtn");

    if (!checkoutBtn) {
        return;
    }

    checkoutBtn.addEventListener("click", function(){

        if (selectedProducts.length === 0){
            alert("Please select at least one product.");
            return;
        }

        let cartItems = localStorage.getItem("cartItems");

        if (cartItems === null || cartItems === ""){
            return;
        }

        cartItems = cartItems.split(",");
        let checkoutItems = "";

        cartItems.forEach(function(id){

            if (id !== "" && selectedProducts.includes(id)
            ){
                checkoutItems += id + ",";
            }

        });

        localStorage.setItem(
            "checkoutItems",
            checkoutItems
        );

        window.location.href = "delivery.html";

    });

});