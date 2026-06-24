function showCategory(category, button) {
  const cafeSection = document.querySelector(".cafe-section");
  const dessertSection = document.querySelector(".dessert-section");

  [cafeSection, dessertSection].forEach((section) => {
    if (section) {
      section.classList.remove("primary", "secondary");
    }
  });

  if (category === "cafe") {
    cafeSection?.classList.add("primary");
    dessertSection?.classList.add("secondary");
  } else if (category === "desserts") {
    dessertSection?.classList.add("primary");
    cafeSection?.classList.add("secondary");
  } else if (category === "all") {
    cafeSection?.classList.add("primary");
    dessertSection?.classList.add("secondary");
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
