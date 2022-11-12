const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const carousel = document.querySelector(".carousel__contents");
const carouselDots = document.querySelectorAll(".carousel__dot");
const dotsContainer = document.querySelector(".carousel__dots");
const slides = carousel.querySelectorAll(".carousel__slide");

function updateSlide(targetSlide, currentSlide) {
  const targetSlideLeft = getComputedStyle(targetSlide).left;
  carousel.style.left = "-" + targetSlideLeft;
  currentSlide.classList.remove("is-selected");
  targetSlide.classList.add("is-selected");
}

function updateActiveDot(buttonType) {
  const selectedDot = dotsContainer.querySelector(".is-selected");
  const targetDot =
    buttonType === "next"
      ? selectedDot.nextElementSibling
      : selectedDot.previousElementSibling;
  selectedDot.classList.remove("is-selected");
  targetDot.classList.add("is-selected");
}

slides.forEach((slide, index) => {
  const slideWidth = slide.getBoundingClientRect().width;
  slide.style.left = slideWidth * index + "px";
});

const slideWidth = nextButton.addEventListener("click", () => {
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

    if (index === 0) {
      nextButton.removeAttribute("hidden");
      prevButton.setAttribute("hidden", true);
    } else if (index === 1) {
      prevButton.removeAttribute("hidden");
      nextButton.removeAttribute("hidden");
    } else if (index === 2) {
      prevButton.removeAttribute("hidden");
      nextButton.setAttribute("hidden", true);
    }
  });
});
