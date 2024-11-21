let slideIndex = 1; 
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = Array.from(document.querySelectorAll(".flex-center")); 
    const dots = Array.from(document.querySelectorAll(".dot")); 

    if (n > slides.length) slideIndex = 1; 
    if (n < 1) slideIndex = slides.length; 

    slides.map(slide => slide.style.display = "none");
    dots.map(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "flex"; 
    dots[slideIndex - 1].classList.add("active"); 
}
