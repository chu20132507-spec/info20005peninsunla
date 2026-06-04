//wait
window.addEventListener("load", function(){

    const continueBtn = document.getElementById("continueBtn");

    if (!continueBtn){
        return;
    }

    continueBtn.addEventListener("click", goToPurchase);

});

//continue to purchase page
function goToPurchase(){
    //dotre data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const streetAddress = document.getElementById("streetAddress").value;
    const state = document.getElementById("state").value;
    const postcode = document.getElementById("postcode").value;
    const suburb = document.getElementById("suburb").value;
    const phone = document.getElementById("phone").value;

    if (
        firstName === "" ||
        lastName === "" ||
        streetAddress === "" ||
        state === "" ||
        postcode === "" ||
        suburb === "" ||
        phone === ""
    ){
        alert("Please complete all delivery information.");
        return;
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("streetAddress", streetAddress);
    localStorage.setItem("state", state);
    localStorage.setItem("postcode", postcode);
    localStorage.setItem("suburb", suburb);
    localStorage.setItem("phone", phone);

    window.location.href = "purchase.html";

}