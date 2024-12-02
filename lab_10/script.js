// Show the scroll-to-top button after scrolling down
window.onscroll = function () {
    const scrollButton = document.getElementById('scrollTopButton');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

// Smooth scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
