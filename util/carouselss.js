const slides = document.querySelectorAll(".crimg");
let slideIndex = 0;
let intervalID = null;


document.addEventListener("DOMContentLoaded", initializeCarousel);
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

function initializeCarousel(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("display-image");
        intervalID = setInterval(nextSlide, 4000);
    }
}

function showSlide(index){
    if(index < 0){
        slideIndex = slides.length - 1;
    }else if(index >= slides.length){
        slideIndex = 0;
    }

    slides.forEach(slide => {
        slide.classList.remove("display-image");
    });
    slides[slideIndex].classList.add("display-image");
}

function nextSlide(){
    clearInterval(intervalID);
    slideIndex++;
    showSlide(slideIndex);
    intervalID = setInterval(nextSlide, 4000);
}

function prevSlide(){
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
    intervalID = setInterval(nextSlide, 4000);
}