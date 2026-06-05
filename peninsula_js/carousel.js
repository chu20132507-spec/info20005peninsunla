window.addEventListener("load", function (){

        //carousel
        //prepare
        const track = document.querySelector('.product-track');
        const wrapper = document.querySelector('.carousel-wrapper');
        const items = document.querySelectorAll('.product-item');

        const total = items.length;
        let index = Math.floor(total / 2);

        //start with the middle one and update position and active product
        function updateCarousel() {
            const item = items[index];
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            //transformation of products and ensure the the active one in the middle
            const wrapperRect = wrapper.getBoundingClientRect();
            const center = wrapperRect.left + wrapperRect.width / 2;
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const moveX = itemCenter - center;
            const currentTransform = getComputedStyle(track).transform;

            //find current product and distance to center
            let currentX = 0;
            if (currentTransform !== "none") {
                const matrix = new DOMMatrix(currentTransform);
                currentX = matrix.m41;
            }

            track.style.transform = `translateX(${currentX - moveX}px)`;
        }

        //next and return to the initial one
        function slide() {
            index++;
            if (index >= total) {
                index = 0;
            }
            updateCarousel();
        }

        updateCarousel();
        setInterval(slide, 2000);

});