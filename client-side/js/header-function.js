var profileBtn = document.querySelector(".header__profile_button");
var profileMenu = document.querySelector(".header__profile_menu");
var menuBackdrop = document.querySelector(".header__profileMenu_backdrop");
var menuCloseBtn = document.querySelector("menu__close");
var profilePortalBtn = document.querySelector(".header__profile_portal");
var aboutUsBtn = document.querySelector(".header__profile_aboutUs");
var contactUsBtn = document.querySelector(".header__profile_contactUs");
var faqBtn = document.querySelector(".header__profile_faq");
var termsBtn = document.querySelector(".header__profile_terms");
var startBtn = document.querySelector(".header__start");
var startMenu = document.querySelector(".menu");

function openStartMenu() {
  startBtn.style.display = "block";
}

function hideStartButton() {
  startBtn.style.display = "none";
}
startBtn.addEventListener("click", () => {
  openStartMenu();
  hideStartButton();
});

// startMenu.addEventListener("click", () => {
//   closeProfileMenu();
// });

function openProfileMenu() {
  profileMenu.style.display = "block";
  menuBackdrop.style.display = "block";
}

function closeProfileMenu() {
  profileMenu.style.display = "none";
  menuBackdrop.style.display = "none";
}

profileBtn.addEventListener("click", () => {
  openProfileMenu();
});

menuBackdrop.addEventListener("click", () => {
  closeProfileMenu();
});

menuCloseBtn.addEventListener("click", () => {
  closeProfileMenu();
});

profilePortalBtn.addEventListener("click", () => {
  closeProfileMenu();
});

aboutUsBtn.addEventListener("click", () => {
  closeProfileMenu();
});

contactUsBtn.addEventListener("click", () => {
  closeProfileMenu();
});

faqBtn.addEventListener("click", () => {
  closeProfileMenu();
});

termsBtn.addEventListener("click", () => {
  closeProfileMenu();
});
