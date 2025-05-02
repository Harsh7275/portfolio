let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }


    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";


    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    setTimeout(showSlides, 2000);
}

function plusSlides(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("mySlides");

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

window.onload = showSlides;
