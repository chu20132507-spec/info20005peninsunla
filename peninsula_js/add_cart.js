//wait
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

    //desktop cart badge exists display the cart count
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }

    //mobile cart badge exists display the cart count
    if (mobileCartBadge) {
        mobileCartBadge.textContent = cartCount;
    }

});