const headerHeight = document.querySelector("header");
var navlistRemove = false;

window.addEventListener("scroll", function () {
  headerHeight.classList.toggle("sticky", window.scrollY > 30);
});

const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menu.addEventListener("click", function () {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
  navlistRemove = true;
});

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

function view() {
  alert("I will upload all my project to my github soon...");
}
