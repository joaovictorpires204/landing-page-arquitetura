const backToTopBtn = document.getElementById("back-to-top-btn");

window.onscroll = function () {
    if (document.body.scrollTop === 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}