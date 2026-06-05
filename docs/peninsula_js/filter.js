window.addEventListener("load", function () {
    //collect
    const sortButtons = document.querySelectorAll(".sort-btn");
    const productCards = Array.from(document.querySelectorAll(".product-card"));
    const productGrids = document.querySelectorAll(".product-grid");
    const sections = document.querySelectorAll(".product-section");

    //sort buttons
    sortButtons.forEach(function(button){
        button.addEventListener("click", function(){

            //active button
            sortButtons.forEach(function(btn){
                btn.classList.remove("active");
            });

            button.classList.add("active");

            //button text
            const text = button.textContent.trim();

            //lowest price
            if(text === "Lowest"){

                //hide section titles
                sections.forEach(function(section){
                    section.querySelector("h2").style.display = "none";
                });

                //sort low to high
                productCards.sort(function(a,b){
                    return a.dataset.price - b.dataset.price;
                });

            }

            //highest price
            else if(text === "Highest"){

                //hide section titles
                sections.forEach(function(section){
                    section.querySelector("h2").style.display = "none";
                });

                //sort high to low
                productCards.sort(function(a,b){
                    return b.dataset.price - a.dataset.price;
                });

            }

            //featured
            else if(text === "Featured"){
                location.reload();
            }

            //clear all grids
            productGrids.forEach(function(grid){
                grid.innerHTML = "";
            });

            //append sorted cards
            productCards.forEach(function(card){
                productGrids[0].appendChild(card);
            });

        });
    });
});