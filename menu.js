function initHotDealToggle() {
  const toggleButton = document.getElementById("mini-list-toggle");
  const miniList = document.getElementById("mini-list");
  const toggler = document.getElementById("toggler");

  if (toggleButton && miniList && toggler) {
    toggleButton.addEventListener("click", () => {
      miniList.classList.toggle("shown");
      toggler.classList.toggle("spin");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initHotDealToggle();
});
