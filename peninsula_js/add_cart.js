//wait until the webpage has fully loaded
window.addEventListener("load", function () {

    //get the current cart count from localStorage
    let cartCount = localStorage.getItem("cartCount");

    //if there is no cart count stored yet, set the value to 0
    if (cartCount === null) {
        cartCount = 0;
    }

    //find the cart badge on desktop view
    const cartBadge = document.getElementById("cartBadge");

    //find the cart badge on mobile view
    const mobileCartBadge = document.getElementById("mobileCartBadge");

    //if the desktop cart badge exists, display the cart count
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }

    //if the mobile cart badge exists, display the cart count
    if (mobileCartBadge) {
        mobileCartBadge.textContent = cartCount;
    }

});