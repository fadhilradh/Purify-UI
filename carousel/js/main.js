const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const carousel = document.querySelector(".carousel__contents");

nextButton.addEventListener("click", () => {
  prevButton.removeAttribute("hidden");
  const currentImage = carousel.querySelector(".is-selected");
  const nextImage = currentImage.nextElementSibling;
  const nextImageLeft = getComputedStyle(nextImage).left;
  carousel.style.left = "-" + nextImageLeft;
  currentImage.classList.remove("is-selected");
  nextImage.classList.add("is-selected");
  if (!nextImage.nextElementSibling) {
    nextButton.setAttribute("hidden", true);
  }
});

prevButton.addEventListener("click", () => {
  const currentImage = carousel.querySelector(".is-selected");
  const prevImage = currentImage.previousElementSibling;
  const prevImageLeft = getComputedStyle(prevImage).left;
  carousel.style.left = "-" + prevImageLeft;
  currentImage.classList.remove("is-selected");
  prevImage.classList.add("is-selected");
  if (prevImage.nextElementSibling) {
    nextButton.removeAttribute("hidden");
  }
  if (!prevImage.previousElementSibling) {
    prevButton.setAttribute("hidden", true);
  }
});
