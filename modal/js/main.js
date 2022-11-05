const modalOpenButton = document.querySelector(".jsModalButton");
const body = document.body;
const modalCloseButton = document.querySelector(".modal__close-button");

modalOpenButton.addEventListener("click", () => {
  body.classList.toggle("modal-is-open");
});

modalCloseButton.addEventListener("click", () => {
  body.classList.toggle("modal-is-open");
});
