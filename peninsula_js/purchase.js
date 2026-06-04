//wait
window.addEventListener("load", function(){

    loadOrderSummary();

    const googlePayBtn = document.getElementById("googlePayBtn");

    if (googlePayBtn){
        googlePayBtn.addEventListener("click", selectGooglePay);
    }

    const payBtn = document.querySelector(".purchase-btn");

    if (payBtn){
        payBtn.addEventListener("click", processPayment);
    }

});

//display order summary
function loadOrderSummary(){

    const purchaseItems = document.getElementById("purchaseItems");
    let checkoutItems = localStorage.getItem("checkoutItems");
    //empty cart
    if (checkoutItems === null || checkoutItems === ""){
        return;
    }

    purchaseItems.innerHTML = "";
    checkoutItems = checkoutItems.split(",");
    //count item quantity
    let itemCounts = {};

    checkoutItems.forEach(function(id){

        if (id === ""){
            return;
        }

        if (itemCounts[id] === undefined){
            itemCounts[id] = 1;
        }
        else{
            itemCounts[id] += 1;
        }

    });

    let subtotal = 0;

    for (let id in itemCounts){

        const product = products[id];

        //calculate item total
        let price = Number(product.price.replace("$",""));
        let quantity = itemCounts[id];
        let itemTotal = price * quantity;

        subtotal += itemTotal;

        const row = document.createElement("div");

        row.classList.add("summary-row");

        //create item details
        const nameText = document.createElement("p");
        nameText.textContent = product.name + " x " + quantity;

        const priceText = document.createElement("p");
        priceText.textContent = "$" + itemTotal.toFixed(2);

        row.appendChild(nameText);
        row.appendChild(priceText);
        
        //add row to summary
        purchaseItems.appendChild(row);

    }

    const shippingFee = 10;
    const total = subtotal + shippingFee;

    document.getElementById("subtotalPrice").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("totalPrice").textContent = "$" + total.toFixed(2);

}

//google pay selected
function selectGooglePay(){
    const googlePayBtn = document.getElementById("googlePayBtn");
    googlePayBtn.classList.toggle("selected");
}

//save order
function saveOrder(){

    const checkoutItems = localStorage.getItem("checkoutItems");

    const subtotal = document.getElementById("subtotalPrice").textContent;
    const total = document.getElementById("totalPrice").textContent;

    localStorage.setItem("orderItems", checkoutItems);
    localStorage.setItem("orderSubtotal", subtotal);
    localStorage.setItem("orderTotal", total);
    localStorage.setItem("orderStatus", "In Progress");

}

//click pay
function processPayment(){

    const googlePaySelected =
        document.getElementById("googlePayBtn")
        .classList.contains("selected");

    if (googlePaySelected){
        saveOrder();
        window.location.href = "success.html";
        return;
    }

    const cardName = document.getElementById("cardName").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (cardName === "" || cardNumber === "" || expiryDate === "" ||
        cvv === ""
    ){
        alert("Please complete all card details.");
        return;
    }
    saveOrder();
    window.location.href = "success.html";
}