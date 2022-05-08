export const scroll = () => {
    const scroll = document.querySelector('.scroll');

    function trackScroll() {
        const scrolles = window.pageYOffset;
        const clnHight = document.documentElement.clientHeight;
        if (scrolles > clnHight) {
            scroll.classList.add('scroll-show');
        }
        if (scrolles < clnHight) {
            scroll.classList.remove('scroll-show');
        }
    }

    function scrollToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(scrollToTop, 0);
        }
    }
    window.addEventListener('scroll', trackScroll);
    scroll.addEventListener('click', scrollToTop);
};