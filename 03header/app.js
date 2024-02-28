const toggleMenu = document.querySelector(".toggle-container");
toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("change");
  showMobileMenu();
});

// for mobile menu
const ulList = document.querySelector(".list-menu");
function showMobileMenu() {
  if (ulList.style.display === "block") {
    ulList.style.display = "none";
  } else {
    ulList.style.display = "block";
  }
}
