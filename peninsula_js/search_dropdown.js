window.addEventListener("load", function () {
/*search dropdown*/
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
});