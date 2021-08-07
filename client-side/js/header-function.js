var profileBtn = document.querySelector(".header__profile_button");
var profileMenu = document.querySelector(".header__profile_menu");
var menuBackdrop = document.querySelector(".header__profileMenu_background");
var menuCloseBtn = document.querySelector("menu__close");

function openProfileMenu() {
  profileMenu.style.display = "block";
  menuBackdrop.style.display = "block";
}

function closeProfileMenu() {
  profileMenu.style.display = "none";
  menuBackdrop.style.display = "none";
}
