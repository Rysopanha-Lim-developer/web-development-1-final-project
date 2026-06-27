function showCategory(category, button) {
  const cafeCards = document.querySelectorAll(".cafe");
  const dessertCards = document.querySelectorAll(".dessert");

  if (category === "cafe") {
    cafeCards.forEach((card) => (card.style.display = "block"));
    dessertCards.forEach((card) => (card.style.display = "none"));
  } else if (category === "desserts") {
    cafeCards.forEach((card) => (card.style.display = "none"));
    dessertCards.forEach((card) => (card.style.display = "block"));
  } else if (category === "all") {
    cafeCards.forEach((card) => (card.style.display = "block"));
    dessertCards.forEach((card) => (card.style.display = "block"));
  }

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }
}

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
  showCategory("all", null);
});
