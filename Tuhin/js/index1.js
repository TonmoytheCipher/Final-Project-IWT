const slides=document.querySelectorAll(".slide");
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
let index=0;

function showSlide(n)
{
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

function nextSlide()
{
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide()
{
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

setInterval(nextSlide, 6000);
