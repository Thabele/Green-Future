document.querySelectorAll('.overlay button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.parentElement.querySelector('h2').innerText;
    alert(`You selected: ${category}`);
  });
});
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0; // Reset to the first slide
    }
    if (index < 0) {
        slideIndex = slides.length - 1; // Go to the last slide
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Auto-show the first slide
showSlide(slideIndex);
setInterval(nextSlide, 3000);
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.getElementById("nav-links");
    const toggleButton = document.querySelector(".nav-toggle");

    toggleButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

function toggleReadMore() {
    let moreText = document.getElementById("more-text");
    let btnText = document.getElementById("read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        btnText.innerText = "Read More";
    }
}
