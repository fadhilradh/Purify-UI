const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const carousel = document.querySelector(".carousel__contents");

nextButton.addEventListener("click", () => {
  prevButton.removeAttribute("hidden");
  const currentSlide = carousel.querySelector(".is-selected");
  const nextSlide = currentSlide.nextElementSibling;
  const nextSlideLeft = getComputedStyle(nextSlide).left;
  carousel.style.left = "-" + nextSlideLeft;
  currentSlide.classList.remove("is-selected");
  nextSlide.classList.add("is-selected");
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute("hidden", true);
  }
});

prevButton.addEventListener("click", () => {
  const currentSlide = carousel.querySelector(".is-selected");
  const prevSlide = currentSlide.previousElementSibling;
  const prevSlideLeft = getComputedStyle(prevSlide).left;
  carousel.style.left = "-" + prevSlideLeft;
  currentSlide.classList.remove("is-selected");
  prevSlide.classList.add("is-selected");
  if (prevSlide.nextElementSibling) {
    nextButton.removeAttribute("hidden");
  }
  if (!prevSlide.previousElementSibling) {
    prevButton.setAttribute("hidden", true);
  }
});
