const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}
const mainPageBtn = document.getElementById('mainPageBtn');
mainPageBtn.addEventListener('click', () => {
    // Update the path to your home page
    window.location.href = "/Tuhin/index1.html"; 
});
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Auto-slide
setInterval(nextSlide, 6000);
