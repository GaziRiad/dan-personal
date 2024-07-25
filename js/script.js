const btnMenu = document.querySelector(".btn-mobile-nav");
const navMenu = document.querySelector(".nav-menu");

///////////////////////////////////////////////////////////
// Make mobile navigation work

btnMenu.addEventListener("click", function () {
  navMenu.classList.toggle("nav-open");
  if (navMenu.classList.contains("nav-open")) {
    document.documentElement.style.overflowY = "hidden";
  } else {
    document.documentElement.style.overflowY = "auto";
  }

  console.log("Humberger button click!");
});
