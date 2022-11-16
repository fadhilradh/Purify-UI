const accordions = document.querySelectorAll(".accordion");
const accordionContainer = document.querySelector(".accordion-container");

// using event delegation
accordionContainer.addEventListener("click", (e) => {
  const accordionHeader = e.target.closest(".accordion__header");
  if (accordionHeader) {
    const currentAccordion = accordionHeader.parentElement;
    currentAccordion.classList.toggle("is-open");
  }
});
