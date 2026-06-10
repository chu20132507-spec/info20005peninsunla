window.addEventListener("load", function () {
    //search dropdown
    const searchBar = document.getElementById("searchBar");
    const searchDropdown = document.getElementById("searchDropdown");

    searchBar.addEventListener("click", function(event){
        event.stopPropagation();
        searchDropdown.classList.toggle("active");
    });

    searchDropdown.addEventListener("click", function(event){
        event.stopPropagation();
    });

    window.addEventListener("click", function(){
        searchDropdown.classList.remove("active");
    });

    const carrotHistory = document.getElementById("carrotHistory");

    if(carrotHistory){
        carrotHistory.addEventListener("click", function(){
            if(window.location.pathname.includes("/docs/")){
                window.location.href = "shop.html?search=carrot";
            }
            else{
                window.location.href = "docs/shop.html?search=carrot";
            }
        });
    }
    
});