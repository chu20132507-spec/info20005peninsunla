//wait
window.addEventListener("load", function(){
    localStorage.removeItem("cartItems");
    localStorage.removeItem("checkoutItems");
    window.addEventListener("load", function(){
        localStorage.removeItem("cartItems");
        localStorage.removeItem("checkoutItems");
    });
});

//go to cart page
function goToCart(){
    window.location.href = "cart.html";
}