const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const accordionHeader = accordion.querySelector(".accordion__header");
  accordionHeader.addEventListener("click", () => {
    accordion.classList.toggle("is-open");
  });
});
