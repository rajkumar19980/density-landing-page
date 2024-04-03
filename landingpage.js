document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    let lastScrollTop = 0;

    function showSlide() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const direction = scrollTop > lastScrollTop ? 'down' : 'up';
        lastScrollTop = scrollTop;

        let visibleSlideIndex = 0;

        slides.forEach((slide, index) => {
            const slidePosition = slide.getBoundingClientRect().top;
            if (direction === 'down' && slidePosition < window.innerHeight / 2) {
                visibleSlideIndex = index;
            } else if (direction === 'up' && slidePosition < window.innerHeight / 2 && slidePosition > 0) {
                visibleSlideIndex = index;
            }
        });

        slides.forEach((slide, index) => {
            if (index === visibleSlideIndex) {
                slide.classList.add('active');
            } else {
                setTimeout(() => slide.classList.remove('active'), 500); // Delay removal of active class for next slide
            }
        });
    }

    // Show the first slide initially
    showSlide();

    // Debounce the scroll event
    let isScrolling;
    window.addEventListener('scroll', function () {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
            showSlide();
        }, 100);
    });
});

//questions 
const headings = document.querySelectorAll('h3.que');
headings.forEach((heading) => {
    heading.addEventListener('click', function () {
        const span = this.nextElementSibling;
        span.classList.toggle('ans');
    });
});
