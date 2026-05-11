    window.onload = function () {

        /*carousel*/
        const track = document.querySelector('.product-track');
        const wrapper = document.querySelector('.carousel-wrapper');
        const items = document.querySelectorAll('.product-item');

        const total = items.length;
        let index = Math.floor(total / 2);
        function updateCarousel() {
            const item = items[index];
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const wrapperRect = wrapper.getBoundingClientRect();
            const center = wrapperRect.left + wrapperRect.width / 2;
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const moveX = itemCenter - center;
            const currentTransform = getComputedStyle(track).transform;

            let currentX = 0;
            if (currentTransform !== "none") {
                const matrix = new DOMMatrix(currentTransform);
                currentX = matrix.m41;
            }

            track.style.transform = `translateX(${currentX - moveX}px)`;
        }

        function slide() {
            index++;
            if (index >= total) {
                index = 0;
            }
            updateCarousel();
        }

        updateCarousel();
        setInterval(slide, 2000);

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
    };