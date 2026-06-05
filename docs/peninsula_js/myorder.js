//wait
window.addEventListener("load", function(){

    loadOrder();

    const deleteBtn = document.querySelector(".delete-order-btn");

    console.log(deleteBtn);

    if (deleteBtn){
        deleteBtn.addEventListener("click", deleteOrder);
    }

});

//display order
function loadOrder(){

    const orderItemsContainer = document.getElementById("orderItemsContainer");
    const emptyOrder = document.getElementById("emptyOrder");

    let orderItems = localStorage.getItem("orderItems");

    //no order
    if (orderItems === null || orderItems === ""){
        console.log("NO ORDER");
        emptyOrder.style.display = "block";

        document.querySelector(".order-status").style.display = "none";
        document.querySelector(".order-totals").style.display = "none";
        document.querySelector(".delete-divider").style.display = "none";
        document.querySelector(".delete-order-btn").style.display = "none";

        return;
    }

    emptyOrder.style.display = "none";

    orderItemsContainer.innerHTML = "";

    orderItems = orderItems.split(",");

    //count quantity
    let itemCounts = {};

    orderItems.forEach(function(id){

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

    //display items
    for (let id in itemCounts){

        const product = products[id];
        console.log(id);
        console.log(product);
        if (!product){
            continue;
        }

        const item = document.createElement("section");

        item.classList.add("order-item");
        item.innerHTML =
        "<img src='" + product.shopImage + "' alt='" + product.name + "'>" +
        "<div class='order-info'>" +
        "<h3>" + product.name + "</h3>" +
        "<p>" + product.price + "</p>" +
        "</div>" +
        "<div class='order-quantity'>" +
        "x " + itemCounts[id] +
        "</div>";

        orderItemsContainer.appendChild(item);
    }
    //display totals
    document.getElementById("orderSubtotal").textContent =
    localStorage.getItem("orderSubtotal");

    document.getElementById("orderTotal").textContent =
    localStorage.getItem("orderTotal");

    document.getElementById("orderStatus").textContent =
    localStorage.getItem("orderStatus");

}

//delete order
function deleteOrder(){

    localStorage.removeItem("orderItems");
    localStorage.removeItem("orderSubtotal");
    localStorage.removeItem("orderTotal");
    localStorage.removeItem("orderStatus");

    document.getElementById("orderItemsContainer").innerHTML = "";
    document.getElementById("emptyOrder").style.display = "block";

    document.querySelector(".order-status").style.display = "none";
    document.querySelector(".order-totals").style.display = "none";
    document.querySelector(".delete-divider").style.display = "none";
    document.querySelector(".delete-order-btn").style.display = "none";
}