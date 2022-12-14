const modalOpenButton = document.querySelector(".jsModalButton");
const body = document.body;
const modalCloseButton = document.querySelector(".modal__close-button");
const modalOverlay = document.querySelector(".modal-overlay");

modalOpenButton.addEventListener("click", () => {
  body.classList.toggle("modal-is-open");
});

modalCloseButton.addEventListener("click", () => {
  body.classList.toggle("modal-is-open");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) body.classList.remove("modal-is-open");
});
