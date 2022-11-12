const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const carousel = document.querySelector(".carousel__contents");
const carouselDots = document.querySelectorAll(".carousel__dot");
const dotsContainer = document.querySelector(".carousel__dots");

function updateActiveDot(buttonType) {
  const selectedDot = dotsContainer.querySelector(".is-selected");
  const targetDot =
    buttonType === "next"
      ? selectedDot.nextElementSibling
      : selectedDot.previousElementSibling;
  selectedDot.classList.remove("is-selected");
  targetDot.classList.add("is-selected");
}

function updateSlide(targetSlide, currentSlide) {
  const targetSlideLeft = getComputedStyle(targetSlide).left;
  carousel.style.left = "-" + targetSlideLeft;
  currentSlide.classList.remove("is-selected");
  targetSlide.classList.add("is-selected");
}

nextButton.addEventListener("click", () => {
  prevButton.removeAttribute("hidden");
  const currentSlide = carousel.querySelector(".is-selected");
  const nextSlide = currentSlide.nextElementSibling;
  updateSlide(nextSlide, currentSlide);
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute("hidden", true);
  }
  updateActiveDot("next");
});

prevButton.addEventListener("click", () => {
  const currentSlide = carousel.querySelector(".is-selected");
  const prevSlide = currentSlide.previousElementSibling;
  updateSlide(prevSlide, currentSlide);
  if (prevSlide.nextElementSibling) {
    nextButton.removeAttribute("hidden");
  }
  if (!prevSlide.previousElementSibling) {
    prevButton.setAttribute("hidden", true);
  }
  updateActiveDot("prev");
});

carouselDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    carouselDots.forEach((dot) => {
      dot.classList.remove("is-selected");
    });
    dot.classList.add("is-selected");
    const slides = carousel.querySelectorAll(".carousel__slide");
    const selectedSlideLeft = getComputedStyle(slides[index]).left;
    carousel.style.left = "-" + selectedSlideLeft;
  });
});
