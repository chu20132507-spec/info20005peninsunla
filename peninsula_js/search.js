window.addEventListener("load", function(){
    //collect
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const cards = document.querySelectorAll(".product-card");
    const resultText = document.getElementById("resultText");
    const sections = document.querySelectorAll(".product-section h2");

    //search function
    function searchProducts(keyword){

        //clean keyword
        keyword = keyword.trim().toLowerCase();

        //count result
        let count = 0;

        //hide section titles
        sections.forEach(function(section){
            section.style.display = "none";
        });

        //search cards
        cards.forEach(function(card){
            const title = card.querySelector("h3").textContent.toLowerCase();

            //found
            if(title.includes(keyword)){
                card.style.display = "block";
                count++;
            }

            //not found
            else{
                card.style.display = "none";
            }

        });

        //show result text
        if(resultText){
            if(count > 0){
                resultText.textContent = count + " results found";
            }

            else{
                resultText.textContent = "No products found";
            }
        }
    }

    //click search button
    if(searchBtn && searchInput){
        searchBtn.addEventListener("click", function(){

            const keyword = searchInput.value.trim();

            if(window.location.pathname.includes("/docs/")){
                window.location.href = "shop.html?search=" + keyword;
            }
            else{
                window.location.href = "docs/shop.html?search=" + keyword;
            }
        });
    }

    //different pages
    const params = new URLSearchParams(window.location.search);
    const urlKeyword = params.get("search");

    if(urlKeyword){
        if(searchInput){
            searchInput.value = urlKeyword;
        }
        //search
        searchProducts(urlKeyword);
    }
});