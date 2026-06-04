//wait
window.addEventListener("load", function(){
    renderOrderSummary();
});

function renderOrderSummary(){

    let checkoutItems =localStorage.getItem("checkoutItems");

    //empty order
    if (checkoutItems === null ||checkoutItems === ""){
        return;
    }

    checkoutItems = checkoutItems.split(",");
    let subtotal = 0;

    //calculate subtotal
    checkoutItems.forEach(function(id){

        if (id === ""){
            return;
        }

        const product = products[id];

        if (!product){
            return;
        }

        subtotal +=
        Number(
            product.price.replace("$","")
        );

    });
    
    //calculate total
    const shippingFee = 10;
    const total = subtotal + shippingFee;
    
    //update prices
    document.getElementById("subtotalPrice").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("totalPrice").textContent = "$" + total.toFixed(2);

}