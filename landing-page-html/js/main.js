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


const menuExtend = () => { 
    document.getElementById("menu-mobile").style.display = 'block'
    document.querySelector('.fa-ellipsis').style.visibility = 'hidden'
    document.querySelector('.fa-ellipsis-vertical').style.visibility = 'visible'
}

const closeMenuExtend = () => { 
    document.getElementById("menu-mobile").style.display = 'none'
    document.querySelector('.fa-ellipsis-vertical').style.visibility = 'hidden'
    document.querySelector('.fa-ellipsis').style.visibility = 'visible'
}
