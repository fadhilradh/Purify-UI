const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    tabs.forEach((tabby) => {
      tabby.classList.remove("is-selected");
    });
    tab.classList.add("is-selected");
    tabContents.forEach((t) => t.classList.remove("is-selected"));
    const targetTabContent = document.querySelector("#" + tab.dataset.target);
    targetTabContent.classList.add("is-selected");
  });
});
