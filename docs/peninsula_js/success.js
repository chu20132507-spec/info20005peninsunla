//wait
window.addEventListener("load", function(){
    localStorage.removeItem("cartItems");
    localStorage.removeItem("checkoutItems");
    setTimeout(goToCart, 3000);
});

//go to cart page
function goToCart(){
    window.location.href = "cart.html";
}