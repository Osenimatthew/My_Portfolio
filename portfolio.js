const menu = document.querySelector("#mobile_menu");
const menulinks = document.querySelector(".nav_links");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menulinks.classList.toggle("active");
});
