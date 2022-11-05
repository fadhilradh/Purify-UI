const mainWrapper = document.querySelector("#main-wrapper");
const toggleSidebarButton = document.querySelector("#toggle-sidebar");

toggleSidebarButton.addEventListener("click", () => {
  mainWrapper.classList.toggle("sidebar-is-open");
  if (mainWrapper.classList.contains("sidebar-is-open")) {
    toggleSidebarButton.innerText = "Close me";
  } else {
    toggleSidebarButton.innerText = "Open me";
  }
});
