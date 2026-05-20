window.addEventListener("load", function (){

    //category dropdown
    const categoryBtn = document.getElementById("categoryBtn");
    const dropdown = document.getElementById("categoryDropdown");
    //filter buttons
    const buttons = document.querySelectorAll(".category-dropdown button");
    //sections
    const juiceSection = document.getElementById("juiceSection");
    const cleanseSection = document.getElementById("cleanseSection");
    const retailSection = document.getElementById("retailSection");

    //open and close dropdown
    categoryBtn.addEventListener("click", function(event){
        event.stopPropagation();
        dropdown.classList.toggle("active");
    });
    
    //prevent dropdown close
    dropdown.addEventListener("click", function(event){
        event.stopPropagation();
    });

    //filter products
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            const filter = button.dataset.filter;
            //all
            if(filter === "all"){
                juiceSection.style.display = "block";
                cleanseSection.style.display = "block";
                retailSection.style.display = "block";
            }

            //juice
            else if(filter === "juice"){
                juiceSection.style.display = "block";
                cleanseSection.style.display = "none";
                retailSection.style.display = "none";
            }

            //cleanse
            else if(filter === "cleanse"){
                juiceSection.style.display = "none";
                cleanseSection.style.display = "block";
                retailSection.style.display = "none";
            }

            //retail
            else if(filter === "retail"){
                juiceSection.style.display = "none";
                cleanseSection.style.display = "none";
                retailSection.style.display = "block";
            }

            //close dropdown
            dropdown.classList.remove("active");
        });

    });

    //click outside to close
    window.addEventListener("click", function(){
        dropdown.classList.remove("active");
    });

});